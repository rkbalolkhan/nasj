mapboxgl.accessToken = mapToken;
let coOrdinates = [75.9234321, 17.6355556];

console.log(mapToken);

const map = new mapboxgl.Map({
  container: "map",
  center: coOrdinates,
  zoom: 18,
  style: "mapbox://styles/mapbox/satellite-streets-v12",
});

map.on("load", () => {
  console.log(map.getStyle())
});

// Add marker with popup
const marker = new mapboxgl.Marker({ color: "#FF385C" })
  .setLngLat(coOrdinates)
  .addTo(map)
  .setPopup(
    new mapboxgl.Popup({
      offset: 25,
    }).addClassName("Map-Popup")
  );


  let mosqueBtn = document.getElementById("mosque-btn");
  let dargahBtn = document.getElementById("dargah-btn");

  checkMapFocus();

  mosqueBtn.addEventListener("change", checkMapFocus);
  dargahBtn.addEventListener("change", checkMapFocus);

  function checkMapFocus() {
    if (mosqueBtn.checked) {
      console.log("Hello");
    } else if (dargahBtn.checked) {
      console.log("Bye");
    }
  }

  