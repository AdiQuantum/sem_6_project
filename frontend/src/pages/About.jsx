import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo placeat ipsum quasi totam reiciendis alias pariatur laudantium veniam consequatur incidunt, praesentium eius cumque magnam repellat magni ut, in necessitatibus velit?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi error accusamus praesentium quibusdam culpa dolor est vel deleniti explicabo maiores optio corporis animi minus, possimus expedita earum quo a atque!
          Cumque, eligendi aliquid enim dolorem ab nesciunt magni, similique quidem exercitationem iusto sed ea explicabo quasi recusandae corrupti eum natus saepe voluptatum, deserunt et cum necessitatibus temporibus eaque. Veniam, facilis!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem omnis possimus excepturi molestias modi unde mollitia, nisi aperiam porro tempore temporibus cupiditate illo accusamus! Harum, a. Rerum, enim ipsum.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit id eveniet voluptate, nihil libero quas perspiciatis. Tenetur, iure ratione excepturi accusantium quasi deleniti cum, atque, iste minus doloribus impedit provident.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit id eveniet voluptate, nihil libero quas perspiciatis. Tenetur, iure ratione excepturi accusantium quasi deleniti cum, atque, iste minus doloribus impedit provident.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit id eveniet voluptate, nihil libero quas perspiciatis. Tenetur, iure ratione excepturi accusantium quasi deleniti cum, atque, iste minus doloribus impedit provident.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
