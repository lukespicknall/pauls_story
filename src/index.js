import './style.css';
import images from './images';

const content = document.getElementById('content');

const imageSection = document.createElement('div');
imageSection.id = 'image-section';
content.appendChild(imageSection);

const slideFrame = document.createElement('div');
slideFrame.id = 'slide-frame';
imageSection.appendChild(slideFrame);

let currentImage = 0;

const imageCount = images.length - 1;

if (currentImage === 0) {
  const imageHolder = images[currentImage];
  slideFrame.appendChild(imageHolder);
  imageHolder.id = 'current-image';
}

const updateImage = () => {
  const getCurrent = document.getElementById('current-image');
  slideFrame.removeChild(getCurrent);
  const imageHolder = images[currentImage];
  imageHolder.id = 'current-image';
  slideFrame.appendChild(imageHolder);
};

updateImage();

const advanceImage = () => {
  if (currentImage >= imageCount) {
    currentImage = 0;
  } else {
    currentImage += 1;
  }
  updateImage();
};

const reverseImage = () => {
  if (currentImage <= 0) {
    currentImage = imageCount;
  } else {
    currentImage -= 1;
  }
  updateImage();
};

slideFrame.addEventListener('click', () => {
  advanceImage();
  // reverseImage();
});

setInterval(() => {
  // advanceImage();
  reverseImage();
}, 2000);

const templatePage = document.createElement('div');
templatePage.id = 'template-page';

const templateText = document.createElement('div');
templateText.id = 'template-text';
templateText.textContent = 'TEMPLATE';

templatePage.appendChild(templateText);
content.appendChild(templatePage);
