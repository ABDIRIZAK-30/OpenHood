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
  
  document.addEventListener("DOMContentLoaded", function () {
  
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
  
  });
  


  const launchDate = new Date("May 30, 2025 12:00:00").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const diff = launchDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (diff <= 0) {
      clearInterval(countdown);
      document.querySelector(".countdown").innerHTML = "We're Live!";
    }
  }, 1000);


  function showThankYou() {
    alert("Thanks! We’ll notify you soon.");
    window.location.href="index.html"
    return

  }



  // Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
