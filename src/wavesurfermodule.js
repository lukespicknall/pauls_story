// this module creates wavesurfer audio player instaces by looping over arrays
// as params, the function takes an array of audio files, an array of track titles,
// a target parent DOM element the container full of players will be appened to,
// and images for the play and pause button.
//
// js stlyle is included at end for a default load.
// each DOM element created gets a css selector so
// it is expected that the js style will be commented out and custom css applied

import WaveSurfer from 'wavesurfer.js';

const createPlayer = (
  audioArray,
  trackTitles,
  targetParent,
  playImg,
  pauseImg,
) => {
  for (let i = 0; i < audioArray.length; i += 1) {
    // create a track div w/ id of track[i], add class, append to targetParent
    const track = document.createElement('div');
    track.id = `track${[i]}`;
    track.classList.add('track');

    // create accompanying track title in DOM, assign it from trackTitles[i]
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = trackTitles[i];
    track.appendChild(trackTitle);

    // div to hold the wavesurfer.js object and initiation overlays
    const waveContainer = document.createElement('div');
    waveContainer.id = `wave-container${[i]}`;
    waveContainer.classList.add('wave-contaier');
    track.appendChild(waveContainer);

    // append track to targetParent parameter
    targetParent.appendChild(track);

    // create wavesurfer instance with options applied, append to the above waveContainer div
    const wavesurfer = WaveSurfer.create({
      container: `#wave-container${[i]}`,
      waveColor: '#c4c3c4',
      progressColor: 'rgb(152, 77, 196)',
      height: 85,
      barWidth: 0,
      barRadius: 0,
      cursorWidth: 0,
      autoplay: false,
      dragToSeek: true,
    });

    // load wavesurfer with audio file
    wavesurfer.load(audioArray[i]);

    // create overlay that covers wavesurfer.js object within waveContainer.
    // concept is to force user to initiate audio file on browser by
    // hitting play before they can drag/seek/timedate on wave ui.
    // first action on wavesurfer audio must be play().
    // this avoids issue on mobile where timing goes out of sync if user drags/seeks
    // prior to audio interaction. Mobile environment lock down what can
    // happen on audio before first user interaction.
    // now interaction through ('click') and .play() is forced first.
    const initiateOverlay = document.createElement('div');
    initiateOverlay.classList.add('initiate-overlay');

    // the initiation button in the overlay
    const initiateText = document.createElement('button');
    initiateText.classList.add('initiate-text');
    initiateText.textContent = 'Click to Play';

    // append overlay elements to waveContaier
    initiateOverlay.appendChild(initiateText);
    waveContainer.appendChild(initiateOverlay);

    // if overlay is clicked, initiate play() and remove overlay
    initiateOverlay.onclick = () => {
      wavesurfer.play();
      initiateOverlay.style.display = 'none';
    };

    // optionsDisplay container for play/pause and timeDisplay
    const optionsDisplay = document.createElement('div');
    optionsDisplay.classList.add('options-display');
    track.appendChild(optionsDisplay);

    // create play/pause button
    const playBtn = document.createElement('button');
    playBtn.classList.add('play-btn');

    // create play img
    const play = new Image();
    play.src = playImg;
    play.classList.add('play-img');

    // create pause img
    const pause = new Image();
    pause.src = pauseImg;
    pause.classList.add('pause-img');

    // set play button as default display on load
    playBtn.appendChild(play);

    // on click, playBtn plays or pauses the wavesurfer instance
    // and removes overlay if it is there
    playBtn.onclick = () => {
      wavesurfer.playPause();
      initiateOverlay.style.display = 'none';
    };

    // when paused, show the play img
    wavesurfer.on('pause', () => {
      playBtn.replaceChild(play, pause);
      // wavesurfer.waveColor = 'blue';
    });

    // when playing, show, the pause img
    wavesurfer.on('play', () => {
      playBtn.replaceChild(pause, play);
    });

    // append optionsdisplay to track
    optionsDisplay.appendChild(playBtn);

    // timeDisplay container, currentTime container and durationTime container and class assignments
    const timeDisplay = document.createElement('div');
    timeDisplay.classList.add('time-display');

    const currentDisplay = document.createElement('div');
    currentDisplay.classList.add('current-display');

    const durationDisplay = document.createElement('div');
    durationDisplay.classList.add('durationDisplay');

    // divider to sperate displays and its text
    const divider = document.createElement('div');
    divider.classList.add('divider');
    divider.textContent = '/';

    // takes time in miliseconds and formats to a 60base mm:ss display
    const formatTime = (time) => [
      Math.floor((time % 3600) / 60), // minutes
      `00${Math.floor(time % 60)}`.slice(-2), // seconds
    ].join(':');

    // set initial current time to 00:00
    currentDisplay.textContent = '0:00';
    // whenever track time updates, update current time display

    wavesurfer.on('timeupdate', () => {
      currentDisplay.textContent = formatTime(wavesurfer.getCurrentTime());
      // console.log(wavesurfer.getCurrentTime());
    });

    // set intial duration time to 00:00 until ready - just to fill the space
    durationDisplay.textContent = '0:00';
    // when track is decoded and ready to play, display track duration
    wavesurfer.on('ready', () => {
      durationDisplay.textContent = formatTime(wavesurfer.getDuration());
    });

    // append time elements to timeDisplay
    timeDisplay.appendChild(currentDisplay);
    timeDisplay.appendChild(divider);
    timeDisplay.appendChild(durationDisplay);

    // append timeDisplay to optionsDisplay
    optionsDisplay.appendChild(timeDisplay);

    // js style for default that can be commented
    // DOM elements can be grabbed by assigned css selector

    waveContainer.style.position = 'relative';

    initiateOverlay.style.position = 'absolute';
    initiateOverlay.style.width = '100%';
    initiateOverlay.style.height = '100%';
    initiateOverlay.style.display = 'flex';
    initiateOverlay.style.boxSizing = 'boder-box';
    initiateOverlay.style.justifyContent = 'center';
    initiateOverlay.style.alignItems = 'center';
    initiateOverlay.style.zIndex = '2';
    initiateOverlay.style.top = '0';
    initiateOverlay.style.left = '0';

    // trackTitle.style.fontSize = '20px';

    // optionsDisplay.style.display = 'flex';
    // optionsDisplay.style.gap = '20px';
    // optionsDisplay.style.margin = '0 0 40px 0';
    // optionsDisplay.style.alignItems = 'center';

    // playBtn.style.display = 'flex';
    // playBtn.style.alignItems = 'center';
    // playBtn.style.borderRadius = '25px';
    // playBtn.style.border = 'none';
    // playBtn.style.backgroundColor = 'white';

    // play.style.height = '30px';
    // play.style.width = '30px';
    // pause.style.height = '30px';
    // pause.style.width = '30px';

    // timeDisplay.style.display = 'flex';
    // timeDisplay.style.gap = '5px';

    // // playBtn can be grabbed by class and have ::hover applied for better results
    // playBtn.addEventListener('mouseenter', () => {
    //   playBtn.style.backgroundColor = '#c4c3c4';
    // });

    // playBtn.addEventListener('mouseleave', () => {
    //   playBtn.style.backgroundColor = 'white';
    // });
    //   const initiated = false;
  }
};

export default createPlayer;
