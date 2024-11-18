import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <>

            <h1 className='text-center text-3xl font-bold text-teal-50 font-serif'>Welcome To Online Libary System</h1>
            <nav className='bg-gradient-to-r from-fuchsia-950 to-fuchsia-900 rounded border-none '>
                <ul className='list-none flex justify-center gap-5 text-white py-5'>
                    <li className='hover:font-bold hover:scale-95 transition-all duration-100 hover:text-violet-200'>
                        <NavLink to={"/"}><FontAwesomeIcon className='mr-2' icon={faHome} />Home</NavLink>
                    </li>
                    <li className='hover:font-bold hover:scale-95 transition-all duration-100 hover:text-violet-200'>
                        <NavLink to={"BrowserBooks"}><FontAwesomeIcon className='mr-2' icon={faBook} />Browse Books</NavLink>
                    </li>
                    <li className='hover:font-bold hover:scale-95 transition-all duration-100 hover:text-violet-200'>
                        <NavLink to={"AddBook"}> <FontAwesomeIcon className='mr-2' icon={faPlus} /> Add Book</NavLink>
                    </li>
                </ul>
            </nav>

        </>
    );
}

export default Header;