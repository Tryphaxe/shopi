import React from 'react'

const Bottom = () => {
  return (
    <div>
        <a href="#hero" className='shadow-md md:flex items-center justify-center p-3 bg-white mb-3 rounded-lg hidden md:absolute bottom-0 left-1/2 -translate-x-1/2'>
            <i className="fa-solid fa-chevron-down fa-bounce" style={{color: "orange"}}></i>
        </a>
    </div>
  )
}

export default Bottom
