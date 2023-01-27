import {
  bindActionCreators,
} from 'redux'

import {
  setOwnValue,
} from '@/actions/actions'
import {
  store,
} from '@/store'

/* UTILS */
import {
  addition,
  division,
  modulo,
  multiplication,
  subtraction,
} from './calculations'
import {
  checkPriority,
} from './checkPriority'
import {
  doCorrectValue,
} from './doCorrectValue'

const {
  dispatch,
} = store

const {
  ownValue,
} = bindActionCreators({
  ownValue: setOwnValue,
}, dispatch)
export const getResult = display => {
  const copyString = display
  let processedArray = doCorrectValue(copyString.split(' '))
  processedArray = processedArray.filter(item => item)
  let numberStack = []
  let operatorsStack = []
  for (let i = 0; i <= processedArray.length + 1;) {
    if (i >= processedArray.length) {
      const previousOperator = operatorsStack[operatorsStack.length - 1]
      const previousOperand = +numberStack[numberStack.length - 2]
      const lastOperand = +numberStack[numberStack.length - 1]
      numberStack = numberStack.splice(0, numberStack.length - 2)
      operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1)
      switch (previousOperator) {
        case '/':
          numberStack.length ?
            numberStack.push(division(previousOperand, lastOperand).toString()) :
            ownValue((+division(previousOperand, lastOperand).toFixed(3)).toString())
          break
        case '*':
          numberStack.length ?
            numberStack.push(multiplication(previousOperand, lastOperand).toString()) :
            ownValue((+multiplication(previousOperand, lastOperand).toFixed(3)).toString())
          break
        case '+':
          numberStack.length ?
            numberStack.push(addition(previousOperand, lastOperand).toString()) :
            ownValue((+addition(previousOperand, lastOperand).toFixed(3)).toString())
          break
        case '-':
          numberStack.length ?
            numberStack.push(subtraction(previousOperand, lastOperand).toString()) :
            ownValue((+subtraction(previousOperand, lastOperand).toFixed(3)).toString())
          break
        case '%':
          numberStack.length ?
            numberStack.push(modulo(previousOperand, lastOperand).toString()) :
            ownValue((+modulo(previousOperand, lastOperand).toFixed(3)).toString())
          break

        default:
          break
      }
      i++
      continue
    }

    const item = processedArray[i]
    // если число -- кладем в стек
    if (item.match(/[0-9]/)) {
      numberStack.push(item)
      i++
      continue
    }

    if (item.match(/[(]/)) {
      operatorsStack.push(item)
      i++
      continue
    }
    //  если закрывается скобка
    if (item.match(/[)]/)) {
      //  то смотрим предыдущий оператор
      const previousOperator = operatorsStack[operatorsStack.length - 1]
      //  если это знак, то выполняем, пока не встретим открывающую скобку
      if (previousOperator.match(/[*-/+/%]/)) {
        const previousOperand = +numberStack[numberStack.length - 2]
        const lastOperand = +numberStack[numberStack.length - 1]
        numberStack = numberStack.splice(0, numberStack.length - 2)
        operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1)
        switch (previousOperator.trim()) {
          case '/':
            numberStack.push(division(previousOperand, lastOperand).toString())
            break
          case '*':
            numberStack.push(multiplication(previousOperand, lastOperand).toString())
            break
          case '+':
            numberStack.push(addition(previousOperand, lastOperand).toString())
            break
          case '-':
            numberStack.push(subtraction(previousOperand, lastOperand).toString())
            break
          case '%':
            numberStack.push(modulo(previousOperand, lastOperand).toString())
            break

          default:
            console.log(previousOperator.trim())
            break
        }
        continue
      }
      if (previousOperator.match(/[(]/)) {
        operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1)
        i++
      }
    }

    // если оператор -- проверяем
    if (item.match(/[*-/+/%]/)) {
      if (!operatorsStack.length) { //  стек пуст? пушим в стек
        operatorsStack.push(item)
        i++
      } else { // иначе
        // получаем предыдущее значение в массиве операторов
        const previousOperator = operatorsStack[operatorsStack.length - 1]
        //  если скобка, то кладем оператор в стек
        if (previousOperator.match(/[(]/)) {
          operatorsStack.push(item)
          i++
          continue
        }
        // если нет, то смотрим приоритет
        // если приоритет текущего оператора меньше или равно прошлому
        // то выполняем последний оператор в стеке
        if (checkPriority(item, previousOperator)) {
          // получаем последних 2 числа
          const previousOperand = +numberStack[numberStack.length - 2]
          const lastOperand = +numberStack[numberStack.length - 1]
          //  убираем их из массива
          numberStack = numberStack.splice(0, numberStack.length - 2)
          // убираем последний оператор из массива
          operatorsStack = operatorsStack.splice(0, operatorsStack.length - 1)
          //  кладем в стек результат вычисления
          switch (previousOperator.trim()) {
            case '/':
              numberStack.push(division(previousOperand, lastOperand).toString())
              break
            case '*':
              numberStack.push(multiplication(previousOperand, lastOperand).toString())
              break
            case '+':
              numberStack.push(addition(previousOperand, lastOperand).toString())
              break
            case '-':
              numberStack.push(subtraction(previousOperand, lastOperand).toString())
              break
            case '%':
              numberStack.push(modulo(previousOperand, lastOperand).toString())
              break

            default:
              console.log(previousOperator.trim())
              break
          }
        } else { // если приоритет больше, то кладем в массив
          operatorsStack.push(item)
          i++
        }
      }
    }
  }
}
