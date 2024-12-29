import React from 'react'
import SideArea from './SideArea'
import MainContent from './MainContent'
import './style.css'

const HomePage = () => {
  return (
<div className=' site-bg px-4 md:px-40 text-white py-8'>
  <div className="md:flex">
    <div className="w-full md:w-1/4">
      <SideArea />
    </div>
    <div className="w-full md:ml-4 my-4 md:my-0">
      <div className="overflow-y-auto max-h-screen scrollbar-hide">
        <MainContent />
      </div>
    </div>
  </div>
</div>


  )
}

export default HomePage