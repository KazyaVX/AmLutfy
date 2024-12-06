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

      if (currentHour >= 5 && currentHour < 12) {
        greetingElement.textContent = "Selamat Pagi!";
      } else if (currentHour >= 12 && currentHour < 18) {
        greetingElement.textContent = "Selamat Siang!";
      } else {
        greetingElement.textContent = "Selamat Malam!";
      }
    }

    // Panggil fungsi untuk menampilkan salam
    displayGreeting();

    //Menhapus //
    document.getElementById("contactForm").onsubmit = function(event) {
      event.preventDefault(); // Mencegah pengiriman form secara default

      // Mengambil data form
      const formData = new FormData(this);
      
      // Mengirim data ke Formspree
      fetch("https://formspree.io/f/mrbgljvp", {
          method: "POST",
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
      })
      .then(response => {
          if (response.ok) {
              alert("Pesan berhasil dikirim!");
              this.reset(); // Mereset form setelah pengiriman berhasil
          } else {
              alert("Terjadi kesalahan. Coba lagi.");
          }
      })
      .catch(error => {
          alert("Terjadi kesalahan. Coba lagi.");
          console.error("Error:", error);
      });
  };