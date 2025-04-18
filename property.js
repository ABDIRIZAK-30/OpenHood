document.addEventListener("DOMContentLoaded", () => {
  async function fetchProperties() {
    try {
      const response = await fetch("properties.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching properties:", error);
      return [];
    }
  }

  async function filterAndDisplayProperties() {
    const searchQuery = localStorage.getItem("searchQuery");
    if (!searchQuery) {
      // Redirect to the home page without an alert
      window.location.href = "index.html?error=no-search";
      return;
    }

    const properties = await fetchProperties();

    // Check if the user input is "All"
    let filteredProperties;
    if (searchQuery.toLowerCase() === "all") {
      filteredProperties = properties; // Display all properties
    } else {
      filteredProperties = properties.filter((property) =>
        property.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    displayProperties(filteredProperties);
  }

  function displayProperties(properties) {
    const container = document.querySelector(".main-properties-container");
    if (!container) {
      console.error("Error: .main-properties-container not found in the DOM.");
      return;
    }

    container.innerHTML = ""; // Clear previous content

    if (properties.length === 0) {
      container.innerHTML = "<p>No properties found.</p>";
      return;
    }

    const mainPopular = document.createElement("div");
    mainPopular.classList.add("mainPopular");

    const title = document.createElement("h1");
    title.textContent = "Popular Listings";
    mainPopular.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "Handpicked homes based on your preferences.";
    mainPopular.appendChild(description);

    const popFlex = document.createElement("div");
    popFlex.classList.add("popFlex");

    properties.forEach((property) => {
      const pop1 = document.createElement("div");
      pop1.classList.add("pop-1");

      pop1.innerHTML = `
        <img src="${property.imageUrl}" alt="popular-1">
        <div class="abspop">
          <button id="Featured">${property.featured ? "Featured" : ""}</button>
          <button id="Sold">${property.listingStatus}</button>
        </div>
        <h1>${property.address}</h1>
        <div class="popGrid">
          <div class="p-1">
            <span class="material-symbols-outlined">Home</span>
            <h1>${property.propertyType}</h1>
          </div>
          <div class="p-1 p-s">
            <span class="material-symbols-outlined">6_ft_apart</span>
            <h1>${property.size || "N/A"} sqft</h1>
          </div>
          <div class="p-1">
            <span class="material-symbols-outlined">room_preferences</span>
            <h1>${property.bedrooms} Rooms</h1>
          </div>
          <div class="p-1 p-s">
            <span class="material-symbols-outlined">slide_library</span>
            <h1>${property.yearBuilt || "N/A"}</h1>
          </div>
        </div>
        <div class="p-2">
          <h1>${property.price}</h1>
          <button class="view-details-btn">View Details</button>
        </div>
      `;

      // Add event listener to the "View Details" button
      const viewDetailsButton = pop1.querySelector(".view-details-btn");
      viewDetailsButton.addEventListener("click", () => {
        // Save the property data in localStorage
        localStorage.setItem("selectedProperty", JSON.stringify(property));

        // Redirect to the details page
        window.location.href = "details.html";
      });

      popFlex.appendChild(pop1);
    });

    mainPopular.appendChild(popFlex);
    container.appendChild(mainPopular);
  }

  filterAndDisplayProperties();
});