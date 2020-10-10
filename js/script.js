
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