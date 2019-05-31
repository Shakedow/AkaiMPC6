window.addEventListener("load", () => {//start of load addEL
  const sounds = document.querySelectorAll(".sound");//creates sound class funct
  const pads = document.querySelectorAll(".pads div");//creates pads class funct
  const visual = document.querySelector(".visual");//creationvisual class funct
  const colors = [//creates bubble colors in bubble function
    "#60d444",
    "#4286f4",
    "#d579d8",
    "#d3d160",
    "#f4b200",
    "#f40000"
  ];
  /*end of Event Listener page load function that creates global 
  const sounds pads visual and 
  assign jumping bubble colors*/

  pads.forEach((pad, index) => {//start of pads for each pad and index fucn
    pad.addEventListener("click", function() {/*start of pad addEL click function 
      assign audio play start*/
      sounds[index].currentTime = 0;//start of sound postion from mp3
      sounds[index].play();//plays audio when user has click pad
      createBubble(index);//creates bubble func assing index colors for each pad 1-6
    });/*end of funct pads for each func 
    pad and index assign audio and bubble animation after click*/
  });/*end of Event listener click function that initiates 
  audio sets start of audio clip positon and initiates
  the bubble function applied for each pad and index*/


  const createBubble = index => {
    // start of creat create bubbles funct
    const bubble = document.createElement("div");//creates bubble div animation
    visual.appendChild(bubble);//after bubble animatioin creation assign the follow
    bubble.style.backgroundColor = colors[index];//start of bubble color index call
    bubble.style.animation = `jump 1s ease`;//start of jump animation
    bubble.addEventListener("animationend", function() {//eventLE animationend func
      visual.removeChild(this);//start of removeChild function class visual 
    });//end of const create animationend funct
  };//end of const of create bubble index funct
});/*end of window add event listener load funct */
