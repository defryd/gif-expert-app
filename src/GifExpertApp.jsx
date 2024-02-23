import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (NewCategory) => {

        if(categories.includes(NewCategory)) return;

        setCategories([NewCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={onAddCategory}
            />


            <ol>
                {
                    categories.map((category) => (

                        <li key={category}>
                            {category}
                        </li>

                    ))
                }
            </ol>
        </>
    )
}
