import styled from 'styled-components'

export const SelectWrapper = styled.div `
margin-top: 7px;
margin-left: 91px;
.select-box:hover {
-webkit-box-shadow: 15px 20px 31px -1px rgba(112,112,112,1);
-moz-box-shadow: 15px 20px 31px -1px rgba(112,112,112,1);
box-shadow: 15px 20px 31px -1px rgba(112,112,112,1);
}
`
export const SelectTitleBox = styled.div `
position: relative;
width: 100%;
max-width: 401px;
padding-left: 27px;
padding-top: 28px;
height: 93px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 2px solid #434343;
border-radius: 8px;
opacity: 1;
font-size: 32px;
letter-spacing: 0px;
font-weight: 900;
color: #000000;
cursor: pointer;
transition: all .3s ease;
.triangle {
  position: absolute;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-top: 15px solid #707070;
  right: 25px;
  top: 38px;
}
`
export const OptionsWrapper = styled.div `
position: relative;
width: 401px;
min-height: 200px;
height: auto;
border: 2px solid #707070;
z-index: 2;
.options:hover{
  background: #707070;
  color: #fff;
}

`
export const Options = styled.div `
width: 100%;
height: 80px;
border: 2px solid #707070;
background: #FFFFFF 0% 0% no-repeat padding-box;
padding-top: 15px;
padding-left: 27px;
font-size: 32px;
letter-spacing: 0px;
font-weight: 900;
color: #000000;
cursor: pointer;
transition: all .3s ease;
`
