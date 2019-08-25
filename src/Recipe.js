import React from 'react';
import style from './recipe.module.css';

const Recipe = ({image,title,calories,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" className={style.image}/>
        </div>
    )
}

export default Recipe;