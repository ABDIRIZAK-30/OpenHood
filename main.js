const mobileBtn1 = document.querySelector(".mobileBtn1");
const mobileDiv = document.querySelector(".mobileDiv");
const menulinks = document.querySelector(".mobile-menu");
const navBtn = document.getElementById("navBtn");
const lightIcon = document.getElementById("lightMode");
const darkIcon = document.getElementById("darkMode");
const NavBtn = document.getElementById("NavBtn");
const lighticon = document.getElementById("lightmode");
const darkicon = document.getElementById("darkmode");
const logo=document.querySelector('#logo-1')
const rightImg=document.querySelector('#right-img')
const footerlogo=document.querySelector('#footerLogo')
const contactt=document.querySelector('.main-Contact')
const h1Top=document.querySelector('#h1-top')
const pTop=document.querySelector('#p-top')
const mobileNav=document.querySelector('.mobile-nav')
// Menu toggle
mobileBtn1.addEventListener("click", () => {
  // mainnav.classList.toggle("active");
  // mmenuBtn.classList.toggle("active");
  menulinks.classList.toggle("active");
  mobileDiv.classList.toggle('active')

});


// Update icon visibility
updateIcons = () => {
  const isDark = document.body.classList.contains("darkmode");
  darkIcon.style.display = isDark ? "inline-block" : "none";
  lightIcon.style.display = isDark ? "none" : "inline-block";
  darkIcon.style.color = "white";
  lightIcon.style.color = "black";
  // darkicon.style.display = isDark ? "inline-block" : "none";
  // lighticon.style.display = isDark ? "none" : "inline-block";
  // darkicon.style.color = "white";
  // lighticon.style.color = "white";
  // if(logo.src = isDark){
  //   "/Assets/Logo OpenHood/3.png"
  // }else{
  //    "/Assets/Logo OpenHood/1.png"
  // }
  logo.src = isDark ? "/Assets/Logo OpenHood/3.png"  : "/Assets/Logo OpenHood/1.png" ;
  rightImg.src=isDark? "Assets/Images/3.png" : "Assets/Images/2.png"
  footerlogo.src=isDark?  "/Assets/Logo OpenHood/3.png" : "/Assets/Logo OpenHood/1.png";
  h1Top.innerHTML = isDark 
    ? `Start Fresh in a <span style="color: blue;">Place</span> That Feels Like Home ` 
    : `Find Your Next <span style="color: blue;">Home</span> in the Perfect Neighborhood`;
  pTop.textContent=isDark?`Explore top properties with smart search tools and expert guidance. OpenHood is here to help you find a place you’ll love — with 24/7 support at every step`:`Discover your dream property with our comprehensive search tools and expert guidance. Start your journey to finding the perfect place to 24/7 Supportcall home.`
  
  contactt.style.backgroundColor = isDark ? "black" : "white";

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
// NavBtn.addEventListener("click", () => {
//   const isDarknow = document.body.classList.toggle("darkmode");
//   localStorage.setItem("Theme", isDarknow ? "darkmode" : "lightmode");
//   updateIcons();
// });


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





















  