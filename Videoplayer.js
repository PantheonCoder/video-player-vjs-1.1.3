
let video_player = document.querySelectorAll(".video_player")
let video = document.querySelectorAll(".video_player video")
video_player.forEach((player)=>{
  

  let onscreen_controls=document.createElement("div")
  onscreen_controls.classList.add("onscreen_controls");
  onscreen_controls.innerHTML=`
<span id="scrollbrightness" class="sb  ">
<span id="plus"><i class="fa-solid fa-plus"></i></span>
<span id="updatevalue" class="1">
<span id="value">0%</span>
Brightness
</span>
<span id="minus"><i class="fa-solid fa-minus"></i></span>
</span>
<span class="play_icon active tool preference">
<i class="fa-solid fa-play"></i>
</span>
<span id="scrollvolume" class="sv">
<span id=""><i class="fa-solid fa-plus"></i></span>
<span id="updatevalue">
<span id="value">0%</span>
Volume
</span>
<span id=""><i class="fa-solid fa-minus"></i></span>

</span>
  `
  
  let controlsDiv=document.createElement("div")
  controlsDiv.classList.add("controls");
  controlsDiv.innerHTML=`
<div class="visible timeline">
<div class="videotime">
<span id="currenttime">00:00:00</span>
<span id="duration">00:00:00</span>
  <span id="showmenu">
   ...
    </span>
</div>
<span id="range" ></span>


</div>

<div class="main_controls">
  
  <span id="brightness"  class="tool   "><i class="fa-solid fa-sun"></i>
  </span>
  <span id="speed" class="tool "><i class="fa-solid fa-bolt"></i>
  </span>
  <span id="skipbackward" class="tool"  value="10"><i class="fa-solid fa-backward"></i>
  </span>
  <span id="skipforward" class="tool" value="10"><i class="fa-solid fa-forward"></i>
  </span>
  <span id="fullscale" class="tool"><i class="fa-solid fa-expand"></i>
  </span>
  <span id="volume" class="tool   "><i class="fa-solid fa-music"></i></span>
</div>

`
  
player.append(onscreen_controls)
  
  player.append(controlsDiv)

})
let brightbtn = document.querySelectorAll("#brightness")
let fullscalebtn = document.querySelectorAll("#fullscale")
let volumebtn= document.querySelectorAll("#volume")
let playbackbtn= document.querySelectorAll("#speed")
let scrollvolume= document.querySelectorAll(".sv")
let scrollbrightness= document.querySelectorAll(".sb")
let minusbtn_sb= document.querySelectorAll(".sb #minus")
let plusbtn_sb = document.querySelectorAll(" .sb  #plus")
let updatevalue= document.querySelectorAll(".sb #updatevalue ")
let showmenu= document.querySelectorAll("#showmenu")
let controls= document.querySelectorAll(".controls")
let durationTime= document.querySelectorAll("#duration")
let currenttime= document.querySelectorAll("#currenttime")
let videoduration= document.querySelectorAll("#duration")

let play_circle= document.querySelectorAll(".play_icon")
let video_time = document.querySelectorAll("#range")

////////////////section controls
controls.forEach((control,i)=>{
let checktime =()=>{
  let minutes,seconds,hours;
seconds =Math.floor(video[i].currentTime %60)
    minutes =Math.floor(video[i].currentTime / 60) %60;
  
hours=Math.floor(video[i].currentTime/3600)


  currenttime[i].innerHTML=`
    ${hours.toString().padStart(2,0)}:
  ${minutes.toString().padStart(2,0  )}:${seconds.toString().padStart(2,0)}
  `
  
  
  
}
setInterval(checktime,1000)
  
  let toggle_play =()=>{
    
if(video[i].paused ==true){

    video[i].play()
    
    play_circle[i].innerHTML=`<i class="fa-solid fa-pause"></i>`
    
    
    
  }
  else{

    video[i].pause()
    
    play_circle[i].innerHTML=`<i class="fa-solid fa-play"></i>`
  }

    setTimeout(clickToPlay,300)
  }
let clickToPlay=()=>{
   if(video[i].paused== true){
   play_circle[i].classList.add("active"
   )
   }
   else if (video[i].paused== false){
     play_circle[i].classList.remove("active")
     
     
   }
   
  
}
let trackTime=()=>{
let before= window.getComputedStyle(video_time[i],"::before")
    video_time[i].style.setProperty('--auto',`${
      (video[i].currentTime /video[i].duration) *100 }%`)
  }
  
video[i].addEventListener("timeupdate",trackTime)
video[i].addEventListener("click",toggle_play)
  /////////volume&&brightness
  let showControls=()=>{
control.classList.toggle("active")
  }
showmenu[i].addEventListener("click",()=>{
setTimeout(showControls,300)
})
video[i].addEventListener("click",()=>{
control.classList.toggle("active")

  
})
  play_circle[i].addEventListener("click",()=>{
    toggle_play()
  })
})
 
  //////////////////  skips and onscreen //////





let skipforward= document.querySelectorAll(".main_controls #skipforward")

skipforward.forEach((forward,i)=>{
  forward.addEventListener("click",()=>{
    video[i].currentTime += 10
  })
  
})

let skipbackward= document.querySelectorAll(".main_controls #skipbackward")

skipbackward.forEach((backward,i)=>{
  backward.addEventListener("click",()=>{
    video[i].currentTime -= 10
  })
  
})
 
 

let vidtools = document.querySelectorAll(".tool")


vidtools.forEach((tool)=>{
  tool.addEventListener("click",()=>{

    document.querySelector(".tool.preference").classList.remove("preference")

tool.classList.add("preference")
    
 if(tool.id=="brightness"){
   
  
 }
else if(tool.id=="volume"){
   
 }
else if(tool.id=="fullscale"){
 
 }
 
else if(tool.id=="speed"){
  
 }
  })
  
})


brightbtn.forEach((btn,i)=>{
  btn.addEventListener("click",()=>{
    
scrollvolume[i].classList.remove("active")
  scrollbrightness[i].classList.toggle("active")
  })
  
})

volumebtn.forEach((btn,i)=>{
  btn.addEventListener("click",()=>{
scrollbrightness[i].classList.remove("active")
  
  scrollvolume[i].classList.toggle("active")
  })
  
})

plusbtn_sb.forEach((btn,i)=>{
  let val = 100
  
  
btn.addEventListener("click",()=>{
  
if (val <150){
     val+=5
   }
video[i].style.filter=`brightness(${val}%)`
updatevalue[i].innerHTML=`
<span id="value">${val}%</span>

Brightness

`
})
minusbtn_sb[i].addEventListener("click",()=>{
  if (val > 0){
     val-=5
   }
   video[i].style.filter=`brightness(${val}%)`
updatevalue[i].innerHTML=`
<span id="value">${val}%</span>

Brightness

`
})

})



















































