let restaurant;var newMap;document.addEventListener("DOMContentLoaded",e=>{initMap()}),initMap=(()=>{fetchRestaurantFromURL((e,t)=>{e?console.error(e):(self.newMap&&(self.newMap.off(),self.newMap.remove()),self.newMap=L.map("map",{center:[t.latlng.lat,t.latlng.lng],zoom:16,scrollWheelZoom:!1}),L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}",{mapboxToken:"pk.eyJ1Ijoic2xwMTk5MyIsImEiOiJjampic2MxMTAxdjZyM2t0ZWh1dGpudjhnIn0.DkZx-BtdpEHfiX6HM5S33g",maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox.streets"}).addTo(newMap),fillBreadcrumb(),DBHelper.mapMarkerForRestaurant(self.restaurant,self.newMap))})}),fetchRestaurantFromURL=(e=>{if(self.restaurant)return void e(null,self.restaurant);const t=getParameterByName("id");t?DBHelper.fetchRestaurantById(t,(t,n)=>{self.restaurant=n,n?(fillRestaurantHTML(),e(null,n)):console.error(t)}):(error="No restaurant id in URL",e(error,null))}),fillRestaurantHTML=((e=self.restaurant)=>{document.getElementById("restaurant-name").innerHTML=e.name,document.getElementById("restaurant-address").innerHTML=e.address;const t=document.getElementById("restaurant-img");t.className="restaurant-img",t.setAttribute("alt",e.name),t.src=DBHelper.imageUrlForRestaurant(e),document.getElementById("restaurant-cuisine").innerHTML=e.cuisine_type,e.operating_hours&&fillRestaurantHoursHTML(),fillReviewsHTML()}),fillRestaurantHoursHTML=((e=self.restaurant.operating_hours)=>{const t=document.getElementById("restaurant-hours");t.innerHTML="";for(let n in e){const a=document.createElement("tr"),r=document.createElement("td");r.innerHTML=n,a.appendChild(r);const s=document.createElement("td");s.innerHTML=e[n],a.appendChild(s),t.appendChild(a)}}),fillReviewsHTML=((e=self.restaurant.reviews)=>{const t=document.getElementById("reviews-container");if(document.getElementById("reviews-title").innerHTML="Reviews",!e){const e=document.createElement("p");return e.innerHTML="No reviews yet!",void t.appendChild(e)}const n=document.getElementById("reviews-list");n.innerHTML="",e.forEach(e=>{n.appendChild(createReviewHTML(e))}),t.appendChild(n)}),createReviewHTML=(e=>{const t=document.createElement("li"),n=document.createElement("div");n.setAttribute("class","review-header");const a=document.createElement("p");a.innerHTML=e.name,n.appendChild(a);const r=document.createElement("p");r.innerHTML=e.date,n.appendChild(r),t.appendChild(n);const s=document.createElement("p");s.innerHTML=`Rating: ${e.rating}`,t.appendChild(s);const o=document.createElement("p");return o.innerHTML=e.comments,t.appendChild(o),t}),fillBreadcrumb=((e=self.restaurant)=>{document.getElementById("restaurant-label").innerHTML=e.name}),getParameterByName=((e,t)=>{t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");const n=new RegExp(`[?&]${e}(=([^&#]*)|&|#|$)`).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null});
//# sourceMappingURL=restaurant_info.js.map