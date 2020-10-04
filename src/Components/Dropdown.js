
import React, {useState} from 'react'
import MenuItems from './MenuItems';
import {Link} from 'react-router-dom';
import './DropDown.css'

const Dropdown=()=>{
    const[click, setClick]=useState(false)
    const onMenuClick=()=>(!click)
    

    return(
        <>

        <ul onClick={onMenuClick} className={click ? 'dropdown-menu clicked': 'dropdown-menu'}>
            {MenuItems.map((item,index)=>{
                return(
                    <li key={index}>
                    <Link className={item.className} to={item.path} onClick={()=>setClick(false)}>
                        {item.title}
                    </Link>
                    
                    </li>
                )
            })}
        

        </ul>
        

        
        </>
    )

}
export default Dropdown;