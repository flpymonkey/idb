import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.css'

export class MyCarousel extends Component {
    render() {
        return (
            <Carousel showStatus={false} infiniteLoop={true} autoPlay={true} showThumbs={false}>
                <div>
                    <img className="carousel-img" src="https://thumbs.dreamstime.com/b/bald-cypress-tree-overhaning-river-20474394.jpg" alt=""/>
                </div>
                <div>
                    <img className="carousel-img" src="https://photos.smugmug.com/North-America/California/Redwood-National-Park/i-fQqHSJc/0/f5692c09/X2/_GMA7647_tonemapped-X2.jpg" alt=""/>
                </div>
                <div>
                    <img className="carousel-img" src="https://photos.smugmug.com/North-America/California/Redwood-National-Park/i-fQqHSJc/0/f5692c09/X2/_GMA7647_tonemapped-X2.jpg" alt=""/>
                </div>
            </Carousel>
        )

    }
}
