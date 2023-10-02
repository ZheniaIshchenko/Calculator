import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentExpression:[],
    previousExpression:[]
  },
  getters: {
    getCurrentExpression(state){
      return state.currentExpression
    },
    getPreviousExpression(state){
      return state.previousExpression
    }
  },
  actions: {
    equals(context){
      (!(context.state.currentExpression[context.state.currentExpression.length-1] < 10) && context.state.currentExpression[context.state.currentExpression.length-1] != '%') ? context.state.currentExpression.pop() : context.state.currentExpression
      context.state.previousExpression = JSON.parse(JSON.stringify(context.state.currentExpression))
      for (let i = context.state.currentExpression.length-1; i > -1; i--){
        let firstNumIndex = 0
        if (context.state.currentExpression[i] == '%'){
          for ( let k = i - 1; k > -1; k--){
            if (!(context.state.currentExpression[k] < 10) || k==0){
              firstNumIndex = k+1
              break
            } 
          }
        }
        if (firstNumIndex){
          firstNumIndex = firstNumIndex == 1 ? firstNumIndex-1 : firstNumIndex
          context.state.currentExpression.splice(firstNumIndex,0, '(')
        }
      }
      let expression = context.state.currentExpression.join('').replace(/×/g,'*').replace(/÷/g,'/').replace(/%/g,'/100)')
      context.state.currentExpression = eval(expression).toString().split('')
    },
    clearAll(context){
      context.state.currentExpression[0] ? context.state.currentExpression = [] : context.state.previousExpression = [] 
    },
    addNumber(context, number){
      context.state.currentExpression.push(number)
    },
    deleteChar(context){
      if((context.state.currentExpression.length < 3) && !(context.state.currentExpression[0] < 10)){
        context.state.currentExpression.pop()
        context.state.currentExpression.pop()
      }else{
        context.state.currentExpression.pop()
      }
    },
    switchPlusMinus(context){
      context.state.plusMinus ? context.state.currentExpression.shift() : context.state.currentExpression.unshift('-')
      context.state.plusMinus = !context.state.plusMinus
    },
  },
})
