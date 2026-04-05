let userLocation = "";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      userLocation = `https://www.google.com/maps?q=${lat},${lon}`;

      document.getElementById("locationText").innerText =
        "Location Captured ✅";
    });
  } else {
    alert("Geolocation not supported");
  }
}

function addFood() {
  let name = document.getElementById("name").value;
  let food = document.getElementById("food").value;
  let phone = document.getElementById("phone").value;

  if (!name || !food || !phone || !userLocation) {
    alert("Fill all details + location");
    return;
  }

  let data = JSON.parse(localStorage.getItem("foods")) || [];

  data.push({
    name,
    food,
    phone,
    location: userLocation,
  });

  localStorage.setItem("foods", JSON.stringify(data));

  displayFoods();
}

function displayFoods() {
  let data = JSON.parse(localStorage.getItem("foods")) || [];
  let output = "";

  data.forEach((item) => {
    output += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>🍛 ${item.food}</p>
        <a href="tel:${item.phone}">📞 Call</a><br>
        <a href="${item.location}" target="_blank">📍 View Location</a>
      </div>
    `;
  });

  document.getElementById("foodList").innerHTML = output;
}

displayFoods();
