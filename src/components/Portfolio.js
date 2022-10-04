import React, { useState } from 'react'
import img1 from "../images/01.jpg"
import img2 from "../images/02.jpg"
import img3 from "../images/03.jpg"
export default function Portfolio() {
    const [cards] = useState([
        { id: 1, img: img1, name: "Raulou", job: "UI/UX design" },
        { id: 2, img: img2, name: "TomSty", job: "Web Development" },
        { id: 3, img: img3, name: "Lion Men", job: "3D Visual" }
    ])
    return (
        <div className='portfolio rel'>
            <div className="container">
                <div class="portfolio-section">
                    <div class="row">
                        <div className="col-4">
                            <div className="portfolio__content">
                                <h6 className="portfolio-content-h6">EMPLOYEES</h6>
                                <h3 className="portfolio-content-h3">OUR TEAM.</h3>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="row">
                                {cards.map(card => (
                                    <div class="col-4 pl-15" key={card.id} >
                                        <div class="portfolio-card">
                                            <div class="portfolio-card-image">
                                                <img src={card.img} alt="user" />
                                            </div>
                                            <h5 class="portfolio-card-name">{card.name}</h5>
                                            <p class="portfolio-card-job">{card.job}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
