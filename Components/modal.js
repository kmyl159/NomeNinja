import {
  MaskBackground,
  Container,
  Text
} from '../styles/modal'

const Modal = ({TouggleModal,Message})=>{
  return(
    <>
      <MaskBackground onClick={TouggleModal}/>
      <Container>
        <Text>{Message}</Text>  
      </Container>
    </>
  )
}

export default Modal