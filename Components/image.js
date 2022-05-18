import Image from 'next/image'
import mypic from '../public/img/background.jpg'
const MyImage = (props) => {
  return (
    <Image
      src={mypic}
      layout="fill"
    />
  )
}
export default MyImage