import React from 'react';

const Home = () => {
    return (
        <div className='bg-[#18191b] min-h-screen w-full'>
            <div className="bg-[#212223] shadow-md">
                <div className="w-[93%] m-auto py-3">
                    <div className="flex justify-between items-center">
                        <div className="w-[80px] h-[48px]">
                            <img src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" alt="" className='w-full h-full' />
                        </div>

                        <div className="flex gap-4">
                            <button className="py-2 w-[80px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium cursor-pointer">Sign up</button>
                            <button className="py-2 w-[80px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium cursor-pointer">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full justify-center items-center p-4">
                <div className="py-[170px] flex justify-center items-center flex-col gap-6">
                    <h2 className='text-5xl text-[#c7c5c5] font-bold'>What you will design today ?</h2>
                    <span className='text-[#aca9a9] text-2xl font-medium'>Canvas make it easy to create and share professional design.</span>
                    <button className="py-2 w-[200px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium cursor-pointer">Sign up for free</button>
                </div>
            </div>
        </div>
    );
};

export default Home;