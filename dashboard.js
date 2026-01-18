// JavaScript for Dashboard functionalities

// Function to update current date
function updateCurrentDate() {
    const currentDate = new Date();
    document.getElementById('currentDate').innerText = currentDate.toUTCString();
}

// Call the function to set the current date on page load
updateCurrentDate();