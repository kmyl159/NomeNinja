import Form from '../Components/form'
import {
  Background,
} from '../styles/home'
import GlobalCSS from '../styles/global'


const Home = ()=>{
  return(
    <>
      <GlobalCSS />
      <Background>
          <Form />
      </Background>
    </>
  )
}

export default Home