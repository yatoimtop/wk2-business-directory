'use client'
import React, { useState } from "react";

import { useForm } from ".//useForm"

function Login() {
    // defining the initial state for the form
    const initialState = {
        email: "",
        name: "",
        phonenumber: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
    }




    return (
        // don't mind this ugly form :P
        
        <form onSubmit={onSubmit}>

        

        <section className="bg-white p-20 rounded-xl shadow-sm border border-gray-100">
            <div className="max-w-2xl mx-auto py-12 px-1 items-center gap-5">
            {/* Hero Section */}
                <section className="text-center mb-4">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-1 tracking-tight">
                        Contact
                    </h1>
                </section>
            </div>
                <div className="grid auto-cols-max grid-col gap-5 place-content-center">
                    
                    <li className="flex items-center gap-6 color-black">
                    <input
                        name='name'
                        id='name'
                        type='name'
                        className="rounded-xl text-black w-full px-4 py-2 border border-gray-400"
                        placeholder='Name'
                        onChange={onChange}
                        required
                        />
                    </li>

                    <li className="flex items-center gap-6 color-black">
                    <input
                        name='email'
                        id='email'
                        type='email'
                        className="rounded-xl text-black w-full px-4 py-2 border border-gray-400"
                        placeholder='Email'
                        onChange={onChange}
                        required
                        />
                    </li>

                    <li className="flex items-center gap-6 color-black" >
                    <input
                        name='phonenumber'
                        id='phonenumber'
                        type='phonenumber'
                        className="rounded-xl text-black w-full px-4 py-2 border border-gray-400"
                        placeholder='Phone Number'
                        onChange={onChange}
                        required
                        />
                    </li>
                    
                    <button className="rounded-xl bg-black text-white text-lg font-bold p-5" type='submit'>Login</button>
                </div>
        </section>
        </form>
    );
}

export default Login;