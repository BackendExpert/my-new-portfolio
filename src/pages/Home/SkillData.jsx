import React from 'react'
import CountUp from 'react-countup'
import ProgressBar from '../../components/Button/ProgressBar'

const SkillData = () => {
    const dataskills = [
      {
        id: 1,
        name: 'MERN Stack (MongoDB, Express.js, React, Node.js)',
        value: <CountUp end={80} />,
        valueProgress: 80,
        desc: 'Experience: 1 year, advanced level. \n Projects: Multiple end-to-end applications, strong expertise.' 
      },
      {
        id: 2,
        name: 'React with Vite and Tailwind CSS',
        value: <CountUp end={85} />,
        valueProgress: 85,
        desc: 'Experience: Extensive, integrated in various projects.'
      },
      {
        id: 3,
        name: 'React Native',
        value: <CountUp end={75} />,
        valueProgress: 75,
        desc: 'Experience: Strong knowledge but fewer projects compared to MERN. \n '
      },
      {
        id: 4,
        name: 'Electron (Desktop Development)',
        value: <CountUp end={65} />,
        valueProgress: 65,
        desc: 'Experience: Successfully built desktop applications like TestAPIze.'
      },
      {
        id: 5,
        name: 'Electron (Desktop Development)',
        value: <CountUp end={65} />,
        valueProgress: 65,
        desc: 'Experience: Successfully built desktop applications like TestAPIze.'
      },
      {
        id: 6,
        name: 'Electron (Desktop Development)',
        value: <CountUp end={65} />,
        valueProgress: 65,
        desc: 'Experience: Successfully built desktop applications like TestAPIze.'
      },
      {
        id: 7,
        name: 'Spring Boot (Java)',
        value: <CountUp end={30} />,
        valueProgress: 30,
        desc: 'Proficiency Compared to MERN Stack: Significantly lower. \n Experience: 1 month, beginner level. \n Projects: Minimal exposure.' 
      },
    ]
  return (
    <div className='my-4'>
        <h1 className="text-2xl font-semibold text-[#ffc107]">Skills</h1>
        <div className="md:grid grid-cols-2 gap-4 my-4">
          {
            dataskills.map((item, index) => {
              return (
                <div className="bg-[#252531] py-6 px-4 md:my-0 my-4" key={index}>
                  <div className="flex justify-between">
                    <div className="text-[#ffc107] font-semibold">{item.name}</div>
                    <div className="text-xl text-[#ffc107] font-semibold">{item.value}%</div>
                  </div>
                  <div className="">
                    {item.desc}
                  </div>
                  <div className="mt-4">
                    <ProgressBar progress={item.valueProgress}/>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default SkillData