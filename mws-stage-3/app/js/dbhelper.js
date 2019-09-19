const RESTAURANTS = "restaurants";
/**
 * Common "database" helper functions.
 * These functions utilize the sw functionality 
 * to cache the images and data on the client-side 
 * in order to allow offline work capability. 
 */
class DBHelper {
  /**
   * Database URL call to restaurant API.
   * TODO: Change this to restaurants.json file location on your server.
   */
  static get DATABASE_URL() {
    const port = 1337; // Change this to your server port
    return `http://localhost:${port}/restaurants`;
  }

  /**
   * GET all restaurants from our API
   * Response is returned in JSON Format
   */
  static fetchRestaurants(callback) {
    showCachedMessages(callback).then(() => {
      fetch(this.DATABASE_URL)
        .then(response => {
          if (response.status !== 200) {
            callback("API call failed", null);
            return;
          }
          response
            .json()
            .then(data => {
              updateCache(data);
              callback(null, data);
            })
            .catch(error => callback(error, null));
        })
        .catch(error => callback(error, null));
    });
  }

  /**
   * GET a restaurant by its ID.
   * Find restaurant based on id. 
   * Error handeling. 
   */
  static fetchRestaurantById(id, callback) {
    // fetch all restaurants with proper error handling.
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        const restaurant = restaurants.find(r => r.id == id);
        if (restaurant) {
          // Got the restaurant
          callback(null, restaurant);
        } else {
          // Restaurant does not exist in the database
          callback("Restaurant does not exist", null);
        }
      }
    });
  }

  /**
   * GET restaurants by a cuisine type with proper error handling.
   */
  static fetchRestaurantByCuisine(cuisine, callback) {
    // Fetch all restaurants  with proper error handling
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given cuisine type
        const results = restaurants.filter(r => r.cuisine_type == cuisine);
        callback(null, results);
      }
    });
  }

  /**
   * GET restaurants by a neighborhood with proper error handling.
   */
  static fetchRestaurantByNeighborhood(neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given neighborhood
        const results = restaurants.filter(r => r.neighborhood == neighborhood);
        callback(null, results);
      }
    });
  }

  /**
   * GET restaurants by a cuisine and a neighborhood with proper error handling.
   */
  static fetchRestaurantByCuisineAndNeighborhood(
    cuisine,
    neighborhood,
    callback
  ) {
    // GET all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        let results = restaurants;
        if (cuisine != "all") {
          // filter by cuisine
          results = results.filter(r => r.cuisine_type == cuisine);
        }
        if (neighborhood != "all") {
          // filter by neighborhood
          results = results.filter(r => r.neighborhood == neighborhood);
        }
        callback(null, results);
      }
    });
  }

  /**
   * GET all neighborhoods with proper error handling.
   */
  static fetchNeighborhoods(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all neighborhoods from all restaurants
        const neighborhoods = restaurants.map(
          (v, i) => restaurants[i].neighborhood
        );
        // Remove duplicates
        const uniqueNeighborhoods = neighborhoods.filter(
          (v, i) => neighborhoods.indexOf(v) == i
        );
        callback(null, uniqueNeighborhoods);
      }
    });
  }

  /**
   * GET all cuisines with proper error handling.
   */
  static fetchCuisines(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all cuisines from all restaurants
        const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type);
        // Remove duplicates from cuisines
        const uniqueCuisines = cuisines.filter(
          (v, i) => cuisines.indexOf(v) == i
        );
        callback(null, uniqueCuisines);
      }
    });
  }

  /**
   * Generate UNIQUE Restaurant page URL.
   */
  static urlForRestaurant(restaurant) {
    return `./restaurant.html?id=${restaurant.id}`;
  }

  /**
   * Generate restaurant image URL.
   */
  static imageUrlForRestaurant(restaurant) {
    let image = restaurant.photograph ? restaurant.photograph : "default";
    let imagePath = `/img/${image}`;
    let imgExtension = "jpg";
    let imageSuffix = "_2x.";

    //fetch 1x images for lower resolution devices
    if (window) {
      imageSuffix = window.innerWidth < 500 ? "_1x." : "_2x.";
    }

    return imagePath + imageSuffix + imgExtension;
  }

  /**
   * Map marker for a restaurant.
   */
  static mapMarkerForRestaurant(restaurant, map) {
    // https://leafletjs.com/reference-1.3.0.html#marker
    const marker = new L.marker(
      [restaurant.latlng.lat, restaurant.latlng.lng],
      {
        title: restaurant.name,
        alt: restaurant.name,
        url: DBHelper.urlForRestaurant(restaurant)
      }
    );
    marker.addTo(newMap);
    return marker;
  }
}

/* Index Db start */

// Use IndexedDB to store restuarants in the client's browser
// ref: https://developers.google.com/web/ilt/pwa/working-with-indexeddb

updateCache = restaurants => {
  if (!restaurants) {
    console.log("No data to update!");
  }

  getDBPromise().then(db => {
    let tx = db.transaction(RESTAURANTS, "readwrite");
    let store = tx.objectStore(RESTAURANTS);
    restaurants.map(data => store.put(data));

    //Delete restaurant data
    store
      .index("updatedAt")
      .openCursor(null, "prev")
      .then(cursor => {
        if (!cursor) return;
        return cursor.advance(30);
      })
      .then(function deleteRest(cursor) {
        if (!cursor) return;

        console.log("Delete data", cursor);
        cursor.delete();
        return cursor.continue().then(deleteRest);
      });
  });
};

getDBPromise = () => {
  //Making sure serviceWorker or IndexedDB is supported by the browser
  if (!navigator.serviceWorker || !("indexedDB" in window)) {
    return Promise.resolve();
  }

  //open our IndexDB
  return idb.open("restaurants-db", 5, upgradeDB => {
    // Create an objectStore for this database
    let store = upgradeDB.createObjectStore(RESTAURANTS, { keyPath: "id" });
    // Create an index 
    store.createIndex("updatedAt", "updatedAt");
  });
};

showCachedMessages = callback => {
  return getDBPromise().then(db => {
    let index = db
      .transaction(RESTAURANTS)
      .objectStore(RESTAURANTS)
      .index("updatedAt");
    return index.getAll().then(restaurants => {
      if (restaurants && restaurants.length > 0) {
        callback(null, restaurants);
      }
    });
  });
};

/* Index Db end */