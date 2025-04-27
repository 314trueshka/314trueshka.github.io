function visitHouse() {
    alert("Добро пожаловать въ нашъ домъ! Анна Марковна ждетъ васъ.");
}

function contactUs() {
    alert("Свяжитесь съ нами по адресу: Улица Ямская, домъ Анны Марковны. Или спросите у извозчика — каждый знаетъ!");
}
// Функция для проверки возраста
function confirmAge(isAdult) {
    const modal = document.getElementById('ageCheckModal');
    const mainContent = document.getElementById('mainContent');
    const ageWarning = document.getElementById('ageWarning');

    if (isAdult) {
        // Если пользователь старше 18 лет
        modal.style.display = 'none';
        mainContent.classList.remove('hidden');
    } else {
        // Если пользователь младше 18 лет
        modal.style.display = 'none';
        ageWarning.style.display = 'flex';
    }
}

// Показываем модальное окно при загрузке страницы
window.onload = function () {
    const modal = document.getElementById('ageCheckModal');
    modal.style.display = 'flex';
};
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container');
    
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
});