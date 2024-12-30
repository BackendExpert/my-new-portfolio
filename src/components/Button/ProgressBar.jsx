import React from 'react'

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded-lg h-1">
      <div
        className="bg-[#ffc107] h-1 rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar