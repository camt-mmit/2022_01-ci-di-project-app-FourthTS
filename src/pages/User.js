import '../App';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const user = await axios.get('http://localhost:8081/users', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                });
                setUsers(user.data.data);
            } catch (e) {
                console.log(e);
            }
        }
        getUsers();
    }, [token]);


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
                        users.length > 0 ? (
                            <table class="table w-[75%] mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col" className='border-cyan-500'>ID</th>
                                        <th scope="col" className='border-cyan-500'>Username</th>
                                        <th scope="col" className='border-cyan-500'>FirstName</th>
                                        <th scope="col" className='border-cyan-500'>LastName</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    users.map((user) => (
                                        <tr key={user.id}>
                                            <th scope="row" className='border-cyan-500'>{user.id}</th>
                                            <td className='text-gray-600'>{user.username}</td>
                                            <td className='text-gray-600'>{user.firstName}</td>
                                            <td className='text-gray-600'>{user.lastName}</td>
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
export default User;

