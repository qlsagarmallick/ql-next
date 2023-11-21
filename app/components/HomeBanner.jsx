'use client'
import React from 'react'
import Image from 'next/image'

const HomeBanner = ({ data }) => {
     // banner data extraction
     const banner = data?.data?.attributes?.Banner || {}
     // console.log('banner', banner)
     const bannerImage =
          'http://127.0.0.1:1337' +
               banner?.BannerImage?.data?.attributes?.url || {}
     const projectsImage = banner?.ProjectsImage?.data

     // console.log('image', bannerImage)
     return (
          <div className='hidden'>
               <h1>{`Title: ${banner.Title}`}</h1>
               <h3>{`Description: ${banner.Description}`}</h3>
               <Image width={500} height={500} alt="auto" src={bannerImage} />
               <div className="flex">
                    {projectsImage.map((images, index) => (
                         <div key={index}>
                              <Image
                                   width={100}
                                   height={10}
                                   alt="auto"
                                   src={
                                        'http://127.0.0.1:1337' +
                                             images?.attributes?.url || ''
                                   }
                              />
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default HomeBanner
