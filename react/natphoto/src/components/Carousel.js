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
                    <img className="carousel-img" src="https://thumbs.dreamstime.com/b/bald-cypress-tree-overhaning-river-20474394.jpg" alt=""/>
                </div>
                <div>
                    <img className="carousel-img" src="https://photos.smugmug.com/North-America/California/Redwood-National-Park/i-fQqHSJc/0/f5692c09/X2/_GMA7647_tonemapped-X2.jpg" alt=""/>
                </div>
                <div>
                    <img className="carousel-img" src="http://www.urbancapture.com/wp-content/uploads/yapb_cache/130414_1656_waterfalls_igua__u_national_park_brazil.5c756plwtyosk04wkcgsccwco.8hrw0xj94288kk84gsowgs4o4.th.jpeg" alt=""/>
                </div>
            </Carousel>
        )

    }
}
