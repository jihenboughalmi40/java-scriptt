
      
/*Downloaded from https://www.codeseek.co/missditch/javascript-drum-kit-no-audio-jVjGao */
function playSound(e) {
    //  console.log(e);
    //  console.log(e.keyCode);
      const audio1 = document.querySelector('audio[data-key=\"' + e.keyCode + '\"]');
    //  const audio1a = document.querySelector('audio[data-key="65"]');
      console.log('audio1 is ' + audio1);
    //  console.log('audio1a is ' + audio1a);
     //gives error message: Uncaught DOMException: Failed to execute 'querySelector' on 'Document': 'audio[data-key=75]' is not a valid selector
      /* var audio2 = document.querySelector(`audio[data-key=${e.keyCode}]`);
      console.log(`audio2 is ${audio2}`);    */
      // adding double quotes does the trick:
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //  console.log(key);
      if(!audio) {
        return;
      }
      audio.currentTime = 0;
      //https://developers.google.com/web/updates/2016/03/play-returns-promise?hl=en
      audio.play().then(function() {
        console.log('The play promise fulfilled');
    }).catch(function(error) {
        console.log('The play promise rejected');
      });
      key.classList.add("playing");
     }
    
     function removeTransition(e) {
       if (e.propertyName !== 'transform') {
         return;
       }
       console.log(e.propertyName);
       this.classList.remove("playing");
       //e.target.classList.remove("playing");
       //here this and e.target are the same , but they can be different - see link below
       /* http://stackoverflow.com/questions/2654141/jquery-difference-between-event-target-and-this-keyword  */
     }
    
     const keys = document.querySelectorAll('.key');
    
     //my solution:
     /*
     for (var i = 0; i < keys.length; i++) {
       keys[i].addEventListener('transitionend', removeTransition);
     }  */
     // course solution:
     keys.forEach(key => key.addEventListener('transitionend', removeTransition));
     window.addEventListener("keydown", playSound);