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
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Enter your city'
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    className='bg-blue-50/55 border-none ring-2 ring-blue-100 rounded-md p-2 mr-2 w-full focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-200 text-slate-400 font-medium placeholder:text-slate-400'
                />
            </form>
        </div>
    )
}

export default Search