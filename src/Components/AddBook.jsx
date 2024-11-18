import React, { useState } from 'react';
import { faBook, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../utlies/LibarySlice';

const AddBook = () => {
    const { Books } = useSelector((state) => state.books);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");
    const [moreinfo, setMoreInfo] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const newBook = {
        id: Books.length + 1,
        title,
        author,
        category,
        description,
        rating: parseInt(rating),
        image,
        moreinfo
    };

    const validateForm = () => {
        const formErrors = {};

        if (!title) formErrors.title = "Fill title correctly";
        if (!author) formErrors.author = "Fill author correctly";
        if (!category) formErrors.category = "Fill category correctly";
        if (!description) formErrors.description = "Fill description correctly";
        if (!image) formErrors.image = "Fill image URL correctly";
        if (!moreinfo) formErrors.moreinfo = "Fill more info correctly";
        if (rating < 1 || rating > 5) formErrors.rating = "Rating must be between 1 and 5";

        return formErrors.keys
    };

    function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = validateForm();

        if (validationErrors) {
            return setErrors(validationErrors);
        }

        dispatch(addBook(newBook));

        setTitle("");
        setAuthor("");
        setCategory("");
        setDescription("");
        setRating("");
        setImage("");
        setMoreInfo("");


        navigate("/BrowserBooks");
    }

    return (
        <>
            <NavLink to={"/"}>
                <FontAwesomeIcon className='text-3xl mt-2 text-white' icon={faHouse} />
            </NavLink>
            <h1 className='text-4xl font-bold underline font-sans text-center mb-5 text-orange-400 shadow-sm'>Add New Books Here</h1>
            <div className='flex-col'>
                <form onSubmit={handleSubmit} className='border-2 shadow-xl shadow-fuchsia-950 rounded-xl border-fuchsia-950 min-h-72 p-4 w-full max-w-lg mx-auto'>
                    <div className='mb-4 flex-col'>
                        <label htmlFor="BookName" className='ml-5 font-serif text-fuchsia-700 text-2xl font-bold'>Book Title</label>
                        <input
                            className='ml-5 border border-gray-300 rounded p-2 bg-transparent w-96 block text-white'
                            type="text"
                            value={title}
                            id='BookName'
                            required
                            placeholder='Enter Book Title'
                            onChange={(e) => {
                                setTitle(e.target.value);
                                setErrors(prev => ({ ...prev, title: null })); // Clear error on change
                            }}
                        />
                        {errors.title && <p className="text-red-500">{errors.title}</p>}
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="BookAuthor" className='ml-5 font-serif text-fuchsia-700 text-2xl font-bold'>Book Author</label>
                        <input
                            className='ml-5 border border-gray-300 rounded p-2 bg-transparent w-96 block text-white'
                            type="text"
                            id='BookAuthor'
                            value={author}
                            required
                            placeholder='Enter Book Author'
                            onChange={(e) => {
                                setAuthor(e.target.value);
                                setErrors(prev => ({ ...prev, author: null }));
                            }}
                        />
                        {errors.author && <p className="text-red-500">{errors.author}</p>}
                    </div>

                    <div className='mt-4'>
                        <label htmlFor="BookGenre" className='ml-5 font-serif text-fuchsia-700 text-2xl font-bold'>Book Genre</label>
                        <input
                            className='ml-5 border border-gray-300 rounded p-2 bg-transparent w-96 block text-white'
                            type="text"
                            value={category}
                            id='BookGenre'
                            required
                            placeholder='Enter Book Genre'
                            onChange={(e) => {
                                setCategory(e.target.value);
                                setErrors(prev => ({ ...prev, category: null }));
                            }}
                        />
                        {errors.category && <p className="text-red-500">{errors.category}</p>}
                    </div>

                    <div className='mt-4'>
                        <label className='ml-5 font-serif text-fuchsia-700 text-2xl font-bold' htmlFor="BDescription">Book Description</label>
                        <textarea
                            id="book-description"
                            value={description}
                            name="description"
                            placeholder='Book Description'
                            className='ml-5 border border-gray-300 rounded p-2 bg-transparent w-96 block text-white'
                            rows="4"
                            onChange={(e) => {
                                setDescription(e.target.value);
                                setErrors(prev => ({ ...prev, description: null }));
                            }}
                        />
                        {errors.description && <p className="text-red-500">{errors.description}</p>}
                    </div>

                    <div className='mt-4'>
                        <label className='ml-5 font-serif text-fuchsia-700 text-2xl font-bold' htmlFor="rating">Book Rating (1-5)</label>
                        <input
                            className='ml-5 border border-gray-300 rounded p-2 bg-transparent w-96 block text-white'
                            type="number"
                            onChange={(e) => {
                                setRating(e.target.value);
                                setErrors(prev => ({ ...prev, rating: null }));
                            }}
                            value={rating}
                            id='rating'
                            placeholder='Book Rating'
                        />
                        {errors.rating && <p className="text-red-500">{errors.rating}</p>}
                    </div>

                    <div className='mt-4'>
                        <label className='ml-5 font-serif text-fuchsia-700 text-2xl font-bold' htmlFor="BookImage">Book Image URL</label>
                        <input
                            className='ml-5 border border-gray-300 rounded p-2 bg-transparent w-96 block text-white'
                            type="url"
                            value={image}
                            placeholder='Book Image URL'
                            onChange={(e) => {
                                setImage(e.target.value);
                                setErrors(prev => ({ ...prev, image: null }));
                            }}
                        />
                        {errors.image && <p className="text-red-500">{errors.image}</p>}
                    </div>



                    <button type="submit" className='mt-5 hover:bg-fuchsia-900 shadow-lg shadow-fuchsia-900 px-5 font-bold text-white border border-fuchsia950 rounded-xl mx-auto w-full'>Add Book</button>
                </form>
            </div>
        </>
    );
}

export default AddBook;