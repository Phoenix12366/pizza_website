document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
    if (event.target === document.getElementById('modal1')) {
        document.getElementById('modal1').style.display = 'none';
    }
}

document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const middleName = document.getElementById('middleName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Здесь вы можете добавить код для отправки данных на сервер

    console.log('Регистрация успешна:', { firstName, lastName, middleName, phone, email });
    alert('Регистрация успешна!');

    document.getElementById('modal').style.display = 'none'; // Закрываем модальное окно
}

// Авторизация

document.getElementById('auth-button').onclick = function() {
    document.getElementById('modal1').style.display = 'block';
}

document.getElementById('closeModal1').onclick = function() {
    document.getElementById('modal1').style.display = 'none';
}

document.getElementById('authForm').onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const phone = document.getElementById('phone').value;

    // Здесь вы можете добавить код для отправки данных на сервер

    console.log('Авторизация успешна:', { firstName, lastName, middleName, phone, email });
    alert('Авторизация успешна!');

    document.getElementById('modal1').style.display = 'none'; // Закрываем модальное окно
}