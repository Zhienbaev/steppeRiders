const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');
    burgerIcon.addEventListener('click', () => {
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
      });