const baseballButton = document.getElementById('baseball')

const baseballNoise = new Audio("baseball_hit.wav")

baseballButton.addEventListener("click",function() {
    baseballNoise.play()
})



const bowlingButton = document.getElementById('bowling')

const bowlingNoise = new Audio("bowling.wav")

bowlingButton.addEventListener("click",function(){
    bowlingNoise.play()
})

const boxingButton = document.getElementById('boxing')

const boxingNoise = new Audio("boxing_bell.wav")

boxingButton.addEventListener("click",function(){
    boxingNoise.play()
})

const basketballButton = document.getElementById('basketball')

const basketballNoise = new Audio("buzzer_x.wav")

basketballButton.addEventListener("click",function(){
    basketballNoise.play()
})

const golfButton = document.getElementById('golf')

const golfNoise = new Audio("golf_swing.wav")

golfButton.addEventListener("click",function(){
    golfNoise.play()
})

const poolButton = document.getElementById('pool')

const poolNoise = new Audio("pool_break.wav")

poolButton.addEventListener("click",function(){
    poolNoise.play()
})


