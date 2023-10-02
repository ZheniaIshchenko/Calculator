<template>
  <div class="keyboard" @click="inputButton($event)">
    <button class="instrument" @click="clearAll()">C</button>
    <button class="instrument" id="switchPlusMinus" @click="switchPlusMinus()"><img src="../assets/img/+-.svg"></button>
    <button class="instrument" @click="percent($event)">%</button>
    <button class="operation" @click="operationMulDiv($event)">÷</button>

    <button class="main-buttons">7</button>
    <button class="main-buttons">8</button>
    <button class="main-buttons">9</button>
    <button class="operation" @click="operationMulDiv($event)">×</button>

    <button class="main-buttons">4</button>
    <button class="main-buttons">5</button>
    <button class="main-buttons">6</button>
    <button class="operation" @click="operationPlusMinus($event)">-</button>

    <button class="main-buttons">1</button>
    <button class="main-buttons">2</button>
    <button class="main-buttons">3</button>
    <button class="operation" @click="operationPlusMinus($event)">+</button>

    <button class="main-buttons" id="dot" @click="dot()">.</button>
    <button class="main-buttons">0</button>
    <button class="main-buttons" id="deleteBtn" @click="deleteChar()"><img src="../assets/img/Delete.svg"></button>
    <button class="operation" @click="equals()">=</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonsBoard',
  computed:{
    getCurrentExpression(){
      return this.$store.getters['getCurrentExpression']
    }
  },
  methods:{
    inputButton(event){
      if(event.target.classList[0] && event.target.classList[0].includes('main-buttons') && event.target.id != 'deleteBtn' && event.target.id != 'dot'){
        this.$store.dispatch('addNumber', event.target.innerText)
      }
      // if (event.target.id == 'deleteBtn' || event.target.parentNode.classList[0].includes('main-buttons')){
      //   this.$store.dispatch('deleteChar')
      // } 
      // else if( event.target.id == 'dot'){
        
      //   if(this.getCurrentExpression[this.getCurrentExpression.length-1] < 10){

      //     for(let i = this.getCurrentExpression.length-1; i > -1; i--){
      //       if (this.getCurrentExpression[i] == '.'){
      //         break
      //       } 
      //       else if(!(this.getCurrentExpression[i] < 10)  || ((Math.floor(this.getCurrentExpression.join('')) - this.getCurrentExpression.join('')) == 0)){
      //         this.$store.dispatch('addNumber', event.target.innerText)
      //         break
      //       }
      //     }
      //   }
      // } 
      // else if (event.target.id == 'switchPlusMinus' || event.target.parentNode.classList[0].includes('instrument')){
      //   this.$store.dispatch('switchPlusMinus')
      // }
      // else if (event.target.classList[0].includes('main-buttons') && event.target.id != 'dot'){
      //   this.$store.dispatch('addNumber', event.target.innerText)
      // } 
      // else if (event.target.classList[0].includes('operation')  
      //       && event.target.innerText != '=' 
      //       && (this.getCurrentExpression[this.getCurrentExpression.length-1]<10 || this.getCurrentExpression.length == 0)){
      //   this.$store.dispatch('addNumber', event.target.innerText)
      // }
      // else if(event.target.classList[0].includes('instrument') && (this.getCurrentExpression[this.getCurrentExpression.length-1]<10 || this.getCurrentExpression.length == 0)){
      //   this.$store.dispatch('addNumber', event.target.innerText)
      // }
    },
    equals(){
      if ( this.getCurrentExpression[0]){
        this.$store.dispatch('equals')
      }
    },
    clearAll(){
      this.$store.dispatch('clearAll')
    },
    dot(){
      if(this.getCurrentExpression[this.getCurrentExpression.length-1] < 10){
        for(let i = this.getCurrentExpression.length-1; i > -1; i--){
          if (this.getCurrentExpression[i] == '.'){
            break
          } 
          else if(!(this.getCurrentExpression[i] < 10)  || ((Math.floor(this.getCurrentExpression.join('')) - this.getCurrentExpression.join('')) == 0)){
            this.$store.dispatch('addNumber', event.target.innerText)
            break
          }
        }
      }
    },
    switchPlusMinus(){
      this.$store.dispatch('switchPlusMinus')
    },
    deleteChar(){
      this.$store.dispatch('deleteChar')
    },
    operationMulDiv(event){
      if(this.getCurrentExpression[this.getCurrentExpression.length-1]<10 || this.getCurrentExpression[this.getCurrentExpression.length-1] == '%'){
        this.$store.dispatch('addNumber', event.target.innerText)
      } 
    },
    operationPlusMinus(event){
      if((this.getCurrentExpression[this.getCurrentExpression.length-1]<10 || this.getCurrentExpression.length == 0) || this.getCurrentExpression[this.getCurrentExpression.length-1] == '%'){
        this.$store.dispatch('addNumber', event.target.innerText)
      }
    },
    percent(event){
      if(this.getCurrentExpression[this.getCurrentExpression.length-1]<10){
        this.$store.dispatch('addNumber', event.target.innerText)
      }
    }
  }
}
</script>