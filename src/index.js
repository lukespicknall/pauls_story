import './style.css';
import images from './images';

const content = document.getElementById('content');

// create imageSection, append to content on template.html
const imageSection = document.createElement('div');
imageSection.id = 'image-section';
content.appendChild(imageSection);

// create slideFrame, append to imageSection
const slideFrame = document.createElement('div');
slideFrame.id = 'slide-frame';
imageSection.appendChild(slideFrame);

// currentImage holds the images[i] position
// starts at 0
// it isn't actually linked to images[i] data in any way
// other than the fact the both start at 0 and go up or down sequentially
let currentImage = 0;

// imCount holds the total number of images
// since array starts at 0, we get total count it by running length - 1
const imageCount = images.length - 1;

// append/display currentImage[0] on intial page load
if (currentImage === 0) {
  const imageHolder = images[currentImage];
  slideFrame.appendChild(imageHolder);
  imageHolder.id = 'current-image';
}

// grabs and removes removes image on display
// appends the new current image
// current image has just been updated
// as updateImage is called in advanceImage() or reversemage()
const updateImage = () => {
  const getCurrent = document.getElementById('current-image');
  slideFrame.removeChild(getCurrent);
  const imageHolder = images[currentImage];
  imageHolder.id = 'current-image';
  slideFrame.appendChild(imageHolder);
};

// increases currentImage number so next images[i] is called on updateImage()
// if currentImage count is >= the imageCount set it to 0 to loop
const advanceImage = () => {
  if (currentImage >= imageCount) {
    currentImage = 0;
  } else {
    currentImage += 1;
  }
  updateImage();
};

// same but reverse to go backward in images[]
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

// runs reverseImage() every 8 seconds to auto advance
setInterval(() => {
  // advanceImage();
  reverseImage();
}, 8000);

const templatePage = document.createElement('div');
templatePage.id = 'template-page';

const templateText = document.createElement('div');
templateText.id = 'template-text';
templateText.textContent = 'TEMPLATE';

templatePage.appendChild(templateText);
content.appendChild(templatePage);
