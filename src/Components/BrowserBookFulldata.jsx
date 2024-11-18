import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const BrowserBookFulldata = () => {
    const { Books } = useSelector((state) => state.books)

    const { selected } = useParams();

    const filterBook = Books.filter((book) => book.id === Number(selected));

    const navigate = useNavigate()



    return (
        <>
            <div className="flex justify-center  mt-5 mr-28">

            <button className="px-5 transition-all duration-100  text-white font-bold font-sans border-2 border-orange-400 bg-orange-300 hover:bg-orange-400 hover:scale-95" onClick={() => navigate("/BrowserBooks")}>Back To Browser</button>
            </div >
            <div className="flex">
            {filterBook.length > 0 ? (
                filterBook.map((book) => (
                    <div key={book.id} className='border-none shadow-lg shadow-fuchsia-900 rounded mt-9 w-full scale-95 hover:scale-90'>
                        <img
                            src={book.image}
                            alt={book.title}
                            className='object-contain w-full h-96 rounded-xl'
                        />

                        <p className='text-center text-3xl font-bold text-red-400'> <span className="text-blue-400">Title </span>:  {book.title}</p>

                        <p className='text-center text-2xl font-bold text-yellow-100'><span className="text-blue-400">Author</span> : {book.author}</p>

                        <p className='text-center text-2xl font-bold text-white'><span className="text-blue-400">Description</span> : {book.description}</p>

                        <p className='text-center text-2xl font-bold text-slate-400'><span className="text-blue-400">More Info </span>: {book.moreInfo}</p>

                        <p className='text-center text-2xl font-bold text-slate-400' ><span className="text-blue-400">Ratings</span> : {book.rating}</p>
                    </div>
                ))
            ) : (<p>No Book</p>)}
            </div>
        </>
    );
};

export default BrowserBookFulldata