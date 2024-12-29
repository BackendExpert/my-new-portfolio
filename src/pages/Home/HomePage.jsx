import React from 'react'
import SideArea from './SideArea'

const HomePage = () => {
  return (
    <div className='min-h-screen site-bg px-4 md:px-40 text-white py-8'>
        <div className="flex">
            <div className="w-full md:w-1/4">
                <SideArea />
            </div>
            <div className="w-full">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi consequuntur tempora necessitatibus cupiditate maiores magnam error perferendis blanditiis fugiat dignissimos enim, alias, reprehenderit asperiores officiis nam. Sit quos expedita iusto?
            </div>
        </div>
    </div>
  )
}

export default HomePage