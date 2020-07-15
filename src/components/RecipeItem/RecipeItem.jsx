import React from 'react';

import './recipe-item.scss'

const RecipeItem = ({title, createdAt, _id}) =>{
    return(
        <div className='recipe__item'>
            <a href={`/recipes/${_id}`}>
                <div className="recipe__item__title">
                    {title}
                </div>
            </a>
            <div className="recipe__item__content">
                <div className="recipe__item__content__date">
                    Created at {createdAt}
                </div>
                <a href="#" className="recipe__item__content__button">
                    Remove
                </a>
                <a href="#" className="recipe__item__content__button">
                    Edit
                </a>
            </div>
        </div>
    )
};

export default RecipeItem;