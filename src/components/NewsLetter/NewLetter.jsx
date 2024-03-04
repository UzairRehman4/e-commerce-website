import './NewsLetter.css'

const NewsLetter = () => {
      return (
            <div className='NewLetter w-[75%] flex h-[40vh] flex-col items-center justify-center m-auto p-5 pb-5 pl-[140px] pr-[140px] mb-[140px] bg-gradient-to-r from-cyan-400 to-blue-400 gap-7 rounded-xl'>
                  <h1 className=' text-[45px] font-semibold'>Get Exclusive Offers On Your Email</h1>
                  <p className='text-[#454545] text-[20px]'>Subscribe to our newsletter and stay updated</p>
                  <div className='flex items-center justify-between bg-white w-[730px] h-[70px] border rounded-full '>
                        <input type="email" placeholder='Your Email id' className='w-[500px] ml-[30px]  border-none outline-none text-[#616161] font-poppins text-lg' />
                        <button className='w-[210px] h-[70px] rounded-full text-white text-lg cursor-pointer'>Subscribe</button>
                  </div>
            </div>

      )
}

export default NewsLetter