import React, { useEffect, useState } from 'react'
import { APP_COLOR, APP_TITLE, SEARCH_PHOTOS } from '../../../utils/strings'
import { FaSearch as Icon } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = ({ type = 0 }) => {
    const [searchText, setSearchText] = useState("");
    const [isSearchCollapsed, setSearchCollapsed] = useState(true);

    const [isDarkMode, setDarkMode] = useState(false);

    const handleSearchSubmit = e => {
        e.preventDefault();
    }
    
    return type === 0 ? 
        <LoginNavbar
            isDarkMode={isDarkMode}
            setDarkMode={() => setDarkMode(!isDarkMode)}
        /> : <SearchNavbar />;

}

const LoginNavbar = ({ isDarkMode, setDarkMode }) => {
    return (
        <div className='flex-1 flex flex-row items-center p-4 '>
            <div className='flex-1 flex flex-row items-center gap-2'>
                <img width="38" height="38" src="https://img.icons8.com/3d-fluency/94/camera.png" alt="camera"/>
                <p className='text-xl text-indigo-500 font-semibold'>{APP_TITLE}</p>
            </div>
            <div className='flex-1 flex justify-end'>
                <DarkModeButton isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
            </div>
        </div>
    )
}

const SearchNavbar = ({ isSearchCollapsed, setSearchCollapsed, setSearchText, searchText, handleSearchSubmit }) => {
    return (
        <div className='w-full h-20 bg-white/90 fixed z-10 flex flex-row items-center px-4 gap-4 '>
            <div className='flex-1 flex flex-row items-center gap-2'>
                <img width="45" height="45" src="https://img.icons8.com/3d-fluency/94/camera.png" alt="camera"/>
                <p className=' hidden lg:block text-xl font-semibold'>{APP_TITLE}</p>
            </div>
            <ul className='hidden flex-1 lg:flex flex-row justify-between text-lg '>
                <li className='cursor-pointer hover:scale-110 transition-transform'>Photos</li>
                <li className='cursor-pointer hover:scale-110 transition-transform'>Albums</li>
                <li className='cursor-pointer hover:scale-110 transition-transform'>About</li>
            </ul>
            <div className='flex-1 flex-row flex justify-end items-center gap-4'>
                <form onSubmit={handleSearchSubmit}>
                    <span className='flex flex-row border-2 px-2 justify-center items-center'>
                        {
                            !isSearchCollapsed &&
                            <input
                                className='outline-none h-10 pr-4 bg-transparent'
                                onChange={e => setSearchText(e.target.value)}
                                type={"text"}
                                placeholder={SEARCH_PHOTOS}
                            />
                        }
                        <span onClick={() => setSearchCollapsed(!isSearchCollapsed)}>
                            <Icon size={20} />
                        </span>
                    </span>  
                </form>
                <span>
                    <img className=' object-fill w-10 h-10 rounded-full' src="https://wallpapers.com/images/featured/spiderman-background-oycfyb1ksermw921.jpg" alt="camera"/>
                </span>
            </div>
        </div>
    )
}

const DarkModeButton = ({ isDarkMode = false, setDarkMode }) => {
    return (
        <span onClick={setDarkMode} className='cursor-pointer hover:scale-125 hover:transition-transform'>
            {
                isDarkMode ?
                <MdDarkMode size={20} color={APP_COLOR} />:
                <MdLightMode size={20} color={APP_COLOR} />
            }
        </span>
    )
}

export default Navbar