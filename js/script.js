
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });

// Acrive and Remove menu class
const navLink = document.querySelectorAll('.nav-link')

function navLinkAction (){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}

navLink.forEach(n => n.addEventListener('click', navLinkAction))