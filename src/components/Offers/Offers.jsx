import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
      return (
            <div className="offers w-[80%] h-[60vh] mt-6 flex m-auto pt-0 pb-0 pl-[140px] pr-[140px] bg-gradient-to-r from-red-400 md:from-red-300 rounded">
                  <div className="offers left flex-1 flex flex-col justify-center">
                        <h1 className="text-[#171717] text-5xl font-semibold">Exclusive</h1>
                        <h1>Offers For You</h1>
                        <p className="text-[#171717] text-2xl font-semibold">
                              Only ON Best Sellers Products
                        </p>
                        <button className='w-[180px] h-[45px] rounded-full border-none text-white text-lg font-medium mt-7 cursor-pointer bg-red-500'>Check Now</button>
                  </div>
                  <div className="offers-right flex flex-1 items-center justify-end pt-8">

                        <img src={exclusive_image} alt="" width={300} />
                  </div>
            </div>
      );
};

export default Offers;
