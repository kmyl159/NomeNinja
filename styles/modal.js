import styled from 'styled-components'

export const MaskBackground = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0,0.5);
position: absolute;
z-index: 1;
top: 0;
left: 0;

display: flex;
justify-content: center;
align-items: center;
`
export const Container = styled.div`
width: 50vw;
height: auto;
padding: 2rem;
background-color: green;
text-align: center;
border-radius: 2rem;
position: absolute;
top:50%;
left:50%;
z-index: 2;
transform: translate(-50%,-50%);
display:flex;
align-items:center;
justify-content:center;
`

export const Text = styled.h2`
color: whitesmoke;
`


