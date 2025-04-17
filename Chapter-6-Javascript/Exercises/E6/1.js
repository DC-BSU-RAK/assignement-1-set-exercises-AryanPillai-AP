// When the "Calculate Total Cost" button is clicked
document.getElementById('calculateBtn').addEventListener('click', function() {
    // Grab the values the user entered
    const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);

    // Simple validation to make sure everything looks good
    if (isNaN(costPerLiter) || isNaN(litersPurchased) || costPerLiter < 0 || litersPurchased < 0) {
        alert("Please enter valid positive numbers.");
        return; // Exit early if values are invalid
    }

    // Calculate the total cost
    const totalCost = costPerLiter * litersPurchased;

    // Show the result on the screen
    document.getElementById('totalCost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
});

    // took WAYY too long to do this 
