/*
Javascript-video-scrubber Demo
Created by Gary Hepting and the Dev Team at Emerge Interactive
Fork, follow and watch on Github at https://github.com/ghepting/javascript-video-scrubber
Visit Emerge Interctive at http://emergeinteractive.com/
*/

var step = 1; // visible frame
var images = new Array(); // stores all of the frames for quick access
var slider = document.getElementById('myRange');
var isPaused = false;

window.requestAnimFrame = (function () {
  // reduce CPU consumption, improve performance and make this possible
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

(function animloop() {
  // the smoothest animation loop possible
    // if (isPaused) {
			step = slider ? slider.value : 1;
			// if(step === 299) step = 1
			changeFrame();
	// }

  requestAnimFrame(animloop);
})();

function changeFrame() {
  if (images.length > 0 && images[step]) {
    // if the image exists in the array
    if (images[step].complete) {
      // if the image is downloaded and ready
      if ($('#video').attr('src') != images[step].src) {
        // save overhead...?
        $('#video').attr('src', images[step].src); // change the source of our placeholder image
      }
    }
  }
}

window.onkeydown = function() {
	isPaused = !isPaused; // flips the pause state
};

/**
 * TODO
 * Add Play/Pause
 * Performance (Cancel Animation Frame on blur, when not using slider etc)
 * Design
 */