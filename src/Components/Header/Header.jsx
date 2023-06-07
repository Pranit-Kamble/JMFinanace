import React from 'react'
import './Header.css'

const Header = () => {
    const handleSubmit=()=>{
        alert('Register Sucessfully')
    }
  return (
    <div className='header'>
        <div className='header-con'>
        <div className='icon'></div>
        <div className='header-box'>
            <div className='img'></div>
            <form onSubmit={handleSubmit} action="">
                <input required type="text" placeholder='Name'/>
                <input required type="number" placeholder='Mo.number'/>
                <input required type="email" placeholder='Email'/>
                <select required name="" id="">
                    <option value="" disabled selected>City</option>
                    <option value="">India</option>
                    <option value="">USA</option>
                    <option value="">UK</option>
                </select>
                <select required name="" id="">
                    <option value="" disabled selected>Product Type</option>
                    <option value="">Type1</option>
                    <option value="">Type2</option>
                    <option value="">Type3</option>
                </select>
                <button>REGISTER NOW</button>
            </form>
        </div>
    </div>
    <div className='header-box2'>
    With JM Financial Services (JMFS), you can make your porfolio win by playing strokes that help ypu to both score runs and remain invested in the right opportunities .
    </div>
    </div>
  )
}

export default Header