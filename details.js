document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the selected property from localStorage
    const selectedProperty = JSON.parse(localStorage.getItem("selectedProperty"));
  
    if (!selectedProperty) {
      // If no property is found, redirect to the home page
      window.location.href = "index.html";
      return;
    }
  
    // Populate the details page with the property data
    document.getElementById("property-title").textContent = selectedProperty.address;
    document.getElementById("property-image").src = selectedProperty.imageUrl;
    document.getElementById("property-description").textContent =
      "This is a detailed description of the property. It provides an overview of the features, amenities, and other important details about the property.";
    document.getElementById("property-address").textContent = selectedProperty.address;
    document.getElementById("property-price").textContent = selectedProperty.price;
    document.getElementById("property-bedrooms").textContent = selectedProperty.bedrooms;
    document.getElementById("property-bathrooms").textContent = selectedProperty.bathrooms || "N/A";
    document.getElementById("property-size").textContent = selectedProperty.size || "N/A";
    document.getElementById("property-year-built").textContent = selectedProperty.year || "N/A";
    document.getElementById("property-status").textContent = selectedProperty.listingStatus;
  });