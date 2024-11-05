// scripts/reservations.js

// Function to get URL query parameters
function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(function(part) {
        const item = part.split("=");
        params[item[0]] = decodeURIComponent(item[1]);
    });
    return params;
}

// Pre-fill the destination field if available
document.addEventListener("DOMContentLoaded", function() {
    const queryParams = getQueryParams();
    const destinationInput = document.getElementById("destination");
    if (queryParams.destination) {
        destinationInput.value = queryParams.destination;
    }
});
