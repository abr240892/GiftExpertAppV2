import { useState } from "react"
import { AddCategory,GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['one punch']);

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;
        setcategories([ newCategory,...categories ]);
    }

    return (
        <>
        <h1>GifExpertApp</h1>
        <AddCategory  onNewCategory={ (event) => onAddCategory(event) } />

            {categories.map( (category) => 
                 (
                    <GifGrid 
                    key={ category }
                    category={ category } 
                               />
                ))
           }   
        </>
    )
}