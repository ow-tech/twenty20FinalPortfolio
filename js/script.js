
window.scroll({ 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({  
    behavior: 'smooth' 
  });

// Acrive and Remove menu class
const navLink = document.querySelectorAll('.nav-link')

function navLinkAction (){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}

navLink.forEach(n => n.addEventListener('click', navLinkAction))

// scroll animation
const  sR = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})

// scroll home
sR.reveal('.homeTitle',{})
sR.reveal('btnColor',{ delay:200})
sR.reveal('.home_img',{delay:400})
sR.reveal('.homeSocial',{interval:200})


// scrool about
sR.reveal('.aboutImg',{})
sR.reveal('.aboutSubtitle',{ delay:200})
sR.reveal('.aboutText',{ delay:400})
// scroll skills
sR.reveal('.skills_data',{ interval:200})
sR.reveal('.skills_text',{ delay:200})
sR.reveal('.skills_sub',{ })
sR.reveal('.skills_img',{ delay: 400})

// scrool work
sR.reveal('.work_img',{ interval: 200})

// scroll contact
sR.reveal('.contact_input',{ delay: 200})