import React from 'react'

const Achievements = () => {
    const achivment = [
        {
            id: 1,
            name: 'CoconutDB',
            desc: 'The South Asian First NoSQL document oriented database program. Updating with Web Interface and Windows supprot Application',            
        },
        {
            id: 2,
            name: 'JKCSS - CSS Framework',
            desc: 'The South Asian CSS Framework and as well as React support CSS Framework ReactJKCSS and also React Icons',            
        },
        {
            id: 3,
            name: 'Node Package Managers',
            desc: 'Developing more than 5 Npm Packages to help for Developers',            
        },
        {
            id: 4,
            name: 'Visual Studio Code Extensions',
            desc: 'Developing more than 4 Visual Studio Code Extensions',            
        },
        {
            id: 5,
            name: 'TestAPIze - API Development and Testing Tool',
            desc: 'Developing and maintain the API Development and Testing Tool like PostMan using ElectronJS',            
        },

    ]
  return (
    <div className='my-4'>
        <h1 className="text-2xl font-semibold text-[#ffc107]">Achievements</h1>
        <div className="">
            {
                achivment.map((item, index) => {
                    return (
                        <div className="md:flex bg-[#252531] my-4 py-6 pl-4" key={index}>
                            <div className="">
                                <img src="https://img.icons8.com/?size=48&id=kuU7I7uPlHfo&format=png" alt="" className='h-20 w-auto'/>
                            </div>
                            <div className="pl-4">
                                <h1 className="font-semibold text-lg text-[#ffc107]">{item.name}</h1>
                                <p className="pt-2">{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Achievements