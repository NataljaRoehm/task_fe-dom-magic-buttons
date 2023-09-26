// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  
})
const btn1 = document.querySelector('#magic-btn');

// создаем новую кнопку с нужными стилями и текстом
const newBtn = document.createElement('button');
newBtn.id = 'magic-btn-2';
newBtn.classList.add('second-btn');
newBtn.textContent = 'Я изменю тебя';
newBtn.style.backgroundColor = '#a78b71';
newBtn.style.color = 'white';

btn.addEventListener('click', () => {
  // при клике на первую кнопку

  // меняем стили первой кнопки
  btn.style.backgroundColor = '#9c4a1a';
  btn.style.color = 'black';

  // добавляем новую кнопку в body
  document.body.appendChild(newBtn);
});
// здесь можете создать EventListener для второй кнопки