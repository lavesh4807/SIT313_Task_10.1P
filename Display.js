import React from 'react';
import {faker} from '@faker-js/faker';
import './Display.css';
const Display=()=>{
    let details=[
    {
        id:1, 
        img:faker.image.avatar(),
        text:faker.person.firstName(),
        about: faker.person.jobTitle(),
        author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
    },
    {id:2,
        img:faker.image.avatar(),
        text:faker.person.firstName(),
        about:faker.person.jobTitle(),
         author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
    },
    {
        id:3, 
        img:faker.image.avatar(),
        text:faker.person.firstName(),
        about:faker.person.jobTitle(),
        author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
    }
    
];

const items = details.map((element)=>{
    return(
        <>
        <div className='box_M'>
        <div className='card_box'>
            <div className='cardbox-img' key={element.id}>
                <img src={element.img} alt='imgs' />
            </div>
            <div className='cardbox-make'>
            <h1 className='text'>{element.text}</h1>
            <p className='about'>{element.about}</p>
            <h2>{element.author}</h2>
            
        </div>
        </div>
        </div> </>
    );
})
return (
    <> {items} </>
)
}
export default Display;
