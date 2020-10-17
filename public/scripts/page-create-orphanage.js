// create map
const mymap = L.map("mapid").setView([-23.1249006, -46.5567404], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
mymap.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name="lat"]').value = lat;
  document.querySelector('[name="lng"]').value = lng;

  //remove icon
  marker && mymap.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(mymap);
});

// photos upload
function addPhotoField() {
  // get container
  const container = document.querySelector("#images");
  // put all the fields containers into an array
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // clone last image
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // check if field is empty
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // clean field
  input.value = "";
  // add new field container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  // get span (which is the currentTarget)
  const span = event.currentTarget;
  // put all the fields containers into an array
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // check if there's only one field container
  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

function toggleSelect(event) {
  // remove active from buttons
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // input active on clicked button
  const button = event.currentTarget;
  button.classList.add("active");

  // update hidden input value
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}
