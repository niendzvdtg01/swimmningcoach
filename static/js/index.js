
let current = 0;
let slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function changeSlide(step) {
    current += step;
    if (current >= slides.length) current = 0;
    if (current < 0) current = slides.length - 1;
    showSlide(current);
}

// Tự động chuyển ảnh mỗi 3s
setInterval(() => changeSlide(1), 3000);
window.addEventListener('load', () => {
    document.getElementById('page-wrapper').style.transition = 'transform 1.5s ease';
    document.getElementById('page-wrapper').style.transform = 'translateY(0)';
});
window.addEventListener('load', () => {
    // Ẩn màn hình loading
    document.getElementById('loading-screen').style.display = 'none';
    // Hiện nội dung chính
    document.getElementById('main-content').style.display = 'block';
});

//search
function search() {
    let pop = document.getElementById('search-bar');
    if (pop) {
        setTimeout(() => {
            pop.classList.add("active");
        }, 10)
    } else {
        console.error("fail");
    }

}
function closesearch() {
    document.getElementById('search-bar').classList.remove("active");

}
