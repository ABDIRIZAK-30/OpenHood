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
    const searchQuery = localStorage.getItem("searchQuery") ;

    // Check if the current page is not the home page
    if (window.location.pathname !== "/index.html" && !searchQuery) {
      alert("No search query provided. Redirecting to the home page.");
      document.body.innerHTML = "<p>Redirecting to the home page...</p>"; // Show a message before redirecting
      setTimeout(() => {
        window.location.href = "index.html"; // Redirect after showing the message
      }, 1000); // Delay redirection by 2 seconds
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
      container.innerHTML = "<p>No properties found in this location.</p>";
      setTimeout(() => {
        window.location.href = "index.html"; // Redirect after showing the message
      }, 2000);
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
          <button id="Featured">${property.features}</button>
          <button id="Sold">${property.listingStatus}</button>
        </div>
        <h1>${property.address}</h1>
        <div class="p-2">
          <h1>${property.price}</h1>
          <button class="view-details-btn">View Details</button>
        </div>
      `;

      // Add event listener to the "View Details" button
      const viewDetailsButton = pop1.querySelector(".view-details-btn");
      viewDetailsButton.addEventListener("click", () => {
        openModal(property);
      });

      popFlex.appendChild(pop1);
    });

    mainPopular.appendChild(popFlex);
    container.appendChild(mainPopular);
  }

  function openModal(property) {
    // Populate the left section with property details
    document.getElementById("modal-property-title").textContent =
      property.address;
    document.getElementById("modal-property-description").textContent =
      property.description || "This is a detailed description of the property.";
    document.getElementById("modal-property-address").textContent =
      property.address;
    document.getElementById("modal-property-price").textContent =
      property.price;
    document.getElementById("modal-property-bedrooms").textContent =
      property.bedrooms || "N/A";
    document.getElementById("modal-property-bathrooms").textContent =
      property.bathrooms || "N/A";
    document.getElementById("modal-property-size").textContent =
      property.size || "N/A";
    document.getElementById("modal-property-year-built").textContent =
      property.year || "N/A";
    document.getElementById("modal-property-status").textContent =
      property.listingStatus;

    // Populate the right section with the property image
    document.getElementById("modal-property-image").src = property.imageUrl;

    // Show the modal
    const modal = document.getElementById("property-modal");
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    const closeBtn = modal.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  filterAndDisplayProperties();
});

const form = document.querySelector("form");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("property-modal");

// New: DOM elements to inject form data into popup
const savedName = document.getElementById("saved-name");
const savedEmail = document.getElementById("saved-email");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual submission

  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Save to localStorage
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);

  // Inject into popup
  savedName.textContent = name;
  savedEmail.textContent = email;

  // Show popup, hide modal
  popup.style.display = "block";
  modal.style.display = "none";

  // Optional: update popup title/image
  document.getElementById("title-img").textContent =
    "Thank you for contacting us!";
  document.getElementById("submited-img").src = "Assets/Images/submit-img.jpg";

  //  clear form
  form.reset();
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

//  show last saved user info on refresh
window.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");

  if (name && email) {
    savedName.textContent = name;
    savedEmail.textContent = email;
  }
});




