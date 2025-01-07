// Function to handle the search action
function searchUser() {
    let username = document.getElementById("username").value.trim(); // Get the input username and remove extra spaces
    let resultDiv = document.getElementById("result");

    // Predefined valid usernames (e.g., John Doe)
    let validUsernames = ["John Doe"]; // You can add more usernames if needed

    // Check if the entered username is in the valid list
    if (validUsernames.includes(username)) {
        // If the username is valid, show the corresponding data
        resultDiv.innerHTML = `
            <strong>Profile Name:</strong> ${username}<br>
            <strong>Social Media Accounts Found:</strong> Facebook, Twitter, LinkedIn<br>
            <strong>Key Findings:</strong><br>
            <ul>
                <li><strong>Public Posts:</strong> Mentions of travel to New York and London.</li>
                <li><strong>Friends/Followers:</strong> Connections to XYZ company.</li>
                <li><strong>Location:</strong> Frequent mentions of California, New York.</li>
                <li><strong>Geolocation Data:</strong> GPS data from photos showing New York City.</li>
            </ul>
        `;
        resultDiv.style.opacity = "1"; // Ensure visibility
    } else {
        // If the username is not found, show a "Not Found" message
        resultDiv.innerHTML = `
            <p style="color: red;">Username not found. Please enter a valid username like "John Doe".</p>
        `;
        resultDiv.style.opacity = "1"; // Ensure visibility
    }
}

// Function to listen for Enter key press to trigger the search
document.getElementById("username").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchUser(); // Trigger search on Enter key
    }
});

// Adding functionality to hide the results when the username input is cleared
document.getElementById("username").addEventListener("input", function() {
    let username = document.getElementById("username").value.trim();
    let resultDiv = document.getElementById("result");

    if (username === "") {
        // Gradually fade out the results when the username is cleared
        resultDiv.style.transition = "opacity 0.5s ease-out";
        resultDiv.style.opacity = "0";

        // After the fade-out transition completes, clear the content
        setTimeout(function() {
            resultDiv.innerHTML = "";
        }, 500); // Match the time duration of the transition
    }
});
