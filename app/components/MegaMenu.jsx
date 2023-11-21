import React from 'react'
import MenuList from './sparePart/MenuList'
import NavFooter from './sparePart/NavFooter'
const MegaMenu = ({ value, footer }) => {
     const industries = value?.StackTitle || ''
     return (
          <div className="absolute inset-x-0 shadow-xl bg-white  mx-auto mt-12  rounded-lg rounded-t-none">
               <div className="grid grid-cols-4  w-2/3 mx-auto">
                    {value.map((value) => (
                         <>
                              <MenuList value={value} />
                         </>
                    ))}
               </div>
               <div className='bg-[#E76967]'>
               <div className='w-4/5 mx-auto py-5'>
               <NavFooter footer={footer} />
               </div>
               </div>
          </div>
     )
}

export default MegaMenu
