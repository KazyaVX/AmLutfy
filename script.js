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

const hamburger = document.querySelector('.hamburgerlabel input');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

//Script untuk Theme Toggle//
const themeToggle = document.getElementById("gantitema");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Fungsi untuk mendapatkan waktu sekarang
    function getCurrentTime() {
      var currentDate = new Date();
      var hours = currentDate.getHours();
      return hours;
    }

    // Fungsi untuk menampilkan salam berdasarkan waktu
    function displayGreeting() {
      var currentHour = getCurrentTime();
      var greetingElement = document.getElementById("greeting");

      if (currentHour >= 5 && currentHour < 14) {
        greetingElement.textContent = "Good Morning!";
      } else if (currentHour >= 14 && currentHour < 18) {
        greetingElement.textContent = "Good Afternoon!";
      } else {
        greetingElement.textContent = "Good Evening!";
      }
    }

    // Panggil fungsi untuk menampilkan salam
    displayGreeting();
