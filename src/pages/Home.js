import '../App.css';
import React, { useState} from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const tokenSet = (e) => {
        setToken(e.target.value);
        localStorage.setItem('token', e.target.value || '');
    }

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
                <div className='w-[27rem] m-3 '>
                <input className='w-full rounded-md border-[2px] text-center hover:border-[3px] hover:border-cyan-500' type="text" placeholder="Access Token" aria-label="Access Token"
                        onChange={tokenSet} value={token}></input>
                </div>
            </header>
        </div>
    );
}