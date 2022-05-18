import Form from '../Components/form'
import MyImage from '../Components/image'
import {
  Background,
} from '../styles/home'
import GlobalCSS from '../styles/global'


const Home = ()=>{
  return(
    <>
      <GlobalCSS />
      <Form />
      <MyImage />
    </>
  )
}

export default Home