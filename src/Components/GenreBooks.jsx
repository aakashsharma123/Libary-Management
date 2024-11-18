import { NavLink, useNavigate, useParams } from 'react-router-dom'
import BooksP from '../utlies/popularbooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const GenreBooks = () => {

  const data = useParams()

  const filterBooks = BooksP.filter((catBook) => catBook.category === data.catagorey)

  const navigate = useNavigate()

  return (
    <>
    
  <button onClick={() => navigate("/")} className='text-white hover:font-bold hover:scale-95 px-4 mt-2 py-2 cursor-pointer border-2 rounded shadow-md shadow-fuchsia-700'><FontAwesomeIcon icon={faHome}/></button>
      <div className='grid grid-cols-3 gap-5'>
        {filterBooks.length > 0 ? (
          filterBooks.map((each) => (
            <div key={each.id} className='border-2 border-fuchsia-950  w-full mt-10 mx-auto rounded shadow-lg shadow-fuchsia-950 hover:scale-95 ' >
              <img className='rounded w-full object-fill h-40' src={each.image} alt="" />
              <p className='text-2xl font-bold text-red-300 '>{each.title}</p>
              <p className='text-white font-bold font-serif text-2xl'>{each.description}</p>
              {/* <p className='text-3xl'>{each.year}</p> */}
              <NavLink to={`/populardetails/${each.id}`}><button className='text-center mx-auto text-white ml-44 border-2 border-fuchsia-950 bg-fuchsia-900 rounded-lg px-5'>View More</button></NavLink>    
            </div>
          ))
        ) :
          (<div className=' flex justify-center items-center  text-center w-screen h-screen text-7xl text-sky-700 animate-pulse text-white'><p >No Books Avalaible</p></div>)}
      </div>
    </>
  )
}

export default GenreBooks

