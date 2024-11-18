import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
const FilterCategory = () => {

  return (

    <>
      <div className='grid grid-cols-2 gap-3 text-white list-none mt-3 '>
      <NavLink to={"ct/Sci-Fi"}><li className='border-2 text-center border-fuchsia-800 px-4 rounded hover:bg-fuchsia-900 hover:font-bold transition-all duration-100 font-mono hover:scale-95  '> <FontAwesomeIcon className='mr-2' icon={faBookAtlas} />Sci-Fi</li></NavLink>
      <NavLink to={"ct/Fiction"}> <li className='border-2 border-fuchsia-800 px-4 rounded hover:bg-fuchsia-950  hover:font-bold transition-all duration-100  text-center font-mono hover:scale-95 shadow-sm shadow-fuchsia-900 ' > <FontAwesomeIcon className='mr-2' icon={faBookAtlas} /> Fiction</li></NavLink>
      <NavLink to={"ct/Romance"}> <li className='border-2 border-fuchsia-800 px-4 rounded hover:bg-fuchsia-950  hover:font-bold transition-all duration-100 text-center font-mono  hover:scale-95  shadow-sm shadow-fuchsia-900 '> <FontAwesomeIcon className='mr-2' icon={faBookAtlas} /> Romance </li></NavLink>
      <NavLink to={"ct/Fantasy"}>  <li className='border-2 border-fuchsia-800 px-4 rounded hover:bg-fuchsia-950  hover:font-bold transition-all duration-100 text-center font-mono  hover:scale-95  shadow-sm shadow-fuchsia-900 '> <FontAwesomeIcon className='mr-2' icon={faBookAtlas} /> Fantasy</li></NavLink>
      <NavLink to={"ct/Historical"}> <li className='border-2 border-fuchsia-800 px-4 rounded hover:bg-fuchsia-950 hover:font-bold transition-all duration-100 text-center font-mono hover:scale-95  shadow-sm shadow-fuchsia-900  '> <FontAwesomeIcon className='mr-2' icon={faBookAtlas} />Historical </li></NavLink>
      <NavLink to={"ct/Comedy"}> <li className='border-2 border-fuchsia-800 px-4 rounded hover:bg-fuchsia-950 hover:font-bold transition-all duration-100 text-center font-mono  hover:scale-95  shadow-sm shadow-fuchsia-900 '> <FontAwesomeIcon className='mr-2' icon={faBookAtlas} /> Comedy  </li></NavLink>
      </div>
    </>
  )
}

export default FilterCategory