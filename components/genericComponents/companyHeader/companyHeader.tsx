import Image from 'next/image'
import React from 'react'

const CompanyHeader = () => {
    return (
        <div className='relative mb-4'>
            <Image src={'/images/bg-black.png'} alt='coverImage' height={100} width={100} className='w-full h-20 border' />
            <div className='absolute left-4 -bottom-4 shadow bg-white rounded-sm'><Image src={'/images/google-logo.png'} alt='company logo' className='w-14 h-14' height={100} width={100} /></div>
        </div>
    )
}

export default CompanyHeader