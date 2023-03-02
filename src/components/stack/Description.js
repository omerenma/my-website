import React, {useState} from 'react'
import './stack.css'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
const Description = ({title, description}) => {
    const [open, setOpen] = useState(false)
    const toggle = ({title, description}) =>   { setOpen(!open)}
  return (
    <div className=' description'>
    {/* <div className='accordion'> */}
    <div className='acc-div' >
        <div className='description-title'>
            <h4>{title}</h4>
            <button className='description-icon' onClick={() => toggle(1)}>
                {open ? <AiOutlineMinus color='orange' /> : <AiOutlinePlus color='orange' />}
            </button>
        </div>
        <div className='description-answer'>
           {open && <p className='u-text-small'>{description}</p>}
        </div>
    </div>
    {/* </div> */}
    </div>
  )
}

export default Description
