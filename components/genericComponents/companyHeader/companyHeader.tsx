import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const CompanyHeader = () => {

    const params = useParams()

    return (
        <div className='relative mb-4'>
            <Image src={'/images/company-cover.jpg'} alt='coverImage' height={100} width={100} className='w-full h-24 border' />
            <div className='absolute left-4 bottom-4 rounded-sm flex items-center'>
                <Image src={'/images/google-logo.png'} alt='company logo' className='w-14 h-14 shadow bg-white' height={100} width={100} />
                <div className='ms-2 font-bold uppercase'>{params?.companyHandle}</div>
            </div>
        </div>
    )
}

export default CompanyHeader