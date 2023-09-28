// Ambil elemen-elemen yang diperlukan
const navLinks = document.querySelectorAll('.nav-links a');

// Tambahkan event listener untuk setiap tautan di navbar
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Menghentikan perilaku default dari tautan

        // Hapus kelas 'active' dari semua tautan
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Tambahkan kelas 'active' ke tautan yang diklik
        this.classList.add('active');

        // Tambahkan animasi atau efek lainnya ke navbar di sini
        // Misalnya, Anda dapat menggunakan library animasi seperti Animate.css

        // Contoh: Tambahkan kelas 'animated' dan 'bounce' ke navbar
        document.querySelector('.navbar').classList.add('animated', 'bounce');

        // Hapus kelas 'animated' dan 'bounce' setelah animasi selesai
        setTimeout(() => {
            document.querySelector('.navbar').classList.remove('animated', 'bounce');
        }, 1000); // Ubah angka ini sesuai dengan durasi animasi (dalam milidetik)
    });
});

let animationInterval;

function startAnimation() {
    const box = document.querySelector('.box');
    box.style.left = '80%'; // Geser elemen ke kanan

    // Menyembunyikan tombol "Mulai Animasi" dan menampilkan tombol "Hentikan Animasi"
    document.querySelector('button:first-child').style.display = 'none';
    document.querySelector('button:last-child').style.display = 'block';

    // Set interval untuk menghentikan animasi setelah selesai
    animationInterval = setInterval(() => {
        stopAnimation();
    }, 2000); // Ganti 2000 dengan durasi animasi Anda
}

function stopAnimation() {
    clearInterval(animationInterval);

    // Menghentikan animasi dan mengembalikan elemen ke posisi awal
    const box = document.querySelector('.box');
    box.style.left = '-50px';

    // Menyembunyikan tombol "Hentikan Animasi" dan menampilkan tombol "Mulai Animasi"
    document.querySelector('button:first-child').style.display = 'block';
    document.querySelector('button:last-child').style.display = 'none';
}

const backgroundContainer = document.querySelector('.background-container');
const content = document.querySelector('.content');

// Inisialisasi variabel untuk mengatur pergerakan latar belakang
let backgroundX = 0;

// Mengatur latar belakang untuk bergerak secara horizontal
function moveBackground() {
    backgroundX -= 1; // Menggeser latar belakang ke kiri
    backgroundContainer.style.backgroundPositionX = backgroundX + 'px';

    requestAnimationFrame(moveBackground);
}

// Mengatur kursor saat elemen diklik
content.addEventListener('click', () => {
    // Ganti kursor dengan gambar kustom atau gaya yang berbeda
    content.style.cursor = 'url("1.jpg"), auto';
});

// Memulai pergerakan latar belakang
moveBackground();


