# pauls_story

A place to hear stories from Paul Anthony Spicknall. My Dad.

Audio recorded by Luke Spicknall on April 28th, 2023.

This is a javascript project.

This page contains an image carousel and an audio section.

The images are imported into a js module where image objects are created from them
and pushed to an array which is exported out of the module. They are imported into index.js where they are
placed in the DOM one at a time, advancing every 10 seconds. There are reverse and advance
buttons on the images to move backward or forward in the array. The images array starts from a
random position at each browser load.

The audio section is made using wavesurfer.js to create each track. The audio files
are imported and pushed to an array. For each array item, a wavesurfer.js track is
created with accompanying transport controls and time display. An overlay is placed over top
the track during load so the user cannot try to enagage audio before it is ready.
An overlay is also placed over the waveform at load so that any action on the waveform
triggers the file to play if it has yet to be played. This forces the user to start the
audio files before they can do any actions like drag or seek or timeupdate. The primary point of
this is to ensure consistent user experience across devices and browsers. On some
devices and browser users may not alter audio before first intiating it - so if
a user tried to drag or seek on mobile prior to an initial play, the timing and
ui on the wavesurfer player would break. With these overlays, there is no
way to break the player prior to audio intiation.
