import React from 'react'
import NoImg from '../../assets/ImageNo.png'

const Experience = () => {
    const job = [
      {
        id: 1,
        post: 'Founder and Developer',
        name: 'JKCSS - CSS Framework',
        date: 'May 2023 - Present',
        img: 'https://avatars.githubusercontent.com/u/139304882?s=200&v=4',
        desc: 'Created and maintain South Asia’s first CSS framework, now in its 6th major public release. Leading the development of South Asian first Git platform, expected to take 3–4 years for its first public release. Managing overall development, vision, and team coordination to ensure innovative and efficient product design.'
      },
      {
        id: 2,
        post: 'Founder and Developer',
        name: 'CoconutDB',
        date: 'November 2024 - Present',
        img: 'https://avatars.githubusercontent.com/u/189954645?s=200&v=4',
        desc: 'Developing Coconut DB, a NoSQL document-oriented database designed for flexible and scalable data storage. The database aims to provide a lightweight solution for managing structured and semi-structured data with ease.'
      },
      {
        id: 3,
        post: 'Owner and CEO',
        name: 'JehanKandy Photography',
        date: 'September 2024 - Present',
        img: '../../assets/ImageNo.png',
        desc: 'Specializing in portrait photography using a Sony A6400.'
      },
      {
        id: 4,
        post: 'Volunteer Research Assistant and Software Development Intern',
        name: 'National Institute of Fundamental Studies',
        date: 'January 2024 - October 2024',
        img: 'https://media.licdn.com/dms/image/v2/C510BAQErFzbLAk27gg/company-logo_100_100/company-logo_100_100/0/1630595150759/nifslk_logo?e=1743638400&v=beta&t=3Ws_0gWgIel24A2z4dwtV7dWFLlogxC0lT-Dms3jPsg',
        desc: 'Assisting in research projects and Developing Systems.'
      }
    ]
  return (
    <div className='my-4'>
        <h1 className="text-2xl font-semibold text-[#ffc107]">Experience</h1>

        <div className="">
            <div className="md:grid grid-cols-3 gap-3 my-4">
                {
                    job.map((data, index) => {
                        return (
                            <div className="bg-[#252531] py-4 px-6">
                                <center className='py-4'>
                                    <img src={data.img} alt="" className='h-24 w-auto rounded-full'/>
                                </center>
                                <div className="text-center">
                                    <h1 className="font-semibold text-lg">{data.name}</h1>
                                    <p className="text-sm text-[#ffc107]">{data.post}</p>

                                    <div className="py-4">
                                        {data.date}
                                    </div>
                                    <div className="py-4">
                                        {data.desc}
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Experience