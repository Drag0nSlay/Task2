document.getElementById("search-btn").addEventListener("click", function() {
    searchUsername();
});

// Listen for the Enter key to trigger search
document.getElementById("username").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchUsername();
    }
});

function searchUsername() {
    var username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Please enter a username.");
        return;
    }

    // Simulating a search for the username on social media platforms
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h3>Results for: " + username + "</h3>";
    
    // Mock data (Replace this with real search results or API calls)
    var platforms = ["Facebook", "Twitter", "LinkedIn"];
    var mockResults = platforms.map(platform => {
        return `<p><strong>${platform}:</strong> Profile found</p>`;
    }).join("");
    
    resultsDiv.innerHTML += mockResults;

    // Adding the Report Template
    var reportTemplate = `
        <h4>Report Template</h4>
        <p><strong>Profile Name:</strong> ${username}</p>
        <p><strong>Social Media Accounts Found:</strong> Facebook, Twitter, LinkedIn</p>
        <p><strong>Key Findings:</strong></p>
        <ul>
            <li><strong>Public Posts:</strong> Mentions of travel to New York and London.</li>
            <li><strong>Friends/Followers:</strong> Connections to XYZ company.</li>
            <li><strong>Location:</strong> Frequent mentions of California, New York.</li>
            <li><strong>Geolocation Data:</strong> GPS data from photos showing New York City.</li>
        </ul>
    `;

    // Append the report template to the results section
    resultsDiv.innerHTML += reportTemplate;
}

// Adding functionality to hide the results when the username input is cleared
document.getElementById("username").addEventListener("input", function() {
    var username = document.getElementById("username").value;
    var resultsDiv = document.getElementById("results");

    if (username.trim() === "") {
        // Gradually fade out the results when the username is cleared
        resultsDiv.style.transition = "opacity 0.5s ease-out";
        resultsDiv.style.opacity = "0";

        // After the fade-out transition completes, clear the content
        setTimeout(function() {
            resultsDiv.innerHTML = "";
        }, 500); // Match the time duration of the transition
    }
    else {
        // Show the results again when typing starts
        resultsDiv.style.transition = "opacity 0.5s ease-in";
        resultsDiv.style.opacity = "1";
    }
});