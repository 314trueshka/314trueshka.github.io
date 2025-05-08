function visitHouse() {
    alert("Добро пожаловать въ нашъ домъ! Анна Марковна ждетъ васъ.");
}

function showContacts() {
  document.getElementById('vintageContacts').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
}

function hideContacts() {
  document.getElementById('vintageContacts').style.display = 'none';
  document.body.style.overflow = ''; // Восстанавливаем скролл
}

// Закрытие при клике вне окна
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('vintageContacts')) {
    hideContacts();
  }
});
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
document.addEventListener('DOMContentLoaded', function() {
    const staffCards = document.querySelectorAll('.staff-card');
    
    staffCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});
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


// Данные девушек
const profiles = {
    'luba': {
        name: 'Люба',
        age: '19 лѣтъ',
        desc: '"Цвѣтокъ грѣха съ душой ребенка. Любитъ конфеты больше денегъ и вѣритъ въ сказочныхъ принцевъ."',
        mainPhoto: 'images/lovy.jpg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                avatar: 'images/platonov.jpg',
                name: 'Платоновъ',
                text: '"Сия дѣвица напоминаетъ мнѣ героиню моего послѣдняго романа. Чистота души необыкновенная!"'
            },
            {
                avatar: 'images/rottenberg.jpg',
                name: 'Баронъ Роттенбергъ',
                text: '"Рекомендую! За скромной наружностью скрывается истинная страсть. 5 рублей потрачены не напрасно."'
            }
        ]
    },
    // Добавьте данные для других девушек по аналогии
    'jenya': {
        name: 'Люба',
        age: '19 лѣтъ',
        desc: '"Цвѣтокъ грѣха съ душой ребенка. Любитъ конфеты больше денегъ и вѣритъ въ сказочныхъ принцевъ."',
        mainPhoto: 'images/lovy.jpg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                avatar: 'images/platonov.jpg',
                name: 'Платоновъ',
                text: '"Сия дѣвица напоминаетъ мнѣ героиню моего послѣдняго романа. Чистота души необыкновенная!"'
            },
            {
                avatar: 'images/rottenberg.jpg',
                name: 'Баронъ Роттенбергъ',
                text: '"Рекомендую! За скромной наружностью скрывается истинная страсть. 5 рублей потрачены не напрасно."'
            }
        ]
    },
    'manka': {
        name: 'Люба',
        age: '19 лѣтъ',
        desc: '"Цвѣтокъ грѣха съ душой ребенка. Любитъ конфеты больше денегъ и вѣритъ въ сказочныхъ принцевъ."',
        mainPhoto: 'images/lovy.jpg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                avatar: 'images/platonov.jpg',
                name: 'Платоновъ',
                text: '"Сия дѣвица напоминаетъ мнѣ героиню моего послѣдняго романа. Чистота души необыкновенная!"'
            },
            {
                avatar: 'images/rottenberg.jpg',
                name: 'Баронъ Роттенбергъ',
                text: '"Рекомендую! За скромной наружностью скрывается истинная страсть. 5 рублей потрачены не напрасно."'
            }
        ]
    },
    'sonya': {
        name: 'Люба',
        age: '19 лѣтъ',
        desc: '"Цвѣтокъ грѣха съ душой ребенка. Любитъ конфеты больше денегъ и вѣритъ въ сказочныхъ принцевъ."',
        mainPhoto: 'images/lovy.jpg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                avatar: 'images/platonov.jpg',
                name: 'Платоновъ',
                text: '"Сия дѣвица напоминаетъ мнѣ героиню моего послѣдняго романа. Чистота души необыкновенная!"'
            },
            {
                avatar: 'images/rottenberg.jpg',
                name: 'Баронъ Роттенбергъ',
                text: '"Рекомендую! За скромной наружностью скрывается истинная страсть. 5 рублей потрачены не напрасно."'
            }
        ]
    },
    'pasha': {
        name: 'Люба',
        age: '19 лѣтъ',
        desc: '"Цвѣтокъ грѣха съ душой ребенка. Любитъ конфеты больше денегъ и вѣритъ въ сказочныхъ принцевъ."',
        mainPhoto: 'images/lovy.jpg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                avatar: 'images/platonov.jpg',
                name: 'Платоновъ',
                text: '"Сия дѣвица напоминаетъ мнѣ героиню моего послѣдняго романа. Чистота души необыкновенная!"'
            },
            {
                avatar: 'images/rottenberg.jpg',
                name: 'Баронъ Роттенбергъ',
                text: '"Рекомендую! За скромной наружностью скрывается истинная страсть. 5 рублей потрачены не напрасно."'
            }
        ]
    },
    'tamara': {
        name: 'Люба',
        age: '19 лѣтъ',
        desc: '"Цвѣтокъ грѣха съ душой ребенка. Любитъ конфеты больше денегъ и вѣритъ въ сказочныхъ принцевъ."',
        mainPhoto: 'images/lovy.jpg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                avatar: 'images/platonov.jpg',
                name: 'Платоновъ',
                text: '"Сия дѣвица напоминаетъ мнѣ героиню моего послѣдняго романа. Чистота души необыкновенная!"'
            },
            {
                avatar: 'images/rottenberg.jpg',
                name: 'Баронъ Роттенбергъ',
                text: '"Рекомендую! За скромной наружностью скрывается истинная страсть. 5 рублей потрачены не напрасно."'
            }
        ]
    }
};

function showProfile(id) {
    const profile = profiles[id];
    
    // Заполняем основную информацию
    document.getElementById('profileName').textContent = profile.name;
    document.getElementById('profileAge').textContent = `Возрастъ: ${profile.age}`;
    document.getElementById('profileDesc').textContent = profile.desc;
    document.getElementById('profilePhoto').src = profile.mainPhoto;
    
    // Очищаем и заполняем галерею
    const gallery = document.querySelector('.profile-gallery');
    gallery.innerHTML = '';
    profile.photos.forEach(photo => {
        gallery.innerHTML += `<img src="${photo}" alt="" class="gallery-thumb" onclick="this.parentElement.previousElementSibling.src='${photo}'">`;
    });
    
    // Очищаем и заполняем комментарии (исправленная часть)
    const commentsContainer = document.querySelector('.profile-comments');
    // Сохраняем заголовок
    const commentsTitle = commentsContainer.querySelector('h3');
    commentsContainer.innerHTML = '';
    commentsContainer.appendChild(commentsTitle);
    
    // Добавляем комментарии по одному
    profile.comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <img src="${comment.avatar}" alt="${comment.name}" class="comment-avatar">
            <div class="comment-content">
                <h4>${comment.name}</h4>
                <p>${comment.text}</p>
            </div>
        `;
        commentsContainer.appendChild(commentDiv);
    });
    
    // Показываем модальное окно
    document.getElementById('profileModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}


function closeProfile() {
    document.getElementById('profileModal').style.display = 'none';
    document.body.style.overflow = '';
}

// Закрытие по клику вне окна
window.onclick = function(event) {
    if (event.target == document.getElementById('profileModal')) {
        closeProfile();
    }
}