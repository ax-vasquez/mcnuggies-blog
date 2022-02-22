import React, { FunctionComponent } from 'react'
import { Carousel } from 'react-bootstrap'
import styles from './Carousel.module.scss'

interface CustomCarouselProps {
    title?: string
    slides: {
        id: string
        content: React.ReactNode
        caption?: React.ReactNode
    }[]
}

const CustomCarousel: FunctionComponent<CustomCarouselProps> = ({
    title,
    slides
}) => {
    return (
        <div
            className={styles.carousel}
        >
            {title ? <span>{title}</span> : undefined}
            <Carousel>
                {slides.map(slide => {
                    const { id, content, caption } = slide
                    return (
                        <Carousel.Item key={id}>
                            {content}
                            {caption ?  
                                <Carousel.Caption key={`${id}-caption`}>
                                    {caption}
                                </Carousel.Caption>
                            : undefined }
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default CustomCarousel
