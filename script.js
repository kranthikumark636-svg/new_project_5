let foods = JSON.parse(localStorage.getItem("foods")) || [];

function addFood() {
  let name = document.getElementById("name").value;
  let food = document.getElementById("food").value;
  let location = document.getElementById("location").value;
  let contact = document.getElementById("contact").value;

  if (!name || !food || !location || !contact) {
    alert("Fill all fields");
    return;
  }

  let newFood = { name, food, location, contact };

  foods.push(newFood);
  localStorage.setItem("foods", JSON.stringify(foods));

  displayFoods();
}

function displayFoods() {
  let list = document.getElementById("foodList");
  list.innerHTML = "";

  foods.forEach((item, index) => {
    list.innerHTML += `
      <div class="food-item">
        <h3>${item.food}</h3>
        <p>👤 ${item.name}</p>
        <p>📍 ${item.location}</p>
        <p>📞 ${item.contact}</p>
      </div>
    `;
  });
}

displayFoods();
