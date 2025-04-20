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



// Add event listener to the search form
const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  const searchInput = document.querySelector("#searchInput").value.trim();
  if (!searchInput) {
    alert("Please enter a location to search.");
    return;
  }

  // Save the search input in localStorage
  localStorage.setItem("searchQuery", searchInput);

  // Redirect to the property.html page
  window.location.href = "property.html";
});



// havor displaying Team info in About page


function toggleDetails(event) {
  const clickedIcon = event.target;
  const teamBlock = clickedIcon.closest('.team1');
  const currentDetails = teamBlock.querySelector('.details');

  // First hide all other details and reset all icons
  const allDetails = document.querySelectorAll('.details');
  const allIcons = document.querySelectorAll('#absicon');

  allDetails.forEach(detail => detail.classList.add('hidden'));
  allIcons.forEach(icon => icon.classList.remove('active'));

  // Then show or toggle the current one
  const isHidden = currentDetails.classList.contains('hidden');
  if (isHidden) {
    currentDetails.classList.remove('hidden');
    clickedIcon.classList.add('active');
  } else {
    currentDetails.classList.add('hidden');
    clickedIcon.classList.remove('active');
  }
}






// faq section\\

const faqs = [
  {
    question: "What is the average cost of a property listed?",
    answer: "The average cost depends on the area, but currently it ranges between $250,000 and $600,000."
  },
  {
    question: "How often is the property data updated?",
    answer: "Our listings are updated daily to ensure you receive the latest information."
  },
  {
    question: "Can I schedule a tour of the property?",
    answer: "Yes, you can schedule a tour by contacting the listing agent directly from the property page."
  },
  {
    question: "Do listings show both rent and sale options?",
    answer: "Most listings show sale prices, but some may also display estimated rental values if available."
  },
  {
    question: "How accurate is the Zestimate price?",
    answer: "Zestimate provides a good estimate but may not reflect the current market value. We recommend a professional appraisal."
  },
  {
    question: "Is financing assistance available?",
    answer: "Yes, we can connect you with mortgage providers who offer financing options."
  },
  {
    question: "Are these properties new constructions or resales?",
    answer: "Our platform lists both new constructions and resale homes. The listing will specify this."
  },
  {
    question: "Can I filter properties by school district or neighborhood?",
    answer: "Yes, you can use advanced filters to narrow down by district, neighborhood, price, and more."
  },
  {
    question: "What if a property I like gets sold?",
    answer: "If a property is sold, we’ll notify you if you’ve saved it, and recommend similar listings."
  },
  {
    question: "How can I contact the listing agent?",
    answer: "You’ll find the agent’s contact info on each listing page, including phone, email, and sometimes a contact form."
  }
];


const questionDiv=document.querySelector('.questionDiv')
  faqs.forEach((faq =>{
    const divQA=document.createElement('div')
    divQA.classList.add('divQA')
    divQA.innerHTML=`
    <h2 class="Q-title">${faq.question}</h2>
    <p class="Q-answer" style="display:none">${faq.answer}</p>
    
    
    `
    const contentQ=divQA.querySelector(".Q-title");
    contentQ.addEventListener('click',()=>{
      const contentA = divQA.querySelector('.Q-answer');
      const allAnswers = document.querySelectorAll('.Q-answer');
      allAnswers.forEach(answer => {
        if (answer !== contentA) {
          answer.style.display = "none";
        }
      });
      contentA.style.display = contentA.style.display === "none" ? "block" : "none";
    });

    questionDiv.appendChild(divQA)
  }))