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
        desc: 'Свѣжая, румяная, точно только что изъ деревни привезенная. Глаза — синіе, ясные, словно незабудки въ росистомъ лугу. Личико веснушчатое, доброе, а улыбка — простодушная, безъ лукавства. Въ ней есть что-то трогательное, дѣтское, будто и не для сего мѣста создана.',
        mainPhoto: 'images/lovy.jpeg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                //avatar: 'images/lihonin.jpg',
                name: 'Лихонин',
                text: 'Покоряетъ детской наивностью, взглядомъ щенка безпріютнаго… Жениться бы!'
            },
            {
                //avatar: 'images/proff.jpg',
                name: 'Герр Проффессор',
                text: 'Книжной премудрости не обучена, да и разговоры ея просты.'
            },
            {
                //avatar: 'images/ramzes.jpg',
                name: 'Рамзес',
                text: 'Мила, но ужъ больно проста — не для моего круга.'
            }
        ]
    },
    // Добавьте данные для других девушек по аналогии
    'jenya': {
        name: 'Женя',
        age: '22 лѣтъ',
        desc: '"Истинная красавица, какихъ нынѣ мало встрѣтишь даже въ столичныхъ салонахъ. Станъ — гибкій, осанка — гордая, взоръ — грозный. Характеромъ пылкая, нравомъ независимая, держитъ себя какъ королева, хотя и въ "сёмъ печальномъ мѣстѣ". Говорятъ, будто изъ хорошаго рода, да судьба закрутила..."',
        mainPhoto: 'images/jenya.jpeg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                //avatar: 'images/ramzes.jpg',
                name: 'Рамзес',
                text: 'Заразила страстью и буйствомъ нрава! Весь бы вѣкъ свой отдалъ за ночь въ ея объятьяхъ!'
            },
            {
                //avatar: 'images/kolya.jpg',
                name: 'Коля',
                text: 'Особа пріятной наружности, но строгаго поведенія — къ тѣлу не допуститъ.'
            },
            {
                //avatar: 'images/dogy.jpg',
                name: 'Сабашников',
                text: 'Сразила въ самое сердце! Красавица — въ губерніи такой не сыщешь!'
            }
        ]
    },
    'manka': {
        name: 'Манька',
        age: '16 лѣтъ',
        desc: 'Тихая, кроткая, словно голубка. Въ углу сидитъ, лафитъ попиваетъ, а глаза — печальные. Ласкова безъ разбора, но душа у неё — чистая, неиспорченная. Любитъ стихи читать, особенно про "неземную любовь".',
        mainPhoto: 'images/manka.jpeg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                //avatar: 'images/pedogog.jpg',
                name: 'Учитель',
                text: 'Ну и грабиловка тутъ! А эта куртизанка — форменная змѣя подколодная! Взялъ бы ее на содержаніе, да она въ мои дѣла соваться вздумала — весь куражъ отшила!'
            },
            {
                //avatar: 'images/ramzes.jpg',
                name: 'Рамзес',
                text: 'Молодая, бойкая — съ ней и скучать не придется!'
            },
            {
                //avatar: 'images/dogy.jpg',
                name: 'Сабашников',
                text: 'Сразила въ самое сердце! Красавица — въ губерніи такой не сыщешь!'
            }
        ]
    },
    'sonya': {
        name: 'Сонечка',
        age: '16 лѣтъ',
        desc: '"Цвѣтокъ грѣха съ душой ребенка. Любитъ конфеты больше денегъ и вѣритъ въ сказочныхъ принцевъ."',
        mainPhoto: 'images/sonka.jpeg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                //avatar: 'images/izvr.jpg',
                name: 'Извращенецъ',
                text: 'Самый цвѣтъ. Повезло испить сей нектаръ первому — обожáю такихъ невинныхъ голубокъ.'
            },
            {
                //avatar: 'images/dogy.jpg',
                name: 'Сабашников',
                text: 'Сразила въ самое сердце! Красавица — въ губерніи такой не сыщешь!'
            }
        ]
    },
    'pasha': {
        name: 'Паша',
        age: '27 лѣтъ',
        desc: 'Пышная, бѣлотелая, съ томнымъ взоромъ и ненасытною ласкою. Добродушна, уступчива, готова на всѣ шалости, лишь бы угодить. Въ ней есть что-то жадное, страстное, будто огонь въ печи — и не затопить, и не затушить. Мужчинъ любитъ безъ разбора, но и они ею не брезгуютъ.',
        mainPhoto: 'images/pashka.jpeg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                //avatar: 'images/dogy.jpg',
                name: 'Сабашников',
                text: 'Сразила въ самое сердце! Красавица — въ губерніи такой не сыщешь!'
            },
            {
                //avatar: 'images/platonov.jpg',
                name: 'Платоновъ',
                text: 'Эта дѣвица — просто пламя!'
            },
            {
                //avatar: 'images/rottenberg.jpg',
                name: 'Баронъ Роттенбергъ',
                text: 'Что съ ней было — ни съ одной другой не сравнится!'
            },
            {
                //avatar: 'images/rottenberg.jpg',
                name: 'Грузинчик',
                text: 'Не прочь бы отстегать эту дѣльну́ю плоть!'
            },
            {
                //avatar: 'images/rottenberg.jpg',
                name: 'СБИС',
                text: 'Захаживаю къ ней частенько — ужъ больно ладная!'
            },
            {
                //avatar: 'images/rottenberg.jpg',
                name: 'Кучерявенький',
                text: 'Не баба — огонь! Въ постели — какъ на пожаре!'
            }
        ]
    },
    'tamara': {
        name: 'Тамара',
        age: '29 лѣтъ',
        desc: 'Бой-дѣвица, образованная, съ тёмно-золотистыми очами, что смотрятъ умно и немного насмѣшливо. По-французски изъясняется свободно, вышиваетъ шелками, танцуетъ — заглядѣнье! Бесѣду поддержитъ любую, будь то о поэзіи или о политикѣ. Говорятъ, была въ институтѣ благородныхъ дѣвицъ... увы, не убереглась.',
        mainPhoto: 'images/lovy.jpg',
        photos: ['images/luba1.jpg', 'images/luba2.jpg'],
        comments: [
            {
                //avatar: 'images/proff.jpg',
                name: 'Герр Проффессор',
                text: 'Дама образованнѣйшая, съ интеллигентными манерами — нынче такихъ мало. И видъ — что твой портретъ въ гостинной!'
            },
            {
                //avatar: 'images/dogy.jpg',
                name: 'Сабашников',
                text: 'Сразила въ самое сердце! Красавица — въ губерніи такой не сыщешь!'
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

        const avatarHTML = comment.avatar 
        ? `<img src="${comment.avatar}" alt="${comment.name}" class="comment-avatar">`
        : `<div class="comment-avatar-initials">${getInitials(comment.name)}</div>`;
        
        commentDiv.innerHTML = `
            ${avatarHTML}
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
function getInitials(name) {
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
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