import './style.css';
import images from './images';
import story1 from './audio';

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

const reverseButton = document.createElement('button');
reverseButton.id = 'reverse-button';
reverseButton.textContent = '<';

const advanceButton = document.createElement('button');
advanceButton.id = 'advance-button';
advanceButton.textContent = '>';

// append/display currentImage[0] on intial page load
if (currentImage === 0) {
  const imageHolder = images[currentImage];
  imageHolder.id = 'current-image';
  slideFrame.appendChild(reverseButton);
  slideFrame.appendChild(advanceButton);
  slideFrame.appendChild(imageHolder);
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
  slideFrame.appendChild(reverseButton);
  slideFrame.appendChild(imageHolder);
  slideFrame.appendChild(advanceButton);
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

advanceButton.addEventListener('click', () => {
  advanceImage();
});

reverseButton.addEventListener('click', () => {
  reverseImage();
});

// runs reverseImage() every 8 seconds to auto advance
setInterval(() => {
  advanceImage();
}, 10000);

const audioSection = document.createElement('div');
audioSection.id = 'audio-section';

const audioUnit1 = document.createElement('div');
const audioUnit1Label = document.createElement('label');
const earlyLife = story1[0];
audioUnit1.classList.add('audio-unit');
audioUnit1Label.classList.add('audio-unit-label');
audioUnit1Label.setAttribute('for', 'early-life');
audioUnit1Label.textContent = 'Early life';
audioUnit1.appendChild(audioUnit1Label);
audioUnit1.appendChild(earlyLife);

const audioUnit2 = document.createElement('div');
const audioUnit2Label = document.createElement('label');
const momKidsCarpentry = story1[1];
audioUnit2.classList.add('audio-unit');
audioUnit2Label.classList.add('audio-unit-label');
audioUnit2Label.setAttribute('for', 'mom-kids-carpentry');
audioUnit2Label.textContent = 'Mom, kids, and carpentry';
audioUnit2.appendChild(audioUnit2Label);
audioUnit2.appendChild(momKidsCarpentry);

const audioUnit3 = document.createElement('div');
const audioUnit3Label = document.createElement('label');
const nature = story1[2];
audioUnit3.classList.add('audio-unit');
audioUnit3Label.classList.add('audio-unit-label');
audioUnit3Label.setAttribute('for', 'nature');
audioUnit3Label.textContent = 'Nature';
audioUnit3.appendChild(audioUnit3Label);
audioUnit3.appendChild(nature);

const audioUnit4 = document.createElement('div');
const audioUnit4Label = document.createElement('label');
const religion = story1[3];
audioUnit4.classList.add('audio-unit');
audioUnit4Label.classList.add('audio-unit-label');
audioUnit4Label.setAttribute('for', 'religion');
audioUnit4Label.textContent = 'Religion';
audioUnit4.appendChild(audioUnit4Label);
audioUnit4.appendChild(religion);

const audioUnit5 = document.createElement('div');
const audioUnit5Label = document.createElement('label');
const adviceToGrandkids = story1[4];
audioUnit5.classList.add('audio-unit');
audioUnit5Label.classList.add('audio-unit-label');
audioUnit5Label.setAttribute('for', 'advice-to-grandkids');
audioUnit5Label.textContent = 'Advice to his grandkids';
audioUnit5.appendChild(audioUnit5Label);
audioUnit5.appendChild(adviceToGrandkids);

const audioUnit6 = document.createElement('div');
const audioUnit6Label = document.createElement('label');
const adviceToHisKids = story1[5];
audioUnit6.classList.add('audio-unit');
audioUnit6Label.classList.add('audio-unit-label');
audioUnit6Label.setAttribute('for', 'advice-to-his-kids');
audioUnit6Label.textContent = 'Advice to his kids';
audioUnit6.appendChild(audioUnit6Label);
audioUnit6.appendChild(adviceToHisKids);

const audioUnit7 = document.createElement('div');
const audioUnit7Label = document.createElement('label');
const messageToTheFamily = story1[6];
audioUnit7.classList.add('audio-unit');
audioUnit7Label.classList.add('audio-unit-label');
audioUnit7Label.setAttribute('for', 'message-to-the-family');
audioUnit7Label.textContent = 'Message to the family';
audioUnit7.appendChild(audioUnit7Label);
audioUnit7.appendChild(messageToTheFamily);

const audioUnit8 = document.createElement('div');
const audioUnit8Label = document.createElement('label');
const messageToMom = story1[7];
audioUnit8.classList.add('audio-unit');
audioUnit8Label.classList.add('audio-unit-label');
audioUnit8Label.setAttribute('for', 'message-to-mom');
audioUnit8Label.textContent = 'Message to Mom';
audioUnit8.appendChild(audioUnit8Label);
audioUnit8.appendChild(messageToMom);

const audioUnit9 = document.createElement('div');
const audioUnit9Label = document.createElement('label');
const dadSingsKristofferson = story1[8];
audioUnit9.classList.add('audio-unit');
audioUnit9Label.classList.add('audio-unit-label');
audioUnit9Label.setAttribute('for', 'dad-sings-kristofferson');
audioUnit9Label.textContent = 'Dad sings Kristofferson';
audioUnit9.appendChild(audioUnit9Label);
audioUnit9.appendChild(dadSingsKristofferson);

audioSection.appendChild(audioUnit1);
audioSection.appendChild(audioUnit2);
audioSection.appendChild(audioUnit3);
audioSection.appendChild(audioUnit4);
audioSection.appendChild(audioUnit5);
audioSection.appendChild(audioUnit6);
audioSection.appendChild(audioUnit7);
audioSection.appendChild(audioUnit8);
audioSection.appendChild(audioUnit9);
content.appendChild(audioSection);
