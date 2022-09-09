import Sounds from "./sounds.js"
const sound = Sounds() 

export default function Controls({  
  buttonForest,
  buttonRain,
  buttonCoffeShop,
  buttonFire,
  buttonForestSecundary,
  buttonRainSecundary,
  buttonCoffeShopSecundary,
  buttonFireSecundary,
}) {


  function soundPlayForest() {
    buttonForest.classList.add('hide')
    buttonForestSecundary.classList.remove('hide')
    sound.soundForest.play()
  }
  
  function soundPlayRain() {
    buttonRain.classList.add('hide')
    buttonRainSecundary.classList.remove('hide')
    sound.soundRain.play()
  }
  
  function soundPlayCoffeShop() {
    buttonCoffeShop.classList.add('hide')
    buttonCoffeShopSecundary.classList.remove('hide')
    sound.soundCoffeShop.play()
  }
  
  function soundPlayFire() {
    buttonFire.classList.add('hide')
    buttonFireSecundary.classList.remove('hide')
    sound.soundFire.play()
  }
  
  function soundStopForest() {
    buttonForest.classList.remove('hide')
    buttonForestSecundary.classList.add('hide')
    sound.soundForest.pause()
  }
  
  function soundStopRain() {
    buttonRain.classList.remove('hide')
    buttonRainSecundary.classList.add('hide')
    sound.soundRain.pause()
  }
  
  function soundStopCoffeShop() {
    buttonCoffeShop.classList.remove('hide')
    buttonCoffeShopSecundary.classList.add('hide')
    sound.soundCoffeShop.pause()
  }
  
  function soundStopFire() {
    buttonFire.classList.remove('hide')
    buttonFireSecundary.classList.add('hide')
    sound.soundFire.pause()
  }

  function soundButtonall() {
    sound.buttonPressAudio.play()
  }

  function soundAlarm() {
    sound.kitchenTimer.play()
  }


  return {
    soundPlayForest,
    soundPlayRain,
    soundPlayCoffeShop,
    soundPlayFire,
    soundStopForest,
    soundStopRain,
    soundStopCoffeShop,
    soundStopFire,
    soundAlarm,
    soundButtonall,
  }

}