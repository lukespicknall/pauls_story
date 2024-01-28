import EarlyLife from './audio/01_EarlyLife.mp3';
import MomKidsCarpentry from './audio/02_MomKidsCarpentry.mp3';
import Nature from './audio/03_Nature.mp3';
import Religion from './audio/04_Religion.mp3';
import AdviceToGrandkids from './audio/05_AdviceToGrandkids.mp3';
import AdviceToHisKids from './audio/06_AdviceToHisKids.mp3';
import MessageToTheFamily from './audio/07_MessageToTheFamily.mp3';
import MessageToMom from './audio/08_MessageToMom.mp3';
import DadSingsKristofferson from './audio/09_DadSingsKristofferson.mp3';

const story1 = [];

const earlyLife = new Audio(EarlyLife);
earlyLife.setAttribute('controls', 'true');
earlyLife.classList.add('audio-player');
earlyLife.setAttribute('name', 'early-life');
story1.push(earlyLife);

const momKidsCarpentry = new Audio(MomKidsCarpentry);
momKidsCarpentry.setAttribute('controls', 'true');
momKidsCarpentry.classList.add('audio-player');
momKidsCarpentry.setAttribute('name', 'mom-kids-carpentry');
story1.push(momKidsCarpentry);

const nature = new Audio(Nature);
nature.setAttribute('controls', 'true');
nature.classList.add('audio-player');
nature.setAttribute('name', 'nature');
story1.push(nature);

const religion = new Audio(Religion);
religion.setAttribute('controls', 'true');
religion.classList.add('audio-player');
religion.setAttribute('name', 'religion');
story1.push(religion);

const adviceToGrandkids = new Audio(AdviceToGrandkids);
adviceToGrandkids.setAttribute('controls', 'true');
adviceToGrandkids.classList.add('audio-player');
adviceToGrandkids.setAttribute('name', 'advice-to-grandkids');
story1.push(adviceToGrandkids);

const adviceToHisKids = new Audio(AdviceToHisKids);
adviceToHisKids.setAttribute('controls', 'true');
adviceToHisKids.classList.add('audio-player');
adviceToHisKids.setAttribute('name', 'advice-to-his-kids');
story1.push(adviceToHisKids);

const messageToTheFamily = new Audio(MessageToTheFamily);
messageToTheFamily.setAttribute('controls', 'true');
messageToTheFamily.classList.add('audio-player');
messageToTheFamily.setAttribute('name', 'message-to-the-family');
story1.push(messageToTheFamily);

const messageToMom = new Audio(MessageToMom);
messageToMom.setAttribute('controls', 'true');
messageToMom.classList.add('audio-player');
messageToMom.setAttribute('name', 'message-to-mom');
story1.push(messageToMom);

const dadSingsKristofferson = new Audio(DadSingsKristofferson);
dadSingsKristofferson.setAttribute('controls', 'true');
dadSingsKristofferson.classList.add('audio-player');
dadSingsKristofferson.setAttribute('name', 'dad-sings-kristofferson');
story1.push(dadSingsKristofferson);

export default story1;
