import { DarkTheme, LightTheme, UNCORRECT_BRACKETS_MESSAGE, UNCORRECT_DOT_INPUT, UNCORRECT_INPUT_MESSAGE, UNCORRECT_OPERATOR_MESSAGE, WARNING_MESSAGE_TIMEOUT } from '@/constants'
import { expressions } from '../expressions/expressions'

const {
  adding,
  subtraction,
  division,
  multiplication,
  modulo,
  complexExpression,
  correctBracketsInput,
  unCorrectBracketsInput,
  unCorrectBracketsInputTwo,
  unCorrectBracketsInputThree,
  uncorrectInputOne,
  uncorrectDotInput,
  uncorrectInputTwo,
  uncorrectInputThree,
} = expressions

describe('Houme page', () => {
  it('visit application', () => {
    cy.visit('http://localhost:3030/')
  })
})

describe('Expressions and Display', () => {
  it('check correct adding functional', () => {
    adding.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', '47')
    cy.getBySel('C').click()
  })

  it('check correct subtraction functional', () => {
    subtraction.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', '51')
    cy.getBySel('C').click()
  })

  it('check correct division functional', () => {
    division.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', '2.02')
    cy.getBySel('C').click()
  })
  it('check correct multiplication functional', () => {
    multiplication.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', '5050')
    cy.getBySel('C').click()
  })
  it('check correct modulo functional', () => {
    modulo.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', '1')
    cy.getBySel('C').click()
  })
  it('check correct complex expression functional', () => {
    complexExpression.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', '-453713.233')
    cy.getBySel('C').click()
  })
})

describe('Brackets', () => {
  it('check correct brackets input', () => {
    correctBracketsInput.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', '56')
    cy.getBySel('C').click()
  })
  it('check uncorrect brackets input one', () => {
    unCorrectBracketsInput.map(item => {
      cy.getBySel(item).click()
    })
    cy.wait(500)
    cy.getBySel('display').should('have.text', UNCORRECT_BRACKETS_MESSAGE)
    cy.wait(WARNING_MESSAGE_TIMEOUT)
    cy.getBySel('display').should('have.text', '2 +  ( 6 * 8 +  ( 4 + 2 ) ')
    cy.getBySel('C').click()
  })
  it('check uncorrect brackets input two', () => {
    unCorrectBracketsInputTwo.map(item => {
      cy.getBySel(item).click()
    })
    cy.wait(500)
    cy.getBySel('display').should('have.text', UNCORRECT_BRACKETS_MESSAGE)
    cy.wait(WARNING_MESSAGE_TIMEOUT)
    cy.getBySel('display').should('have.text', '0 *  ( 56 + 88')
    cy.getBySel('C').click()
  })
  it('check uncorrect brackets input three', () => {
    unCorrectBracketsInputThree.map(item => {
      cy.getBySel(item).click()
    })
    cy.wait(500)
    cy.getBySel('display').should('have.text', UNCORRECT_BRACKETS_MESSAGE)
    cy.wait(WARNING_MESSAGE_TIMEOUT)
    cy.getBySel('display').should('have.text', '0 *  (  (  ( 60 / 6 ) ')
    cy.getBySel('C').click()
  })
})

describe('Uncorrects inputs', () => {
  it('check uncorrect input', () => {
    uncorrectInputOne.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', UNCORRECT_OPERATOR_MESSAGE)
    cy.wait(WARNING_MESSAGE_TIMEOUT)
    cy.getBySel('display').should('have.text', '2 *  ( ')
    cy.getBySel('C').click()
  })
  it('check uncorrect dot input', () => {
    uncorrectDotInput.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', UNCORRECT_DOT_INPUT)
    cy.wait(WARNING_MESSAGE_TIMEOUT)
    cy.getBySel('display').should('have.text', '2.')
    cy.getBySel('C').click()
  })
  it('check uncorrect two', () => {
    uncorrectInputTwo.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', UNCORRECT_INPUT_MESSAGE)
    cy.wait(WARNING_MESSAGE_TIMEOUT)
    cy.getBySel('display').should('have.text', '2.')
    cy.getBySel('C').click()
  })
  it('check uncorrect three', () => {
    uncorrectInputThree.map(item => {
      cy.getBySel(item).click()
    })
    cy.getBySel('display').should('have.text', UNCORRECT_INPUT_MESSAGE)
    cy.wait(WARNING_MESSAGE_TIMEOUT)
    cy.getBySel('display').should('have.text', '4 +  ( 59 * ')
    cy.getBySel('C').click()
  })

})
describe('History', () => {
  it('initial history state has to be empty', () => {
    cy.visit('http://localhost:3030/')
    cy.window().its('store').invoke('getState').its('history').should('have.length', 0)
  })
  it('Clear History button is disabled', () => {
    cy.getBySel('settings').click()
    cy.getBySel('clearHistory').should('be.disabled')

  })
  it('adding items to history', () => {
    cy.getBySel('home').click()
    division.map(item => {
      cy.getBySel(item).click()
    })
    cy.window().its('store').invoke('getState').its('history').should('have.length', 1)
  })
  it('clear History and Display', () => {
    cy.getBySel('settings').click()
    cy.getBySel('clearHistory').should('not.be.disabled')
    cy.getBySel('clearHistory').click()
    cy.getBySel('clearHistory').should('be.disabled')
    cy.getBySel('home').click()
    cy.window().its('store').invoke('getState').its('history').should('have.length', 0)
    cy.getBySel('display').should('have.text', '0')
  })

})

describe('Application theme', () => {
  it('initial theme is light', () => {
    cy.window().its('store').invoke('getState').its('theme').should('is', LightTheme)
  })
  it('change theme from light to dark', () => {
    cy.getBySel('settings').click()
    cy.getBySel('select').click()
    cy.getBySel('Dark theme').click()
    cy.getBySel('home').click()
    cy.window().its('store').invoke('getState').its('theme').should('is', DarkTheme)
  })
  it('change theme from dark to light', () => {
    cy.getBySel('settings').click()
    cy.getBySel('select').click()
    cy.getBySel('Light theme').click()
    cy.getBySel('home').click()
    cy.window().its('store').invoke('getState').its('theme').should('is', LightTheme)
  })
})

