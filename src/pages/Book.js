
import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Books() {
    const [books, setBooks] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getBooks = async () => {
            try {
                const book = await axios.get('http://localhost:8082/books', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
                setBooks(book.data)
            } catch (e) {
                console.log(e);
            }
        }
        getBooks();
    }, [token]);
    console.log(books);

    return (
        <div className="App">
            <header className="App-header">
                <div className='w-[30rem] flex justify-evenly h-[3rem]'>
                    <Link to="/" className='border-[1px]  p-2 rounded-md hover:border-[3px] hover:border-cyan-500 text-[1rem] w-[8rem]'>
                        <button type="button" class="btn btn-outline-light">Access Token</button>
                    </Link>
                    <Link to="/books" className='border-[1px]  p-2 rounded-md hover:border-[3px] hover:border-cyan-500 text-[1rem] w-[8rem]'>
                        <button type="button" class="btn btn-outline-light ms-3">Books</button>
                    </Link>
                    <Link to="/users" className='border-[1px] p-2 rounded-md hover:border-[3px] hover:border-cyan-500 text-[1rem] w-[8rem]'>
                        <button type="button" class="btn btn-outline-light ms-3">Users</button>
                    </Link>
                </div>

                {
                        books.length > 0 ? (
                            <table class="table w-[75%] mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col" className='border-cyan-500'>ISBN</th>
                                        <th scope="col" className='border-cyan-500'>Title</th>
                                        <th scope="col" className='border-cyan-500'>Author</th>
                                        <th scope="col" className='border-cyan-500'>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    books.map((book) => (
                                        <tr key={book.id}>
                                            <th scope="row" className='border-cyan-500'>{book.isbn}</th>
                                            <td className='text-gray-600'>{book.title}</td>
                                            <td className='text-gray-600'>{book.author}</td>
                                            <td className='text-gray-600'>{book.price}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                                </table>

                                ) : (
                                <div class="text-red-800 text-[1rem] m-5">ACCESS_TOKEN invalid</div>
                                )
                        }
            </header>
        </div>
    );
}
export default Books;