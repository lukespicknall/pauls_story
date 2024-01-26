import './style.css';
import images from './images';

const content = document.getElementById('content');

for (let i = 0; i < images.length; i += 1) {
  const imageHolder = images[i];
  content.appendChild(imageHolder);
}

const templatePage = document.createElement('div');
templatePage.id = 'template-page';

const templateText = document.createElement('div');
templateText.id = 'template-text';
templateText.textContent = 'TEMPLATE';

templatePage.appendChild(templateText);
content.appendChild(templatePage);

console.log('hey earth');
