import React from 'react'
import Image from 'next/image'

const HomeBanner = ({data}) => {
    // banner data extraction 
    const banner=data?.data?.attributes?.Banner || {}
    console.log('banner', banner)
    const image= 'http://127.0.0.1:1337' + banner?.Image?.data?.attributes?.url || {}
    console.log('image', image)
  return (
    <div><h1>{`Title: ${banner.Title}`}</h1>
    <h3>{`Description: ${banner.Description}`}</h3>
    <Image width={500} height={500} alt='auto' src={image}/>
    </div>
  )
}

export default HomeBanner