import React from 'react'

const Button = ({ btnvale, onClick}) => {
  return (
    <button className='bg-[#ffc107] py-2 px-4 text-black rounded-md duration-500 hover:ml-2' onClick={onClick}>
        {btnvale}
    </button>
  )
}

export default Button