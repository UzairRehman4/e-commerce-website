import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
      return (
            <div className="hero flex bg-gradient-to-r from-red-300 md:from-red-200">
                  <div className="hero-left flex-1 flex-col justify-center gap-5 pl-36 leading-[1.1]  mt-24">
                        <h2>New Arrivals Only</h2>
                        <div>
                              <div className="hero-hand-icon">
                                    <p>new</p>
                                    <img src={hand_icon} alt="" />
                              </div>
                              <p>Collection</p>
                              <p>for everyone</p>
                        </div>
                        <div className="hero-latest-btn">
                              <div>Latest Collection</div>
                              <img src={arrow_icon} alt="" />
                        </div>
                  </div>
                  <div className="hero-right flex-1 items-center justify-center ">
                        <img src={hero_image} alt="" width={470} />
                  </div>
            </div>
      );
};

export default Hero;
