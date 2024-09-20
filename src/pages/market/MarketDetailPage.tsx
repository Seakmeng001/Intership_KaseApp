import { Button, Card } from 'flowbite-react';
import React from 'react';
import blueberry from "../../assets/blueberry.jpg"
import dragon from "../../assets/dragon.jpg" 
import grap from "../../assets/grap.webp"
import pumpkin from "../../assets/pumpkin.jpg" 
import papaya from "../../assets/papaya.jpg"
import rambuntan from "../../assets/rambuntan.jpg"
import mango from "../../assets/mango.webp" 
import plum from "../../assets/plum.jpg" 


const MarketDetailPage = () => {
  return (
    <div>
      <Card className="object-cover" imgSrc={dragon} horizontal>
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Dragon fruit
        </h5>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
          300/kg
        </p>
      </Card>

      <h1>Description</h1>
      <div className='py-4'>
        <p>
          Good quality cherry seeds are uniform in size, and plume, while poor quality seeds are discolored seeds are the foundation of any cherry.
        </p>
      </div>

      <div className="flex justify-center items-center ">
  <div className="flex flex-col sm:flex-row gap-20">
    <Card className="max-w-sm bg-red-300">
      <div className="flex justify-center items-center mb-4">
        <i className="fas fa-money-check-alt text-3xl text-green-600"></i>
      </div>
      <p className="text-center">Cost Efficient</p>
    </Card>
    
    <Card className="max-w-sm bg-red-300">
      <div className="flex justify-center items-center mb-4">
        <i className="fa-regular fa-star text-3xl text-green-600"></i>
      </div>
      <p className="text-center">High Quality</p>
    </Card>
    
    <Card className="max-w-sm bg-red-300">
      <div className="flex justify-center items-center mb-4">
        <i className="fa-regular fa-circle text-3xl text-green-600"></i>
      </div>
      <p className="text-center">Cost Efficient</p>
    </Card>
  </div>
</div>
<h5 className='py-4'>Related Products</h5>
<div className="flex flex-col sm:flex-row gap-4">
<Card>
<img src={dragon}/>
</Card>
 <Card>
 <img src={blueberry}/>
 </Card>
 <Card>
 <img src={grap}/>
 </Card>
 <Card>
 <img src={pumpkin}/>
 </Card>
 <Card>
 <img src={papaya}/>
 </Card>
 <Card>
 <img src={mango}/>
 </Card>
</div>


    </div>
  );
};

export default MarketDetailPage;
