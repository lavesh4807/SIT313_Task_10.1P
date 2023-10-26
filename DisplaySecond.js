import React from 'react';
import {faker} from '@faker-js/faker';
import './DisplaySecond.css';
const DisplaySecond = () => {
    let detail = [
        {
            id: 1,
            img:faker.image.avatar(),       
            random: faker.person.firstName(),
            description:  faker.person.jobTitle(),
            author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
        },

        {
            id: 2,
            img:faker.image.avatar(),
            random: faker.person.firstName(),
            description:  faker.person.jobTitle(),
            author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
        },

        {
            id: 3,
            img:faker.image.avatar(),
            random: faker.person.firstName(),
            description:  faker.person.jobTitle(),
            author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
        }

    ];

    const item = detail.map((elements) => (
        <>
        
        <div className='display' key={elements.id}>

            <div className='displaycard1'>
                <div className='img_1'>
                    <img src={elements.img} alt='imgs' />
                </div>

                <h1 className='random1'>{elements.random}</h1>
                <p className='description1'>{elements.description}</p>
                <h2>{elements.author}</h2>
            </div>
        </div>
        </>

    ));

    return (
        
<div>
        <div>{item}</div>
        </div>
    );
};

export default DisplaySecond;