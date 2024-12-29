import React from 'react'
import SideArea from './SideArea'
import MainContent from './MainContent'

const HomePage = () => {
  return (
    <div className='min-h-screen site-bg px-4 md:px-40 text-white py-8'>
        <div className="flex">
            <div className="w-full md:w-1/4">
                <SideArea />
            </div>
            <div className="w-full">
                <MainContent />
            </div>
        </div>
    </div>
  )
}

export default HomePage