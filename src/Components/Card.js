import React from 'react'
import '../Styles/Card.css'

import ArticleIconOne from '../Assets/Images/article-icon.png'
function Card() {
    return (
        <article>
            <div className="container card__container">
                <img className='card__logo' src={ArticleIconOne} alt="" />
                <h4>Lorem ipsum dolor</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </article>
    )
}

export default Card