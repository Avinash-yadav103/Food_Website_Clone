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