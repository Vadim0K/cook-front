import React from 'react';
import RecipeItem from '../RecipeItem/RecipeItem'

import './main.scss'

const Main = () =>{
    return(
        <div className="main">
            <div className="main__add__item">
                Add recipe
            </div>
            <div className="main__form">
                <form className="add__form">
                    <div className="form-group">
                        <div className="add__form__row">
                            <h4>
                                <label htmlFor="title">Title</label>
                            </h4>
                            <input
                                className="form-control"
                                id="title"
                                placeholder="Enter title"
                            />
                        </div>
                        <div className="add__form__row">
                            <h4>
                                <label htmlFor="image">Image Url</label>
                            </h4>
                            <input
                                className="form-control"
                                id="image"
                                placeholder="Enter image URL"
                            />
                        </div>
                        <div className="add__form__row">
                            <h4>
                                <label htmlFor="title">Description</label>
                            </h4>
                            <textarea
                                className="form-control"
                                id="title"
                                placeholder="Enter description"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning">Add</button>
                </form>
            </div>
            <RecipeItem title="Roast chicken" createdAt="24 October"/>
            <RecipeItem title="Roast chicken" createdAt="24 October"/>
            <RecipeItem title="Roast chicken" createdAt="24 October"/>
            <RecipeItem title="Roast chicken" createdAt="24 October"/>
        </div>
    )
};

export default Main;