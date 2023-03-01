import React, {useState} from 'react'
import './stack.css'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
const Description = ({title, description}) => {
    const [open, setOpen] = useState(false)
    const toggle = (id) =>   {
        console.log(id, 'id')
        if(id){

            setOpen(!open)
        }
    }
  return (
    <div className='container description'>
    <div className='accordion'>
    <div className='acc-div' >
        <div className='description-title'>
            <h4>JavaScript</h4>
            <button className='description-icon' onClick={() => toggle(1)}>
                {open ? <AiOutlineMinus color='orange' /> : <AiOutlinePlus color='orange' />}
            </button>
        </div>
        <div className='description-answer'>
           {open && <p className='u-text-small'>jndnskmdoskpoksdpokcsodkposkdoskdo,vsm k cvoifmfwoiefqwoefwoekfwokefq</p>}
        </div>
    </div>
    <div className='acc-div'>
        <div className='description-title'>
            <h4>Typescript</h4>
            <button className='description-icon' onClick={toggle}>
                {open ? <AiOutlineMinus color='orange' /> : <AiOutlinePlus color='orange' />}
            </button>
        </div>
        <div className='description-answer'>
           {open &&  <p className='u-text-small'>jndnskmdoskpoksdpokcsodkposkdoskdo,vsm k cvoifmfwoiefqwoefwoekfwokefq</p>}
        </div>
    </div>
    <div className='acc-div'>
        <div className='description-title'>
            <h4>ReactJs</h4>
            <button className='description-icon' onClick={toggle}>
                {open ? <AiOutlineMinus color='orange' /> : <AiOutlinePlus color='orange' />}
            </button>
        </div>
        <div className='description-answer'>
           {open &&  <p className='u-text-small'>jndnskmdoskpoksdpokcsodkposkdoskdo,vsm k cvoifmfwoiefqwoefwoekfwokefq</p>}
        </div>
    </div>
    <div className='acc-div'>
        <div className='description-title'>
            <h4>Angular</h4>
            <button className='description-icon' onClick={toggle}>
                {open ? <AiOutlineMinus color='orange' /> : <AiOutlinePlus color='orange' />}
            </button>
        </div>
        <div className='description-answer'>
           {open &&  <p className='u-text-small'>jndnskmdoskpoksdpokcsodkposkdoskdo,vsm k cvoifmfwoiefqwoefwoekfwokefq</p>}
        </div>
    </div>
    <div className='acc-div'>
        <div className='description-title'>
            <h4>NodeJs</h4>
            <button className='description-icon' onClick={toggle}>
                {open ? <AiOutlineMinus color='orange' /> : <AiOutlinePlus color='orange' />}
            </button>
        </div>
        <div className='description-answer'>
           {open &&  <p className='u-text-small'>jndnskmdoskpoksdpokcsodkposkdoskdo,vsm k cvoifmfwoiefqwoefwoekfwokefq</p>}
        </div>
    </div>
    <div className='acc-div'>
        <div className='description-title'>
            <h4>Express.js</h4>
            <button className='description-icon' onClick={toggle}>
                {open ? <AiOutlineMinus color='orange' /> : <AiOutlinePlus color='orange' />}
            </button>
        </div>
        <div className='description-answer'>
           {open &&  <p className='u-text-small'>jndnskmdoskpoksdpokcsodkposkdoskdo,vsm k cvoifmfwoiefqwoefwoekfwokefq</p>}
        </div>
    </div>
   
    <div className='acc-div'>
        <div className='description-title'>
            <h4>Postgres</h4>
            <button className='description-icon' onClick={toggle}>
                {open ? <AiOutlineMinus color='orange' /> : <AiOutlinePlus color='orange' />}
            </button>
        </div>
        <div className='description-answer'>
           {open &&  <p className='u-text-small'>jndnskmdoskpoksdpokcsodkposkdoskdo,vsm k cvoifmfwoiefqwoefwoekfwokefq</p>}
        </div>
    </div>
    <div className='acc-div'>
        <div className='description-title'>
            <h4>Git</h4>
            <button className='description-icon' onClick={toggle}>
                {open ? <AiOutlineMinus color='orange' /> : <AiOutlinePlus color='orange' />}
            </button>
        </div>
        <div className='description-answer'>
           {open &&  <p className='u-text-small'>jndnskmdoskpoksdpokcsodkposkdoskdo,vsm k cvoifmfwoiefqwoefwoekfwokefq</p>}
        </div>
    </div>
    <div className='acc-div'>
        <div className='description-title'>
            <h4>Automated testing</h4>
            <button className='description-icon' onClick={toggle}>
                {open ? <AiOutlineMinus color='orange' /> : <AiOutlinePlus color='orange' />}
            </button>
        </div>
        <div className='description-answer'>
           {open &&  <p className='u-text-small'>jndnskmdoskpoksdpokcsodkposkdoskdo,vsm k cvoifmfwoiefqwoefwoekfwokefq</p>}
        </div>
    </div>
    </div>
    </div>
  )
}

export default Description
