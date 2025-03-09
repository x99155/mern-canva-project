import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const Home = () => {

    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const inputHandle = (e) => {
        // e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    console.log(form);

    return (
        <div className='bg-[#18191b] min-h-screen w-full'>

            <div className={`w-screen ${showSignIn ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}>

                <div className="w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative">
                    <div className='absolute right-4 top-4 text-xl cursor-pointer text-white' onClick={() => setShowSignIn(false)}><RxCross2 /></div>
                    <h2 className='text-white pb-4 text-center text-xl'>Sign in</h2>
                    <form >
                        <div className="flex flex-col gap-3 mb-3 text-white">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='Type your email' 
                                className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent'
                                value={form.email} onChange={inputHandle}/>
                        </div>

                        <div className="flex flex-col gap-3 mb-3 text-white">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder='Type your password' 
                                className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent'
                                value={form.password} onChange={inputHandle}/>
                        </div>

                        <div>
                            <button className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className={`w-screen ${showSignUp ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}>

                <div className="w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative">
                    <div className='absolute right-4 top-4 text-xl cursor-pointer text-white' onClick={() => setShowSignUp(false)}><RxCross2 /></div>
                    <h2 className='text-white pb-4 text-center text-xl'>Sign up</h2>
                    <form >
                        <div className="flex flex-col gap-3 mb-3 text-white">
                            <label htmlFor="name">Name</label>
                            <input type="name" name="name" id="name" placeholder='Type your name' 
                                className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent'
                                value={form.name} onChange={inputHandle}/>
                        </div>

                        <div className="flex flex-col gap-3 mb-3 text-white">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='Type your email' 
                                className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent'
                                value={form.email} onChange={inputHandle}/>
                        </div>

                        <div className="flex flex-col gap-3 mb-3 text-white">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder='Type your password' 
                                className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent'
                                value={form.password} onChange={inputHandle}/>
                        </div>

                        <div>
                            <button className="px-3 py-2 rounded-md bg-teal-700 w-full outline-none hover:bg-teal-600 text-white">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>



            <div className="bg-[#212223] shadow-md">
                <div className="w-[93%] m-auto py-3">
                    <div className="flex justify-between items-center">
                        <div className="w-[80px] h-[48px]">
                            <img src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" alt="" className='w-full h-full' />
                        </div>

                        <div className="flex gap-4">
                            <button className="py-2 w-[80px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium cursor-pointer" onClick={() => setShowSignUp(true)}>Sign up</button>
                            <button className="py-2 w-[80px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium cursor-pointer" onClick={() => setShowSignIn(true)}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full justify-center items-center p-4">
                <div className="py-[170px] flex justify-center items-center flex-col gap-6">
                    <h2 className='text-5xl text-[#c7c5c5] font-bold'>What you will design today ?</h2>
                    <span className='text-[#aca9a9] text-2xl font-medium'>Canvas make it easy to create and share professional design</span>
                    <button className="py-2 w-[200px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium cursor-pointer" onClick={() => setShowSignUp(true)}>Sign up for free</button>
                </div>
            </div>
        </div>
    );
};

export default Home;