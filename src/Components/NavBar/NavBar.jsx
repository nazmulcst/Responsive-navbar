/* eslint-disable react/jsx-key */
// import { list } from "postcss";
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
     const [open, setOpen]= useState(false)

     const routes = [
          { id: 1, path:  '/', name: 'Home' },
          { id: 2, path: '/About', name: 'about' },
          { id: 3, path: '/Services', name: 'services' },
          { id: 4, path: '/Contact', name:  'contact' },
          { id: 5, path: '*', name: 'NotFound' }
        ];
        

     return (
          <nav className="text-black p-6 bg-yellow-200">
          <div className="md:hidden text-3xl" onClick={()=> setOpen(!open)}>
               {
                    open === true ?
                      <AiOutlineClose></AiOutlineClose>
                       :  <AiOutlineMenu className=""></AiOutlineMenu>
               }
         
          </div>
               <ul className={`md:flex duration-1000
                absolute md:static
               ${open ? 'top-16': '-top-60'}
                bg-green-500 px-6`}>
               {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }  
                </ul>   
          </nav>
     );
};

export default NavBar;