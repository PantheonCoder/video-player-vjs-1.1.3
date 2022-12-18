
let video_player = document.querySelectorAll(".video_player")
let video = document.querySelectorAll(".video_player video")
video_player.forEach((player)=>{
  

  let span_b=document.createElement("span")
  span_b.classList.add("sb");
  span_b.id="scrollbrightness"
  span_b.innerHTML=`
<span id="plus"><i class="fa-solid fa-plus"></i></span>
<span id="updatevalue" class="1">
<span id="value">0%</span>
Brightness
</span>
<span id="minus"><i class="fa-solid fa-minus"></i></span>

`

  let play=document.createElement("span")

play.classList.add("play_icon");
play.classList.add("active");
play.classList.add("tool");
play.classList.add("preference");
  play.innerHTML=`


<i class="fa-solid fa-play"></i>
`
  let span_v=document.createElement("span")
span_v.classList.add("sv");
  span_v.id="scrollvolume"
 span_v.innerHTML=`
<span id="plus"><i class="fa-solid fa-plus"></i></span>
<span id="updatevalue">
<span id="value">0%</span>
Volume
</span>
<span id="minus"><i class="fa-solid fa-minus"></i></span>


`

  let pb=document.createElement("div")
pb.classList.add("playBack");

  pb.innerHTML=`

<span  class="pbBtn"    id="m_fivex" >-5x</span>
<span    class="pbBtn"   id="m_twox">-2x</span>
<span    class="pbBtn"   id="onex">1x</span>

<span   class="pbBtn"    id="twox">+2x</span>
<span    class="pbBtn"   id="fivex">+5x</span>




  `
  
  let controlsDiv=document.createElement("div")
  controlsDiv.classList.add("controls");
  controlsDiv.innerHTML=`
<div class="visible timeline">
<div class="wrapper">
<div class="videotime">

<span id="currenttime">00:00:00</span>
|
<span id="duration">00:00:00</span>
</div>
  <span id="showmenu">
   <i class="fa-solid fa-bars"></i>
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
  
player.append(pb)
player.append(span_b)
player.append(span_v)
player.append(play)

  
  
  
  
  
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
let updatevalue_sb= document.querySelectorAll(".sb #updatevalue ")
let pb_screen = document.querySelectorAll(".playback")
let pb_m_five= document.querySelectorAll("#m_fivex")
let pb_m_two= document.querySelectorAll("#m_twox")
let pb_two= document.querySelectorAll("#twox")
let pb_one= document.querySelectorAll("#onex")
let pb_five= document.querySelectorAll("#fivex")

let minusbtn_sv= document.querySelectorAll(".sv #minus")
let plusbtn_sv = document.querySelectorAll(" .sv  #plus")
let updatevalue_sv= document.querySelectorAll(".sv #updatevalue ")

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
pb_screen[i].classList.remove("active")
  })
  
})

volumebtn.forEach((btn,i)=>{
  btn.addEventListener("click",()=>{
scrollbrightness[i].classList.remove("active")
  
  scrollvolume[i].classList.toggle("active")
 
pb_screen[i].classList.remove("active")
  })
  
})

plusbtn_sb.forEach((btn,i)=>{
  let val = 100
  
  
btn.addEventListener("click",()=>{
  
if (val <150){
     val+=5
   }
video[i].style.filter=`brightness(${val}%)`
updatevalue_sb[i].innerHTML=`
<span id="value">${val}%</span>

Brightness

`
})
minusbtn_sb[i].addEventListener("click",()=>{
  if (val > 0){
     val-=5
   }
   video[i].style.filter=`brightness(${val}%)`
updatevalue_sb[i].innerHTML=`
<span id="value">${val}%</span>

Brightness

`
})

})

plusbtn_sv.forEach((btn,i)=>{
 
  let vol =80
  
btn.addEventListener("click",()=>{
  
if (vol <100){
     vol +=5
     
   }
video[i].volume=(vol/100)
updatevalue_sv[i].innerHTML=`
<span id="value">${vol}%</span>

volume

`
})
minusbtn_sv[i].addEventListener("click",()=>{
  if (vol > 0){
     vol-=5
   }
   video[i].volume= (vol/100)
updatevalue_sv[i].innerHTML=`
<span id="value">${vol}%</span>

volume

`
})

})



video_time.forEach((time,i)=>{

time.addEventListener("click", (e)=>{
let offset=(e.offsetX/time.offsetWidth)* video[i].duration


video[i].currentTime= offset

})

})













playbackbtn.forEach((btn,i)=>{
  btn.addEventListener("click",
  ()=>{
    pb_screen[i].classList.toggle("active")
scrollvolume[i].classList.remove("active")
  scrollbrightness[i].classList.remove("active")
    
    
  }
  )
  
  
  
})
fullscalebtn.forEach((btn,i)=>{
  btn.addEventListener("click",()=>{
    video_player[i].classList.toggle("full")
    
    
    
  })
  
  
})

pb_m_two.forEach((pb,i)=>{
  pb.addEventListener("click",()=>{
    
    video[i].playbackRate=0.5
  })
  
})
pb_m_five.forEach((pb,i)=>{
  pb.addEventListener("click",()=>{
    
    video[i].playbackRate=0.25
  })
  
})

pb_two.forEach((pb,i)=>{
  pb.addEventListener("click",()=>{
    
    video[i].playbackRate=1.5
  })
  
})

pb_five.forEach((pb,i)=>{
  pb.addEventListener("click",()=>{
    
    video[i].playbackRate=3
  })
  
})

pb_one.forEach((pb,i)=>{
  pb.addEventListener("click",()=>{
    
    video[i].playbackRate=1
  })
  
})




















let selectfile = document.querySelector(".selectfile")
let fileinput = document.querySelector("#file")

selectfile.addEventListener("click",()=>{
  fileinput.click()
})

let alertbox= document.querySelector(".alert")
let Links= document.querySelectorAll(".link input")
let copyBtn= document.querySelectorAll("#copyBtn")
let showBox =()=>{
  
  alertbox.classList.remove("active")
  
}

copyBtn.forEach((btn,i)=>{

  btn.addEventListener("click",()=>{
let copiedText =Links[i].value
let clipBoard=  navigator.clipboard
clipBoard.writeText(copiedText)
alertbox.classList.add("active")
setTimeout(showBox,2000)
    
  })
  
})


  video.forEach((vid,i)=>{
    
  

fileinput.addEventListener("change",()=>{
video_player[i].classList.add("active")
fullscalebtn[i].classList.remove("preference")
play_circle[i].classList.add("preference")

video_player[i].classList.remove("full")
let file= fileinput.files[0]
vid.src= URL.createObjectURL(file)

})


})


