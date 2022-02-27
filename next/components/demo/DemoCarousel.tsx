import React, { FunctionComponent } from 'react'
import { Carousel } from 'react-bootstrap'
import CustomCarousel from '../carousel/CustomCarousel'
import TitledCard from '../layout/TitledCard'
import SectionHeader from './common/SectionHeader'

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
                <SectionHeader sectionTitle="Carousel with images"/>
                <CustomCarousel 
                    slides={slideImages.map((imagePath, i) => {
                        return {
                            id: imagePath,
                            content: (
                                <div>
                                    Slide {i}
                                </div>
                                
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
