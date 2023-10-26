import React from 'react';
import './Content.css';
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

function Content() {
    return (
        <>
          
            <div className='Content'>

            <div className='Class'>
                <div className='Content_Item'>
                    <h3 className='header'>Explore</h3>

                    <section className='items'>Home</section>
                    <section className='items'>Questions</section>
                    <section className='items'>Articles</section>
                    <section className='items'>Tutorials</section>
                </div>


                <div className='Content_Support'>
                    <h3 className='header'>Support</h3>

                    <section className='items_1'>FAQs</section>
                    <section className='items_1'>Help</section>
                    <section className='items_1'>Contact us</section>


                </div>
                <div className='Content_Connected'>
                    <h3 className='header'>Stay Connected</h3>
                    <section className='items_2'>
                        <FaYoutube />
                        <FaTwitter />
                        <FaFacebook />

                    </section>
                </div>

                </div>
                
                <div>
                    <p id='Text'>DEV@Deakin 2023</p>
                </div>
                <div className='Views'>
                    <p >Privacy Policy</p>
                    <p>Terms</p>
                    <p>Code of Conduct</p>
                </div>
                
                </div>
        </>
    )
}
export default Content;