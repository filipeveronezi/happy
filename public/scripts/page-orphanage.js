const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// create map
const mymap = L.map("mapid", options).setView([lat, lng], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker
L
.marker([lat, lng], { icon })
.addTo(mymap);

/* image gallery */
function selectImage() {
  const button = event.currentTarget;

  // remove all .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // select clicked image
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // update image with clicked image
  imageContainer.src = image.src;

  // add active class on click
  button.classList.add("active");
}
