// document.querySelector('.participate').addEventListener('click', function() {
//     document.querySelector('.participate').classList.toggle('participate_border_active');
// });

function addClass() {
    let element = document.getElementById("myDiv");
    element.classList.add("highlight");
}

// Use scroll animations to learn them

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show'); //for showing animation multiple times
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');    
hiddenElements.forEach((el) => observer.observe(el));

// Add this to your main.js file
// This ensures the copyright year is always current
document.querySelector(".year").textContent = new Date().getFullYear();

// Form validation
const form = document.querySelector('.menu_inputs');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        
        if (!name || !email) {
            alert('Please fill in all required fields');
            return;
        }
        
        // You can add more validation logic here
        
        alert('Thank you for your submission! We will contact you soon.');
        form.reset();
    });
}