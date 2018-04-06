import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import '../stylesheets/carousel.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.css'

export class MyCarousel extends Component {
    render() {
        return (
            <Carousel showStatus={false} infiniteLoop={true} autoPlay={true} showThumbs={false}>
                <div>
                    <img className="carousel-img" src="https://c1.staticflickr.com/5/4676/38800533365_2dda96b9c9_h.jpg" alt=""/>
                </div>
                <div>
                    <img className="carousel-img" src="https://photos.smugmug.com/North-America/California/Redwood-National-Park/i-fQqHSJc/0/f5692c09/X2/_GMA7647_tonemapped-X2.jpg" alt=""/>
                </div>
                <div>
                    <img className="carousel-img" src="https://c1.staticflickr.com/5/4702/40569378022_7dea223c80_h.jpg" alt=""/>
                </div>
                <div>
                    <img className="carousel-img" src="https://c1.staticflickr.com/5/4786/40755506661_d2fa3731e0_h.jpg" alt=""/>
                </div>
                <div>
                    <img className="carousel-img" src="http://www.urbancapture.com/wp-content/uploads/yapb_cache/130414_1656_waterfalls_igua__u_national_park_brazil.5c756plwtyosk04wkcgsccwco.8hrw0xj94288kk84gsowgs4o4.th.jpeg" alt=""/>
                </div>
            </Carousel>
        )

    }
}
