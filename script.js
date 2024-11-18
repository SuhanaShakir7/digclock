function updateClock() {
    const hoursElement = document.getElementById("hours");
    const minElement = document.getElementById("min");
    const secElement = document.getElementById("sec");
    const monthElement = document.getElementById("month");
    const yearElement = document.getElementById("year");

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format hours, minutes, seconds to always show two digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Set the time on the clock
    hoursElement.textContent = hours;
    minElement.textContent = minutes;
    secElement.textContent = seconds;

    // Get and format the date
    const month = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();

    // Display the current month and year
    monthElement.textContent = month;
    yearElement.textContent = year;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately on page load
updateClock();
