var form = document.getElementById('myForm');
// Получаем элемент, внутри которого вы хотите добавить HTML-код
var container = document.getElementById('content-container');


    form.addEventListener('submit', function(event) {
       
        event.preventDefault();

        // Получаем данные из формы
        var formData = new FormData(form);
        var name = formData.get('name'); // Получаем значение поля ввода с именем 'name'
        var description = formData.get('description'); // Получаем значение текстовой области с именем 'description'
        var file = formData.get('fileUpload'); // Получаем выбранный файл

        var currentUrl = window.location.href;

        var urlParts = currentUrl.split('/');
        var lastPart = urlParts[urlParts.length - 1];
        var fileName = lastPart.split('.')[0];

        console.log("Имя текущего HTML файла без расширения: " + fileName);
        if(fileName=='main'){
            var newHTML = `<div class="card"><div class="card-img" style="background-image: url(pcs/${file.name});"></div><div class="card-content"><h2><span class="card-name"> ${name} </span></h2><div class="card-description"> ${description} </div></div></div>`;
        }else{
            var newHTML = `<div class="card"><div class="card-img" style="background-image: url(../pcs/${file.name});"></div><div class="card-content"><h2><span class="card-name"> ${name} </span></h2><div class="card-description"> ${description} </div></div></div>`;
        }
    // Добавляем новый HTML-код внутрь элемента
        container.insertAdjacentHTML('beforeend', newHTML);
    });
    
const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');
    burgerIcon.addEventListener('click', () => {
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
      });