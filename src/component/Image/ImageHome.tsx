import React from 'react'
import { Card, Carousel } from "flowbite-react";
import Footer from '../Footer/Footer';

const ImageHome = () => {
  return (
    <div className='w-full h-full  2xl:h-96 mx-auto'>
      <Carousel slideInterval={5000} >
        <img className="rounded-none" src="https://www.agrivi.com/wp-content/uploads/2021/05/Greenhouse-Farming-Exceeds-Weather-Limitations-1200x565.jpg" alt="..." />
        <img className="rounded-none" src="https://delivery.bunningscontenthub.bunnings.com.au/api/public/content/5a57fb4c20cd4a1ab24e289cc92b6a55?v=9ab760c1" alt="..." />
        <img className="rounded-none" src="https://i.pinimg.com/736x/a0/68/2e/a0682ebae2666b9569973b9799f51f43.jpg" alt="..." />
        <img className="rounded-none" src="https://homesteadandchill.com/wp-content/uploads/2019/04/how-to-grow-basil-feature.jpeg" alt="..." />
        <img className="rounded-none" src="https://cdn.nyallergy.com/wp-content/uploads/square-1432664914-strawberry-facts1.jpeg" alt="..." />
      </Carousel>
      <div className="flex gap-4 ">
      <Card className="w-[700px] border-none ">
        <h1 className=" text-2xl font-medium text-gray-900 text-green-500">Welcome to our KaseApp</h1>
        <h1 className=" text-4xl font-medium text-gray-900 ">HEALTHY & QUALITY STANDARD FARM</h1>
        <p className="text-gray-500">Card content here.</p>
      </Card>
      <Card className="w-[600px] border-none ">
        
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Sed non risus vitae ante bibendum tincidunt. Morbi ultrices orci at felis facilisis, a feugiat lorem scelerisque.</p>
      </Card>
      
    </div>
    <div className='flex gap-4 py-4'>
    <div className="w-[425px]">
      <img
        src="https://extension.usu.edu/yardandgarden/images/peas-cropped.jpg"
        alt="Placeholder"
        className=" w-full h-60 rounded-lg"
      />
    </div>
    <div className="w-[425px]">
      <img
        src="https://nextcashandcarry.com.ng/wp-content/uploads/2022/06/celery-1535972131-4258796.jpeg"
        alt="Placeholder"
        className=" w-full h-60 rounded-lg"
      />
    </div>
    <div className="w-[425px]">
      <img
        src="https://www.123seeds.com/media/catalog/product/cache/2/thumbnail/488x/9df78eab33525d08d6e5fb8d27136e95/j/a/japanse_basilicum_shiso_groen_500_.jpg"
        alt="Placeholder"
        className=" w-full h-60 rounded-lg"
      />
    </div>
    </div>
    <div>
      <h1  className=" text-4xl font-medium text-gray-900 text-green-500 text-center">The farmer</h1>
      <h1  className=" text-2xl font-medium text-gray-900  text-center">Our Farmer</h1>
      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Sed non risus vitae ante bibendum tincidunt. Morbi ultrices orci at felis facilisis, a feugiat lorem scelerisque.</p>
    </div>
    <div className='flex gap-4 py-4'>
    <div className="w-[425px]">
      <img
        src="https://i.pinimg.com/564x/f8/f4/8a/f8f48a3f0405737c02f52a030e9cb224.jpg"
        alt="Farmer"
        className=" w-full h-50 rounded-lg"
      />
      <div className=' flex justify-center text-center py-4'>
        <h5 className="w-60 h-20 bg-green-800 text-white px-4 py-2 rounded-md inline-block ">Farmer 1 </h5>
      </div>
    </div>
    <div className="w-[425px] ">
      <img
        src="https://i.pinimg.com/1200x/41/aa/03/41aa0307f0f8a5c41483d104a5d3c6a8.jpg"
        alt="Farmer"
        className=" w-full h-50 rounded-lg"
      />
       <div className=' flex justify-center text-center py-4'>
        <h5 className="w-60 h-20 bg-green-800 text-white px-4 py-2 rounded-md inline-block ">Farmer 2 </h5>
      </div>
    </div>
    <div className="w-[425px]">
      <img
        src="https://i.pinimg.com/564x/de/17/d5/de17d59a4ae56f3c832873a5c0e7dd9e.jpg"
        alt="Farmer"
        className=" w-full h-50 rounded-lg"
      />
       <div className=' flex justify-center text-center py-4'>
        <h5 className="w-60 h-20 bg-green-800 text-white px-4 py-2 rounded-md inline-block ">Farmer 2 </h5>
      </div>
    </div>
    </div>
   <div className='py-20'>
    <Footer/>
   </div>
    </div>
  )
}

export default ImageHome
