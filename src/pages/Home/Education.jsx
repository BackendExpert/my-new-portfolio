import React from 'react'

const Education = () => {
    const education = [
        {
            id: 1,
            name: `St Sylvester's College`,
            qulification: 'Primary and Secondary Education',
            date: '2006 - 2020',
            desc: 'Advanced Level in Technology',
            img: 'https://upload.wikimedia.org/wikipedia/si/thumb/d/dc/St._Sylvester%27s_College.png/120px-St._Sylvester%27s_College.png'
        },
        {
            id: 2,
            name: 'Sri Lanka International Buddhist Academy (SIBA Campus)',
            qulification: 'BSc in Information Technology',
            date: 'Oct-2021 to Auguest 2024',
            desc: 'The education institute of Sri Dalada Maligawa',
            img: 'https://media.licdn.com/dms/image/v2/C4E0BAQFlyf-lGV8CwA/company-logo_200_200/company-logo_200_200/0/1631304536997?e=1743638400&v=beta&t=awDzpVekufqb1jo9OEHDBaG6gaIoQ3Y9xsT9y18vUF4'
        },
        {
            id: 3,
            name: 'Sri Lanka Institute of Tourism & Hotel Management',
            qulification: 'Foundation in Pastry and Bakery',
            date: 'Oct-2023 to Dec-2023',
            desc: 'Foundation in Pastry and Bakery',
            img: 'https://media.licdn.com/dms/image/v2/C4E0BAQF5coLdyzBb1g/company-logo_100_100/company-logo_100_100/0/1630648837019?e=1743638400&v=beta&t=YPP13l24R1QEfcuPcZUJ96t-Aak5rUaec-J3MKjteNk'
        },
        {
            id: 4,
            name: 'CCBS Campus',
            qulification: 'Varieties of Pizza',
            date: 'Dec 2024',
            desc: 'Varieties of Pizza',
            img: 'https://media.licdn.com/dms/image/v2/D560BAQH0wRlA73uF3A/company-logo_100_100/company-logo_100_100/0/1693291268306?e=1743638400&v=beta&t=MWwW29Mu8571wcbNvgivrREmOPYE0iIXOYi7fNB2IPM'
        },
    ]
  return (
        <div className='my-4'>
            <h1 className="text-2xl font-semibold text-[#ffc107]">Education</h1>
        <div className="">
            <div className="md:grid grid-cols-3 gap-3 my-4">
                {
                    education.map((item, index) => {
                        return (
                            <div className="bg-[#252531] py-4 px-6">
                                <center className='py-4'>
                                    <img src={item.img} alt="" className='h-24 w-auto rounded-full'/>
                                </center>
                                <div className="text-center">
                                    <h1 className="font-semibold text-lg">{item.name}</h1>
                                    <p className="text-sm text-[#ffc107]">{item.qulification}</p>

                                    <div className="py-4">
                                        {item.date}
                                    </div>
                                    <div className="py-4">
                                        {item.desc}
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

export default Education