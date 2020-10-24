import './styles/index.scss';

const message: string = 'Hello, World!';
const heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);

function sum(x: number, y: number) {
  return x + y;
}

module.exports = sum;
