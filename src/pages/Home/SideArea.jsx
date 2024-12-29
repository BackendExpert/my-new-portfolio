import React from 'react'
import { FaDownload, FaLinkedin, FaFacebookSquare, FaGithub, FaWhatsapp  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const SideArea = () => {
  return (
    <div className='w-full bg-[#252531] rounded-md'>
        <div className="py-4">
            <center className='py-4'>
                <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className='h-32 w-auto rounded-full'/>
            </center>
            <div className="text-center">
                <h1 className="font-semibold uppercase title">Jehan Weerasuriya</h1>
                <p className="pt-4 px-6 text-gray-400">
                    Fullstack Developer | NPM & VSCode Extension Innovator | Volunteer Research Assistant
                </p>
            </div>
        </div>

        <hr className='border border-[#ffc107]'/>

        <div className="">
            <div className="px-10 py-4">
                <div className="flex justify-between my-4">
                    <p className="">Residence:</p>
                    <p className="text-gray-400">Sri Lanka</p>
                </div>
                <div className="flex justify-between my-4">
                    <p className="">City:</p>
                    <p className="text-gray-400">Kandy</p>
                </div>
                <div className="flex justify-between my-4">
                    <p className="">Age:</p>
                    <p className="text-gray-400">24</p>
                </div>
            </div>
        </div>

        <hr className='border border-[#ffc107]'/>

        <div className="py-4 px-10">
            <div className="flex my-4">
                <FaLinkedin className='h-6 w-auto'/>
                <a href="https://www.linkedin.com/in/jehanweerasuriya/" target='_blank'><h1 className="pl-2 text-gray-400 duration-500 hover:text-[#ffc107]">Jehan Weerasuriya</h1></a>
            </div>
            <div className="flex my-4">
                <FaGithub className='h-6 w-auto'/>
                <a href="https://github.com/BackendExpert" target='_blank'><h1 className="pl-2 text-gray-400 duration-500 hover:text-[#ffc107]">github.com/BackendExpert</h1></a>
            </div>
            <div className="flex my-4">
                <FaGithub className='h-6 w-auto'/>
                <a href="https://github.com/JehanKandy" target='_blank'><h1 className="pl-2 text-gray-400 duration-500 hover:text-[#ffc107]">github.com/JehanKandy</h1></a>
            </div>
            <div className="flex my-4">
                <FaFacebookSquare className='h-6 w-auto'/>
                <a href="https://www.facebook.com/kandy.jehan/" target='_blank'><h1 className="pl-2 text-gray-400 duration-500 hover:text-[#ffc107]">Jehan Weerasuriya</h1></a>
            </div>
            <div className="flex my-4">
                <FaWhatsapp className='h-6 w-auto'/>
                <a href="https://wa.me/+94711758851" target='_blank'><h1 className="pl-2 text-gray-400 duration-500 hover:text-[#ffc107]">+94 711758851</h1></a>
            </div>
            <div className="flex my-4">
                <SiGmail className='h-6 w-auto'/>
                <a href="mailto:jehankandy@gmail.com" target='_blank'><h1 className="pl-2 text-gray-400 duration-500 hover:text-[#ffc107]">jehankandy@gmail.com</h1></a>
            </div>
        </div>

        <hr className='border border-[#ffc107]'/>

        <div className="py-4 px-10">
            <div className="flex cursor-pointer">
                <h1 className="uppercase tracking-widest font-semibold text-gray-400 duration-500 hover:text-white">download cv</h1>
                <p className="pt-1 pl-2"><FaDownload className='h-4 w-auto fill-gray-400'/></p>
            </div>
        </div>
    </div>
  )
}

export default SideArea