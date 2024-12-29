import React from 'react'
import CountUp from 'react-countup'

const CardData = () => {
    const cardData = [
        {
            id: 1,
            name: 'Years Experience',
            data: <CountUp end={5} />,
        },
        {
            id: 2,
            name: 'Projects',
            data: <CountUp end={10} />,
        },
        {
            id: 3,
            name: 'NPM Packages',
            data: <CountUp end={4} />,
        },
        {
            id: 4,
            name: 'VS Code Extensions',
            data: <CountUp end={5} />,
        }
    ]
  return (
    <div>
        <div className="md:grid grid-cols-4 gap-4 px-16 py-12">
            {
                cardData.map((item, index) => {
                    return (
                        <div className="flex" key={index}>
                            <h1 className="text-3xl font-semibold text-[#ffc107]">{item.data}+</h1>
                            <p className="pl-2 pt-2">{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CardData