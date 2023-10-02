<template>
  <div class="output">
    <div class="previous-expression">
      <span>{{getPreviousExpression}}</span>
    </div>
    <div class="current-expression">
      <span>{{getCurrentExpression}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CalculatorOutput',
  computed:{
    getCurrentExpression(){
      return this.$store.getters['getCurrentExpression'].join('')  
    },
    getPreviousExpression(){
      return this.$store.getters['getPreviousExpression'].join('')
    }
  }
}
</script>