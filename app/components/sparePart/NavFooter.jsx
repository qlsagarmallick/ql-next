import React from 'react'

const NavFooter = ({footer}) => {
  return (
    <div className='flex justify-between'>
    <div className='text-white'>
    <p>{footer?.Title}</p>
    <p>{footer?.Email}</p>
    </div>
    <div className='flex gap-12 text-white items-center'>
        <p>{footer?.SocialLink1}</p>
        <p>{footer?.SocialLink2}</p>
        <p>{footer?.SocialLink3}</p>
        <p>{footer?.SocialLink4}</p>
    </div>
    </div>
  )
}

export default NavFooter