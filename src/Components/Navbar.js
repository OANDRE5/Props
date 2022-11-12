import {useEffect, useState} from 'react';
import { getRubrique } from '../Data/rubrique';

function Navbar() {

    const [navItems,setNavItems]= useState([]);
    useEffect(()=>{
        setNavItems(getRubrique());
    },[])

    const [collopse, setCollopse]= useState('nav_menu');
    const onToggle= ()=>{
        collopse==='nav_menu'? setCollopse('nav_menu nav_collopse'):setCollopse('nav_menu');
        toggleIcon=== 'toggle_icon'? setToggleIcon('toggle_icon toggle'):setToggleIcon('toggle_icon');
    };
    const [toggleIcon,setToggleIcon]=useState('toggle_icon');

    return (
        <div className="nav_wrapper">
             <div className='contenair'>
            <nav className='nav'>
                <a href='#' className='nav_brand'>
                    logo
                </a>
                <ul className={collopse}>
                    {navItems.map((item)=>(
                         <li className="nav_item" key={item.id}>
                         <a href={item.href} className="nav_lik">
                            {item.label}
                         </a>
                     </li>
                    ))}
                   
                </ul>
                <div className={toggleIcon}onClick={onToggle}>
                    <div className="line_one"></div>
                    <div className="line_2"></div>
                    <div className="line_3"></div>
                    <div className="line_4"></div>
                </div>
            </nav>
            
        </div> 
        </div>
      
    );
}

export default Navbar;