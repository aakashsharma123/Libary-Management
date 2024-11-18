import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
const BrowserBook = () => {
    const { Books } = useSelector((state) => state.books)

    const [filterBooks, setFilterBooks] = useState(Books)

    const [input, setInput] = useState("")

    useEffect(() => {
        
        if (filterBooks.length === 0) {
            setFilterBooks (Books)
        }
        else {
            let filtered = Books.filter((book) => book.author.toLowerCase().includes(input.toLowerCase()))

            setFilterBooks (filtered)
        }
    
      
    }, [input , Books])
    

    function handleFilterBooks(e) {

        setInput(e.target.value)


    }

    return (
        <>
            <NavLink to={"/"}>
                <FontAwesomeIcon className='text-3xl mx-auto mt-2 text-white' icon={faHouse} />
            </NavLink>
            <div className='flex items-center justify-center mt-5'>
                <input
                    type="text"
                    value={input}
                    className='px-5 border-4 rounded border-orange-200'
                    placeholder='Enter Your Book'
                    onChange={handleFilterBooks}

                />
            </div>

            <div className='grid grid-cols-3 gap-5'>
                {filterBooks.length > 0 ? (
                    filterBooks.map((book) => (
                        <NavLink key={book.id} to={`/Book/${book.id}`}>
                            <div className='border-none shadow-lg shadow-fuchsia-900 rounded mt-9 w-full hover:scale-95'>
                                <img src={book.image} className='object-fill w-full h-32 rounded-xl' alt={book.title} />
                                <p className='text-center text-3xl font-bold text-red-400'>{book.title}</p>
                                <p className='text-center text-2xl font-bold text-yellow-100'>{book.author}</p>
                                <p className='text-center text-2xl font-bold text-white'>{book.description}</p>
                                <button
                                    className='text-white border-none shadow-lg px-4 ml-60 rounded bg-fuchsia-400 mb-1 mt-2 py-4 hover:font-bold hover:bg-fuchsia-500'
                                    aria-label={`View more about ${book.title}`}
                                >
                                    View More
                                </button>
                            </div>
                        </NavLink>
                    ))
                ) : (
                    <p className='text-center text-xl text-white'>No books available matching your search.</p>
                )}
            </div>
        </>
    );
}

export default BrowserBook;


