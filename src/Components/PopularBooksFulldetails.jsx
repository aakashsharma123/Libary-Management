import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BooksP from '../utlies/popularbooks';

const PopularBooksFulldetails = () => {
    const { id } = useParams();

    const filterPopularBook = BooksP.filter((popular) => popular.id === Number(id))

    const navigate = useNavigate();

    return (
        <>
            <div className='flex justify-center'>
                <button className="px-5 transition-all duration-100  text-white font-bold font-sans border-2 border-orange-400 bg-orange-300 hover:bg-orange-400 hover:scale-95 py-4 mt-5" onClick={() => navigate("/BrowserBooks")}>Back To Browser</button>
            </div>
            {filterPopularBook.length > 0 ? (
                filterPopularBook.map((popularBook) => (
                    <div className='border-none shadow-lg shadow-fuchsia-900 rounded mt-9 w-full scale-90 hover:scale-95 transition-all duration-100'  >
                        <img src={popularBook.image} className='relative w-full h-48' alt={popularBook.title} />
                        <p className='text-center text-3xl font-bold text-red-400'> <span className='text-blue-400'>Title : </span>{popularBook.title}</p>
                        <p className='text-center text-2xl font-bold text-yellow-100'><span className='text-blue-400'>Author : </span>{popularBook.author}</p>
                        <p className='text-center text-2xl font-bold text-white'><span className='text-blue-400'>Description :</span>{popularBook.description}</p>
                        <p className='text-center text-2xl font-bold text-white'> <span className='text-blue-400'>MoreInfo : </span>{popularBook.moreInfo}</p>
                        <p className='text-center text-2xl font-bold text-white' ><span className='text-blue-400'>Year : </span> {popularBook.year}</p>
                    </div>
                ))
            ) : (
                <p>NO More Details</p>
            )}
        </>
    )
}

export default PopularBooksFulldetails