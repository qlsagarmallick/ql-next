import Link from 'next/link'
import React from 'react'

const MenuList = ({ value }) => {
     console.log('value', value)
     const industries = value?.StackTitle || ''
    //  console.log('indus', industries)

     if (industries === 'Industries') {
          return (
               <div className="py-4 flex flex-col gap-1">
                      <p className="font-bold my-2">{value.StackTitle}</p>
                    <div className='grid'>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List1}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List2}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List3}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List4}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List5}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List6}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List7}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List8}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List9}</p></Link>
                    </div>
               </div>
          )
     } else
          return (
               <div className="py-4 flex flex-col gap-1">
                    <p className="font-bold my-2">{value.StackTitle}</p>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List1}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List2}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List3}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List4}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List5}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List6}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List7}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List8}</p></Link>
                    <Link className='hover:text-violet-800 text-gray-700' href='#'> <p>{value.List9}</p></Link>
               </div>
          )
}

export default MenuList
