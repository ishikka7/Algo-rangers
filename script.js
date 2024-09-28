
const carRates = {
    economy: 1299,
    suv: 1699,
    luxury: 2499
};

// Object to hold available car models for each type
const availableCars = {
    economy: ["Maruti Swift", "Honda Civic", "Maruti WagonR","Maruti Celerio"],
    suv: ["Maruti Ertiga ", "Toyata Innova", "Kia Carens",],
    luxury: ["BMW 5 Series", "Mercedes-Benz C-Class", "Audi A6","Fortuner"]
};

document.getElementById("carType").addEventListener("change", function() {
    const carType = this.value;
    const carModelSelect = document.getElementById("carModel");

    // Clear existing car models
    carModelSelect.innerHTML = '<option value="" disabled selected>Select a car model</option>';
    carModelSelect.disabled = false;

    // Populate car models based on selected car type
    if (carType && availableCars[carType]) {
        availableCars[carType].forEach(carModel => {
            const option = document.createElement("option");
            option.value = carModel.toLowerCase().replace(/\s+/g, "_"); // Create a unique value
            option.textContent = carModel;
            carModelSelect.appendChild(option);
        });
    }
});

document.getElementById("calculateBtn").addEventListener("click", function() {
    const carType = document.getElementById("carType").value;
    const carModel = document.getElementById("carModel").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    // Check for empty fields
    if (!carType || !carModel || !startDate || !endDate) {
        alert("Please fill in all fields.");
        return;
    }

    const selectedCar = document.querySelector('#carModel option:checked').textContent;
    const carRate = carRates[carType];

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the number of rental days
    const days = Math.round((end - start) / (1000 * 60 * 60 * 24));

    if (days <= 0) {
        alert("End date must be after the start date.");
        return;
    }

    const totalCost = days * carRate;

    // Display results
    document.getElementById("selectedCar").textContent = selectedCar;
    document.getElementById("totalDays").textContent = days;
    document.getElementById("totalCost").textContent = `${totalCost.toFixed(2)}`;
});


