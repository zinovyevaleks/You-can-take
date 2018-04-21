var video = document.querySelector('.video__player'),
  button = document.querySelector('.video__play-button'),
  videoPlayBlock = document.querySelector('.video__inner-wrapper');

function vidplay() {
  if (video.paused) {
    video.play();
    videoPlayBlock.classList.add('hidden');
    document.addEventListener('mouseover', function (evt) {
      target = evt.target;
      if (video === target || videoPlayBlock === target) {
        videoPlayBlock.classList.remove('hidden');
        console.log(target)
      } else {
        videoPlayBlock.classList.add('hidden');
        console.log(target)
      }
    })
  } else {
    video.pause();
    //button.textContent = ">";
  }
}

function restart() {
  var video = document.getElementById("Video1");
  video.currentTime = 0;
}

function skip(value) {
  var video = document.getElementById("Video1");
  video.currentTime += value;
}

button.addEventListener('click', vidplay);
video.addEventListener('click', vidplay);
