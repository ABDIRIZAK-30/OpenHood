const mainnav = document.querySelector(".main-nav");
const mmenuBtn = document.querySelector(".menuBtn");
const menulinks = document.querySelector(".menuLinks");
const navBtn = document.getElementById("navBtn");
const lightIcon = document.getElementById("lightMode");
const darkIcon = document.getElementById("darkMode");
const logo=document.querySelector('#logo-1')
const rightImg=document.querySelector('#right-img')
const footerlogo=document.querySelector('#footerLogo')
const tags = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const h1Top=document.querySelector('#h1-top')
const pTop=document.querySelector('#p-top')
// Menu toggle
mmenuBtn.addEventListener("click", () => {
  mainnav.classList.toggle("active");
  mmenuBtn.classList.toggle("active");
  menulinks.classList.toggle("active");
});


// Update icon visibility
updateIcons = () => {
  const isDark = document.body.classList.contains("darkmode");
  darkIcon.style.display = isDark ? "inline-block" : "none";
  lightIcon.style.display = isDark ? "none" : "inline-block";
  darkIcon.style.color = "white";
  lightIcon.style.color = "black";

  logo.src = isDark ? "Assets/Logo OpenHood/3.png" : "Assets/Logo OpenHood/1.png";
  rightImg.src=isDark? "Assets/Images/3.png" : "Assets/Images/2.png"
  footerlogo.src=isDark?  "Assets/Logo OpenHood/3.png" : "Assets/Logo OpenHood/1.png";
  h1Top.innerHTML = isDark 
    ? `Start Fresh in a <span style="color: blue;">Place</span> That Feels Like Home ` 
    : `Find Your Next <span style="color: blue;">Home</span> in the Perfect Neighborhood`;
  pTop.textContent=isDark?`Explore top properties with smart search tools and expert guidance. OpenHood is here to help you find a place you’ll love — with 24/7 support at every step`:`Discover your dream property with our comprehensive search tools and expert guidance. Start your journey to finding the perfect place to 24/7 Supportcall home.`
  

  

  // tags.forEach(tag => {
  //   tag.style.color = isDark ? "white" :null;
  // });
}

// Load theme from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("Theme");
  if (savedTheme === "darkmode") {
    document.body.classList.add("darkmode");
  } else {
    document.body.classList.remove("darkmode");
  }
  updateIcons();
});

// Toggle theme on click
navBtn.addEventListener("click", () => {
  const isDarkNow = document.body.classList.toggle("darkmode");
  localStorage.setItem("Theme", isDarkNow ? "darkmode" : "lightmode");
  updateIcons();
});



// faqs

const faqData = [
  {
    question: "How do I schedule a property visit?",
    answer: "You can schedule a property visit by clicking the 'Book a Tour' button on the property listing page or by contacting us directly via phone or WhatsApp. We'll confirm the date and time based on your availability."
  },
  {
    question: "Are there any hidden fees when buying or renting a property?",
    answer: "No, there are no hidden fees. All costs, including taxes, agency fees, and maintenance charges (if applicable), are clearly outlined before any agreement is signed."
  },
  {
    question: "Can I get help with financing or a mortgage?",
    answer: "Yes, we can connect you with trusted financial institutions and mortgage consultants to help you find the best financing option based on your needs and budget."
  },
  {
    question: "Is it possible to list my property for sale or rent on your website?",
    answer: "Absolutely! You can submit your property through our 'List Your Property' page, or contact our agents directly. We'll help you with pricing, photos, and promotion."
  },
  {
    question: "Do you offer virtual tours or video walkthroughs?",
    answer: "Yes, many of our listings include 360° virtual tours or video walkthroughs so you can explore properties remotely before scheduling a visit."
  }
];


const questionDiv=document.querySelector('.questionDiv')
questionDiv



// document.querySelector('#searchForm').addEventListener('submit', async function() {
//   const searchInput=document.querySelector('.#searchInput').value;
//   const url = `https://zillow-com4.p.rapidapi.com/properties/search?location=${searchInput}&status=forSale&sort=relevance&sortType=asc&priceType=listPrice&listingType=agent`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '469464c2a3msha69de981d7e2884p1ecd54jsnb99e02ef2458',
// 		'x-rapidapi-host': 'zillow-com4.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// })



async function fetchPropertyData() {
  const address = "104 Meir Ln College Station, TX 207785"; // full address

  const url = `https://zillow-com4.p.rapidapi.com/properties/search-address?address=${encodeURIComponent(address)}`;

  const options = {
    method: "GET",
    headers: {
   		'x-rapidapi-key': '469464c2a3msha69de981d7e2884p1ecd54jsnb99e02ef2458',
		'x-rapidapi-host': 'zillow-com4.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ API Response:", data);

    if (data.property) {
      const property = data.property;
      console.log("🏠 Address:", property.address?.streetAddress);
      console.log("💲 Price:", property.price);
      console.log("🛏 Bedrooms:", property.bedrooms);
      console.log("🛁 Bathrooms:", property.bathrooms);
      console.log("📐 Area:", property.livingArea);
    } else {
      console.warn("❌ No property found. Check the address format.");
    }
  } catch (error) {
    console.error("⚠️ API Error:", error.message);
  }
}

fetchPropertyData();

 





