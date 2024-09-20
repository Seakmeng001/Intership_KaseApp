import React from "react";
import { Carousel, Card, Button } from "flowbite-react";
import orange1 from "../../assets/orange1.jpg";
import strawberry from "../../assets/strawberry.jpg";
import banana from "../../assets/banana.jpg";
import chhery from "../../assets/chhery.jpg"
import blueberry from "../../assets/blueberry.jpg"
import dragon from "../../assets/dragon.jpg" 
import grap from "../../assets/grap.webp"
import pumpkin from "../../assets/pumpkin.jpg" 
import papaya from "../../assets/papaya.jpg"
import rambuntan from "../../assets/rambuntan.jpg"
import mango from "../../assets/mango.webp" 
import plum from "../../assets/plum.jpg" 

const MarketPage: React.FC = () => {
  return (
    <div className=' '>
      <div className="w-full h-full 2xl:h-96 2xl:max-w-7xl object-cover mx-auto">
        <Carousel slide={false}>
          <img src="https://cdn.firstcry.com/education/2022/11/08143105/Green-Vegetables-Names-in-English-for-Kids.jpg" alt="..." />
          <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2023/07/fruits-and-vegetables.jpg?quality=82&strip=all&w=1200" alt="..." />
          <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FSeries%2F2019-07-snapshot-cooking-cucumber-salad-world-cuisines%2FCucumber-Salad_Shaved-cucumber-fennel-salad-olives-feta_015_b37f40-crop" alt="..." />
          <img src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22726_16560822540037952.jpg" alt="..." />
          <img src="https://www.thedailymeal.com/img/gallery/durian-fruit-has-an-infamous-smell-but-what-does-it-taste-like/l-intro-1691889621.jpg" alt="..." />
        </Carousel>
      </div>
      <div className="py-4">
        <h3>Trending products</h3>
      </div>
      <div className="flex flex-col sm:flex-row gap-12">
        <Card className="relative max-w-sm bg-red-100">
          <img src={orange1} alt="Orange" className="w-full h-40 object-cover" />
          <div className="absolute top-7 right-9 bg-cyan-300 p-1">
            <i className="fa-sharp fa-regular fa-bookmark text-cyan-800"></i>
          </div>
          <div className="flex justify-between mt-8">
            <h6>$4.5/Kg</h6>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                3.5
              </span>
            </div>
          </div>
          <a href="#">
            <h6 className="mt-4">Orange</h6>
          </a>
          <h6 className="text-gray-500 mt-2">Best selling product</h6>
          {/* <div className="flex justify-center ">
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div> */}
        </Card>

        <Card className="relative max-w-sm bg-red-100">
          <img src={strawberry} alt="Strawberry" className="w-full h-40 object-cover" />
          <div className="absolute top-7 right-9 bg-cyan-300 p-1 ">
            <i className="fa-sharp fa-regular fa-bookmark text-cyan-800"></i>
          </div>
          <div className="flex justify-between mt-8">
            <h6>$20/Kg</h6>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                5.0
              </span>
            </div>
          </div>
          <a href="#">
            <h6 className="mt-4">Strawberry</h6>
          </a>
          <h6 className="text-gray-500 mt-2">Best selling product</h6>
          {/* <div className="flex justify-center ">
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div> */}
        </Card>

        <Card className="relative max-w-sm bg-red-100">
          <img src={banana} alt="Banana" className="w-full h-40 object-cover" />
          <div className="absolute top-7 right-9 bg-cyan-300 p-1 ">
            <i className="fa-sharp fa-regular fa-bookmark text-cyan-800"></i>
          </div>
          <div className="flex justify-between mt-8">
            <h6>$4.5/Kg</h6>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                3.5
              </span>
            </div>
          </div>
          <a href="#">
            <h6 className="mt-4">Banana</h6>
          </a>
          <h6 className="text-gray-500 mt-2">Best selling product</h6>
          {/* <div className="flex justify-center ">
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div> */}
        </Card>
        <Card className="relative max-w-sm bg-red-100">
          <img src={chhery} alt="Banana" className="w-full h-40 object-cover" />
          <div className="absolute top-7 right-9 bg-cyan-300 p-1 ">
            <i className="fa-sharp fa-regular fa-bookmark text-cyan-800"></i>
          </div>
          <div className="flex justify-between mt-8">
            <h6>$4.5/Kg</h6>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                3.5
              </span>
            </div>
          </div>
          <a href="#">
            <h6 className="mt-4">Chhery</h6>
          </a>
          <h6 className="text-gray-500 mt-2">Best selling product</h6>
          {/* <div className="flex justify-center ">
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div> */}
        </Card>
       
      </div>
      <div className="py-4 flex justify-between">
      <h3>Market View</h3>
      <h6 className="text-gray-500"> View all</h6>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
      <Card className="bg-red-100 object-cover" imgSrc={blueberry} horizontal style={{ maxWidth: '400px' }}>
  
  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
    Blueberry
  </h5>
  <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
    200/kg
  </p>

</Card>
<Card className="bg-red-100 object-cover" imgSrc={dragon} horizontal style={{ maxWidth: '400px' }}>
  
 <a href="market_detail">
 <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
    Drangon fruit
  </h5>
 </a>
  <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
    300/kg
  </p>

</Card>
<Card className="bg-red-100 object-cover" imgSrc={grap} horizontal style={{ maxWidth: '420px' }}>
  
  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
    Grape
  </h5>
  <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
    620/kg
  </p>

</Card>
<Card className="bg-red-100 object-cover" imgSrc={pumpkin} horizontal style={{ maxWidth: '400px' }}>
  
  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
    Pumpkin
  </h5>
  <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
    123/kg
  </p>

</Card>

      </div>

      <div className="py-4 flex justify-between">
      <h3>Local Demand</h3>
      <h6 className="text-gray-500"> View all</h6>
      </div>
      <div className="flex flex-col sm:flex-row gap-12">

      </div>
     <div className="flex flex-col sm:flex-row gap-12">
     <Card className="relative max-w-sm bg-red-100">
          <img src={mango} alt="Mango" className="w-full h-40 object-cover" />
          <div className="absolute top-7 right-9 bg-cyan-300 p-1 ">
            <i className="fa-sharp fa-regular fa-bookmark text-cyan-800"></i>
          </div>
          <a href="#">
          <h6>Mango</h6>
          
          
          </a>
          <h6 className="text-gray-500 mt-2">Jan,03,2024</h6>
          <Button outline gradientDuoTone="greenToBlue">
        <h4 className="text-green-500">.Priority</h4>
      </Button>
            
          
         
          
        </Card>
        <Card className="relative max-w-sm bg-red-100">
          <img src={papaya} alt="Papaya" className="w-full h-40 object-cover" />
          <div className="absolute top-7 right-9 bg-cyan-300 p-1 ">
            <i className="fa-sharp fa-regular fa-bookmark text-cyan-800"></i>
          </div>
          <a href="#">
          <h6>Papaya</h6>
          
          
          </a>
          <h6 className="text-gray-500 mt-2">Jan,03,2024</h6>
          <Button outline gradientDuoTone="pinkToOrange">
        <h4 className="text-red-500">.Medium</h4>
      </Button>
            
          
         
          
        </Card>
        <Card className="relative max-w-sm bg-red-100">
          <img src={plum} alt="Plum" className="w-full h-40 object-cover" />
          <div className="absolute top-7 right-9 bg-cyan-300 p-1 ">
            <i className="fa-sharp fa-regular fa-bookmark text-cyan-800"></i>
          </div>
          <a href="#">
          <h6>Plum</h6>
          
          
          </a>
          <h6 className="text-gray-500 mt-2">Jan,03,2024</h6>
          <Button outline gradientDuoTone="redToGray">
        <h4 className="text-gray-500">.Low</h4>
      </Button>
            
          
         
          
        </Card>
        <Card className="relative max-w-sm bg-red-100">
          <img src={ rambuntan} alt="Rambuntan" className="w-full h-40 object-cover" />
          <div className="absolute top-7 right-9 bg-cyan-300 p-1 ">
            <i className="fa-sharp fa-regular fa-bookmark text-cyan-800"></i>
          </div>
          <a href="#">
          <h6>Rambuntan</h6>
          
          
          </a>
          <h6 className="text-gray-500 mt-2">Jan,03,2024</h6>
          <Button outline gradientDuoTone="greenToBlue">
        <h4 className="text-green-500">.Priority</h4>
      </Button>
            
          
         
          
        </Card>
         
     </div>
    </div>
  );
};

export default MarketPage;
