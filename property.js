// Fetch properties from the JSON file
async function fetchProperties() {
    try {
      const response = await fetch("properties.json"); // Path to your JSON file
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching properties:", error);
      return [];
    }
  }
  
  // Display properties in the DOM
  function displayProperties(properties) {
    const container = document.querySelector(".property-container");
    container.innerHTML = ""; // Clear previous content
  
    if (properties.length === 0) {
      container.innerHTML = "<p>No properties found.</p>";
      window.location.href="index.html"
      return;
    }
  
    properties.forEach((property) => {
      const propertyCard = document.createElement("div");
      propertyCard.classList.add("property-card");
  
      propertyCard.innerHTML = `
        <div class="property-image">
          <img src="${property.imageUrl}" alt="Property Image" style="width: 100%; height: 300px; border-radius: 8px;">
          <span class="badge badge-status">${property.listingStatus}</span>
        </div>
        <div class="property-details">
          <p class="property-address">${property.address}</p>
          <p class="property-type">${property.propertyType}</p>
          <p class="property-size"><i class="fas fa-bed"></i> ${property.bedrooms} Beds | <i class="fas fa-bath"></i> ${property.bathrooms} Baths</p>
          <p class="property-price">${property.price}</p>
          <button class="view-details-btn">View Details</button>
        </div>
      `;
  
      container.appendChild(propertyCard);
    });
  }
  
  // Filter and display properties based on the search query
  async function filterAndDisplayProperties() {
    const searchQuery = localStorage.getItem("searchQuery"); // Retrieve the search query from localStorage
    if (!searchQuery) {
      alert("No search query found. Redirecting to the home page.");
      window.location.href = "index.html";
      return;
    }
  
    const properties = await fetchProperties();
    const filteredProperties = properties.filter((property) =>
      property.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    displayProperties(filteredProperties);
  }
  
  // Call the function to filter and display properties
  filterAndDisplayProperties();