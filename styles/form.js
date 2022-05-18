import styled from 'styled-components'

export const Container = styled.form`
background: rgba(0, 0, 0,0.8);
width: 80vw;
height: 70vh;
position: absolute;
transform: translate(-50%,-50%);
top: 50%;
left:50%;
padding: 1rem;

display: flex;
align-items: center;
justify-content: space-around;
border-radius: 2rem;

@media(max-width: 1050px) {
  flex-direction: column;
  height: auto;
}
`
export const FormTitle = styled.h1`
color: white;
font-weight: bold;
position: relative;
width:30vw;
text-align: start;
font-size: 2rem;

::after {
  content: '';
  width: 4px;
  height: 20vh;
  background: orange;
  display: block;
  position: absolute;
  top: 0;
  left: -3%;
}

@media(max-width: 1050px) {
  width:100%;
  font-size:2rem;
  text-align: center;
  height: auto;

  ::after{
    width: 20vw;
    height: 4px;
    top: 100%;
    left: 50%;
  }
}
`
export const FormContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 40vw;
height: 100%;

@media(max-width: 1050px) {
  width: 100%;
  height: 100%;
}
`
export const FormField = styled.div`
width: 100%;
height: 4rem;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
margin: 1rem;

@media(max-width: 450px) {
  margin: 1.1rem;
}
`
export const FormName = styled.label`
color: white;
font-weight: bold;
position:relative;
margin-bottom: 0.5rem;
height: 1.3rem;


::after {
  content: '';
  width: 5vw;
  height: 4px;
  background: orange;
  display: block;
  position: absolute;
  top: 100;
  margin-left: 1rem;
}
`
export const ErrorImput = styled.span`
color: red;
font-size: 1rem;
height: 1rem;
`

export const FormInput = styled.input`
  width: 100%;
  height: 5rem;
  font-size: 2rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  padding-left: 1rem;
`
export const SubmitContainer = styled.div`
width: 100%;
height: 2rem;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;

@media(max-width: 1050px) {
  flex-direction: column;
  gap:0.5rem;
}
`
export const SubmitBtn = styled.button`
width: 8rem;
height: 2rem;
font-size: 1rem;
font-weight: bold;
border-radius: 2rem;
background-color: orange;
border: none;
outline: none;

:hover{
  margin-top: 1vw;
  cursor: pointer;
}
`
