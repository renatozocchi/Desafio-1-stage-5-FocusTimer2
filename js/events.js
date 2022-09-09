import {  
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffeShop,
  buttonFire,
  buttonForestSecundary,
  buttonRainSecundary,
  buttonCoffeShopSecundary,
  buttonFireSecundary,} from "./elements.js"

export default function Events({ timer, controls }) {
  
  // Botões Timer
  buttonPlay.addEventListener('click', function() {
    timer.countdown()
    controls.soundButtonall()
  })
    
  buttonStop.addEventListener('click', function() {
    timer.updateDisplay()
    timer.timeOut()
    controls.soundButtonall()
  })
    
  buttonMore.addEventListener('click', function() {
    timer.more()
    timer.updateDisplay()
    controls.soundButtonall()
  })
    
  buttonLess.addEventListener('click', function() {
    timer.less()
    timer.updateDisplay()
    controls.soundButtonall()
  })
  
  // Botões de musicas ambiente
  
  buttonForest.addEventListener('click' , function() {
    controls.soundPlayForest()
    controls.soundStopRain()
    controls.soundStopCoffeShop()
    controls.soundStopFire()
  })
  
  buttonForestSecundary.addEventListener('click' , function() {
    controls.soundStopForest()
  })
  
  buttonRain.addEventListener('click' , function () {
    controls.soundPlayRain()
    controls.soundStopForest()
    controls.soundStopCoffeShop()
    controls.soundStopFire()
  })

  buttonRainSecundary.addEventListener('click' , function() {
    controls.soundStopRain()
  })

  buttonCoffeShop.addEventListener('click' , function() {
    controls.soundPlayCoffeShop()
    controls.soundStopFire()
    controls.soundStopForest()
    controls.soundStopRain()
  })

  buttonCoffeShopSecundary.addEventListener('click' , function() {
    controls.soundStopCoffeShop()
  })

  buttonFire.addEventListener('click' , function() {
    controls.soundPlayFire()
    controls.soundStopCoffeShop()
    controls.soundStopForest()
    controls.soundStopRain()
  })

  buttonFireSecundary.addEventListener('click' , function() {
    controls.soundStopFire()
  })
}