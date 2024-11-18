import React, { useState } from 'react';
import BooksP from '../utlies/popularbooks';
import { NavLink } from 'react-router-dom';

const PopularBooks = () => {
    const [PBooks, setPBooks] = useState(BooksP);

    return (
        <> 
            <div className='border-2 h-[600px] w-fit overflow-x-auto overflow-y-auto mx-auto mt-14 py-10 border-fuchsia-950 shadow-lg shadow-fuchsia-900'> 
                <h1 className='text-4xl font-mono font-bold text-red-100 text-center'>Showing Popular Books</h1>
                <div className='flex flex-col space-y-5'>
                    {PBooks.map((eachBook) => (
                        <div
                            key={eachBook.id}
                            className='w-full max-h-52 flex-col text-center p-4 bg-gradient-to-r from-fuchsia-950 to-fuchsia-900 border-2'
                        >
                            <p className='text-3xl font-bold text-white'>{eachBook.title}</p>
                            <p className='font-sans font-bold text-2xl text-yellow-50'>{eachBook.author}</p>
                            <p className='text-2xl font-medium text-red-400'>{eachBook.description}</p>
                            <p className='font-bold text-2xl'>{eachBook.year}</p>
                            <NavLink to={`/populardetails/${eachBook.id}`}>
                                <button className='text-white hover:font-bold hover:scale-95 px-4 mt-2 py-2 cursor-pointer border-2 rounded shadow-md shadow-fuchsia-700'>View More</button>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PopularBooks;