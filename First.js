import React from 'react';
import  './First.css';
import Display from './Display.js';
import SubPart from './SubPart.js';
import SubPart1 from './SubPart1.js';
import SubPart2 from './SubPart2.js';
import DisplaySecond from './DisplaySecond.js';
import Search from './Search.js';
import Content from './Content.js';




function First(){
    return (
        <>
        <div className='First_Div'>
            <p className='line'>DEV@Deakin</p>
            <input className='First_input' type='search' placeholder='Search' />
            <p className='Paragraph'>Post</p>
            <p className='Paragraph'>Login</p>
        </div>
        <div className='Image_Contain'>
            <img src='img/bgimage.jpg' alt='img' />
        </div>
        <h1 className='Heading'>Featured Article</h1>

        <div>
            <Display/>
            
            <SubPart data=" See All Articles"/>
            <SubPart1 data_1="Featured Tutorials"/>
            
            <DisplaySecond/>
            
            <SubPart2 data_2="See All Tutorials"/>
            <Search />
        </div>
        <div className='Div'>
        <Content />
        </div>
        </>
    )
}
export default First;