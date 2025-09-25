function showAlert() {
  alert("Thanks for choosing Café Bliss! ☕");
}
var btn = document.querySelector('.hero button')
btn.addEventListener('click', showAlert)
const hero = document.querySelector('.hero');
const now = new Date();
const hours = now.getHours();
let greeting = "Welcome to Café Bliss";

if(hours < 12) {
  greeting = "Good Morning! ☀️";
} else if(hours < 16) {
  greeting = "Good Afternoon! 🌤️";
} else {
  greeting = "Good Evening! 🌆";
}

hero.querySelector('h1').innerText = greeting;

const menuItems = document.querySelectorAll('.menu .item');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const itemName = item.querySelector('h3').innerText;
    alert(`${itemName} added to your order!`);
  });
});