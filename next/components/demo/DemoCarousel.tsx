import React, { FunctionComponent } from 'react'
import { Carousel } from 'react-bootstrap'
import CustomCarousel from '../carousel/CustomCarousel'
import TitledCard from '../layout/TitledCard'

interface DemoCarouselProps {

}

const DemoCarousel: FunctionComponent<DemoCarouselProps> = ({}) => {

    const imgPrefix = `/demo/carousel`

    const slideImages = [
        `${imgPrefix}/carousel-1`,
        `${imgPrefix}/carousel-2`,
        `${imgPrefix}/carousel-3`,
        `${imgPrefix}/carousel-4`,
        `${imgPrefix}/carousel-5`,
        `${imgPrefix}/carousel-6`,
    ]

    return (
        <section
            id="demo-carousel"
        >
            <TitledCard
                title='Carousels'
            >
                <CustomCarousel 
                    title='Carousel Test'
                    slides={slideImages.map(imagePath => {
                        return {
                            id: imagePath,
                            content: (
                                <img src={`${imagePath}.jpg`} />
                            ),
                            caption: (
                                <span>Test caption</span>
                            )
                        }
                    })}
                />
            </TitledCard>
        </section>
    )
}

export default DemoCarousel
