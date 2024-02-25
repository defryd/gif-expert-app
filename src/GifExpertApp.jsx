import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hello']);

    const onAddCategory = (NewCategory) => {

        if (categories.includes(NewCategory)) return;

        setCategories([NewCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={onAddCategory}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    )
}
