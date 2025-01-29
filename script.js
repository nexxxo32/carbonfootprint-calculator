const vehicleData = {
    car: {
        fuelType: "Gasoline",
        fuelConsumption: "8 L/100 km",
        emissionFactor: 2.31, // kg CO2 per liter of gasoline
    },
    truck: {
        fuelType: "Diesel",
        fuelConsumption: "15 L/100 km",
        emissionFactor: 2.68, // kg CO2 per liter of diesel
    },
    motorbike: {
        fuelType: "Gasoline",
        fuelConsumption: "5 L/100 km",
        emissionFactor: 2.31, // kg CO2 per liter of gasoline
    },
    bus: {
        fuelType: "Diesel",
        fuelConsumption: "30 L/100 km",
        emissionFactor: 2.68, // kg CO2 per liter of diesel
    }
};

document.getElementById('vehicle').addEventListener('change', updateVehicleInfo);

function updateVehicleInfo() {
    const vehicle = document.getElementById('vehicle').value;
    const vehicleInfo = vehicleData[vehicle];
    
    // Display vehicle info
    document.getElementById('fuel-type').innerText = `Fuel Type: ${vehicleInfo.fuelType}`;
    document.getElementById('fuel-consumption').innerText = `Fuel Consumption: ${vehicleInfo.fuelConsumption}`;
    document.getElementById('emission-factor').innerText = `Emission Factor: ${vehicleInfo.emissionFactor} kg CO2 per liter`;
}

function calculateCarbonFootprint() {
    const vehicle = document.getElementById('vehicle').value;
    const distance = document.getElementById('distance').value;
    
    if (!distance) {
        alert("Please enter a distance!");
        return;
    }
    
    const vehicleInfo = vehicleData[vehicle];
    const fuelConsumed = (distance / 100) * parseFloat(vehicleInfo.fuelConsumption);
    const totalEmissions = fuelConsumed * vehicleInfo.emissionFactor;

    document.getElementById('result').innerText = `Your carbon footprint is: ${totalEmissions.toFixed(2)} kg CO2`;

    // Provide suggestions based on the footprint
    giveSuggestions(totalEmissions);
}

function giveSuggestions(footprint) {
    let suggestions = '';
    if (footprint > 50) {
        suggestions = 'Your carbon footprint is high. Consider using public transport, or opt for a more fuel-efficient vehicle.';
    } else {
        suggestions = 'Your carbon footprint is relatively low. Keep up the good work!';
    }
    document.getElementById('suggestions').innerText = suggestions;
}

// Initialize with default vehicle information
updateVehicleInfo();
