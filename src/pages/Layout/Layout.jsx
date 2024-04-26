import React from 'react'
import Naveber from '../../components/Navber/Naveber'
import Footer from '../../components/Footer/Footer'

const Layout = ({Childrens}) => {
  return (
    <>
        <Naveber/>
            <div className='content'>
                {Childrens}
            </div>
        <Footer/>
    </>
  )
}

export default Layout