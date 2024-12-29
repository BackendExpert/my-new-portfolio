import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Button from '../../components/Button/Button';
import CardData from './CardData';
import AboutMe from './AboutMe';

const MainContent = () => {


  return (
    <div className="">
        <div className="relative">
            <div className="bg-[url(https://wallpapercave.com/wp/wp8437461.jpg)] p-4 h-96 bg-center bg-cover rounded-md">
                <div className="absolute inset-0 bg-gradient-to-t from-[#191923] to-[#191923]/50 opacity-90 z-10"></div>
                <div className="relative z-20 text-white mt-32">
                    <h1 className="text-2xl md:text-5xl leading-tight italic">Discover my Amazing <br /> Projects</h1>
                    <p className="text-sm text-[#ffc107] mt-4">
                        <TypeAnimation
                            sequence={[
                                'I Build MERN Stack + MVC App',
                                1000, 
                                'I Build Desktop applications using ElectronJS',
                                1000,
                                'I Build Mobile App using React Native + Expo',
                                1000,
                                'I Build NPM Packages',
                                1000,
                                'I Build Visual Studio Code Extensions',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </p>

                    <div className="mt-4">
                        <Button btnvale={'Explore More'}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <CardData />
        </div>
        <div className="">
            <AboutMe />
        </div>
    </div>


  )
}

export default MainContent