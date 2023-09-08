// Function to update the current UTC time every second
function updateUTCTime() {
    const utcTimeElement = document.getElementById('utc-time');
    setInterval(() => {
        const utcMilliseconds = Date.now();
        utcTimeElement.textContent = `Current UTC Time: ${utcMilliseconds} milliseconds`;
    }, 1000);
}

// Call the function to start updating the time
updateUTCTime();
