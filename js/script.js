
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

// download cv

function download(){
    window.location.href = 'Alex-Mulwa-Barasa-Resume.pdf'
}

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



$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    })
})
    
// slide-up
$('.scroll-up-btn').click(()=>{
    $('html').animate({scrollTop: 0});
})

// typing animation
var typed = new Typed(".typing",{
    strings:['Web Designer', "Developer","Full Stack Enginner"],
    typeSpeed:100,
    backSpped:60,
    loop:true
});

// sending mail

function sendMail(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let inputs = document.querySelectorAll('input');
    let textarea = document.querySelector('textarea')
    if ((email ==="") && (message ==="")){
        swal( "You need to fill your Atleast Your Email and Message.", "and Send Again.", "error");
    }
    else{
    Email.send({
        SecureToken :"b7759138-a0ae-4aae-8706-39524805e479",
        To : 'alexbarasa0723@gmail.com',
        From : email,
        Subject : "This is name of the vistor in my port " + name,
        Body : message,}).then(
        message => 
        swal("Alex Greets!", "Message Received!", "success"),
        inputs.forEach((name, email, textarea) => name.value ='', email.value='', textarea.value='')
        )}
}