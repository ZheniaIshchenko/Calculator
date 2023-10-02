<template>
  <main>
    <div class="wrapper">
      <div class="switch-theme">
        <button class="switch" @click="switchTheme()">
          <div class="animation">
            <img src="./assets/img/Sun.svg" id="sun">
            <div class="circle"></div>
            <img src="./assets/img/Moon.svg" id="moon">
          </div>
      </button>
      </div>
      <CalculatorOutput/>
      <ButtonsBoard/>
    </div>
  </main>
</template>

<script>
import CalculatorOutput from './components/CalculatorOutput.vue'
import ButtonsBoard from './components/ButtonsBoard.vue'

export default {
  components: {
    CalculatorOutput,
    ButtonsBoard
  },
  methods:{
    switchTheme(){
      document.body.classList.toggle('active')
    }
  }
}
</script>

<style>
  @import './assets/less/index.less';
</style>