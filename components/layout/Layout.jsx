import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full relative  mx-auto max-w-[1400px]'>
        {children}
    </div>
  )
}

export default Layout