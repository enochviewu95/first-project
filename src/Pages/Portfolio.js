import React from 'react'
import Card from '../Components/Card'

import '../Styles/Portfolio.css'

function Portfolio() {
    return (
        <section id='Portfolio'>
            <div className="container portfolio__container">
                <h2>Lorem ipsum dolor sit, amet consectetur.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam dicta deserunt numquam modi corrupti inventore saepe natus, eligendi sed alias. Nemo soluta optio nostrum vitae labore saepe temporibus qui natus!</p>

                <div className="portfolio__cards">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Portfolio