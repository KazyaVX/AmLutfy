 // Script untuk membalik kartu saat di-klik
 const cardInner = document.querySelector('.card-inner');
 cardInner.addEventListener('click', function() {
   this.classList.toggle('flipped');
 });

 // Script untuk membalik kartu saat di-hover
 cardInner.addEventListener('mouseenter', function() {
   this.classList.add('flipped');
 });

 cardInner.addEventListener('mouseleave', function() {
   this.classList.remove('flipped');
 });

 //Script untuk Hamburger Animation//

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

//Script untuk Theme Toggle//
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
