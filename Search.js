import React from 'react';
import { useState } from "react";
import './Search.css';
function Search(){
    const [email, setEmail] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
                const response = await fetch("http://localhost:3001/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
                });
        
                if (response.ok) {
                setTimeout(() => {
                    setEmail("");
                }, 5000);
                } else {
                console.error("Error sending email");
                }
            } catch (error) {
                console.error("Error sending email:", error);
            }
        };

    return(
        <form
        id="EmailForm"
        action="/"
        target="EmptyFrame"
        method="POST"
        onSubmit={handleFormSubmit}
        >
       <>   
            <div className='Search'>
            <h2 className='SearchSignup'>Sign up for daily insider</h2>
            <input 
                        type="email" 
                        className="Searchinput1" 
                        name="email" 
                        placeholder="Enter Your Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />
            <button className='button'>Subscribe</button>
        </div>
        </>
        </form>
    )
}
export default Search;