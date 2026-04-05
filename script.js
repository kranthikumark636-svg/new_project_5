let latitude = "";
let longitude = "";

// 📍 Get Current Location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      alert("Location captured ✅");
    });
  } else {
    alert("Geolocation not supported");
  }
}

// 💾 Save Data
function saveData() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let food = document.getElementById("food").value;

  if (!name || !phone || !food || !latitude) {
    alert("Please fill all fields + location");
    return;
  }

  let data = {
    name,
    phone,
    food,
    latitude,
    longitude
  };

  let allData = JSON.parse(localStorage.getItem("foodData")) || [];
  allData.push(data);

  localStorage.setItem("foodData", JSON.stringify(allData));

  displayData();
}

// 📦 Display Data
function displayData() {
  let list = document.getElementById("dataList");
  list.innerHTML = "";

  let allData = JSON.parse(localStorage.getItem("foodData")) || [];

  allData.forEach((item) => {
    let mapLink = `https://www.google.com/maps?q=${item.latitude},${item.longitude}`;

    list.innerHTML += `
      <div class="card">
        <h3>${item.food}</h3>
        <p><b>Name:</b> ${item.name}</p>
        <p><b>Phone:</b> ${item.phone}</p>
        <a href="${mapLink}" target="_blank">📍 View Location</a>
      </div>
    `;
  });
}

// Load data on start
displayData();
