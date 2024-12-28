import React from 'react'
import { useState } from 'react';

function Search({onSearch}) {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim()) {
            onSearch(inputValue); // Pass input value to parent
            setInputValue(''); // Clear input field after submit
        }
    }

    return (
        <div className='flex-1'> 
            <form onSubmit={handleSubmit} className='flex items-center gap-2'>
                <input 
                    type="text" 
                    placeholder='Enter your city'
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    className='bg-blue-50/55 border-none ring-2 ring-blue-100 rounded-md p-2 mr-2 w-full focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-200 text-slate-400 font-medium placeholder:text-slate-400'
                />
                <button type="submit" className='inline lg:hidden text-slate-600 p-2 ring-2 ring-blue-100 rounded-md bg-blue-50/55'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default Search