import React from 'react'
import LeftSide from '../Components/signUpAndLogin/LeftSide'
import RightSide from '../Components/signUpAndLogin/RightSide'
import RightSideLogin from '../Components/signUpAndLogin/RightSideLogin'

const Login = () => {
  return (
   <>
    <section className='flex'>
    <LeftSide src="https://res.cloudinary.com/dqlryem36/image/upload/v1738683368/shopping_ugxqkm.png" />
    <RightSideLogin/>
    </section>
   </>
)
}

export default Login