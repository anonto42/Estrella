import React from 'react'
import Naveber from '../../components/Navber/Naveber'
import Footer from '../../components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className=''>
        <Naveber/>
            <div className='relative'>
              {children}
            </div>
        <Footer/>
    </div>
  )
}

export default Layout