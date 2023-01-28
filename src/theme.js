import { css } from 'styled-components'
// const font = 'sans-serif'
// Color palette
const black = '#000000'
const white = '#ffffff'
const error = '#c86464'
const primary = '#c06c84'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'

const boxShadows = ['box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)']

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
        @media (min-width: ${size[label]}px) {
            ${css(...args)}
        }
    `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
        @media (max-width: ${size[label]}px) {
            ${css(...args)}
        }
    `
  return acc
}, {})

export default {
  above,
  below,
  boxShadows,
  // font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
  },
}
