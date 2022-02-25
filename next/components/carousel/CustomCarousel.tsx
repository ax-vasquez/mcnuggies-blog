import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Carousel.module.scss'

interface SlideConfig {
    id: string
    content: React.ReactNode
    caption?: React.ReactNode
}

interface CustomCarouselProps {
    title?: string
    slides: SlideConfig[]
}

const CustomCarousel: FunctionComponent<CustomCarouselProps> = ({
    title,
    slides
}) => {
    // Defaults to the first slide as the "active" slide on first load
    const [activeSlideId, setActiveSlideId] = useState(slides[0].id)
    const [prevSlide, setPrevSlide] = useState(null as unknown as SlideConfig)
    const [currentSlide, setCurrentSlide] = useState(null as unknown as SlideConfig)
    const [nextSlide, setNextSlide] = useState(null as unknown as SlideConfig)

    useEffect(() => {
        if (slides.length === 1) {
            setPrevSlide(slides[0])
            setCurrentSlide(slides[0])
            setNextSlide(slides[0])
        } else if (slides.length === 2) {
            setPrevSlide(slides[1])
            setCurrentSlide(slides[0])
            setNextSlide(slides[1])
        } else {
            setPrevSlide(slides[(slides.length - 1)])
            setCurrentSlide(slides[0])
            setNextSlide(slides[1])
        }
    })

    const getCurrentSlideIndex = () => {
        const currentSlide = slides.filter(slide => slide.id === activeSlideId)[0]
        return slides.indexOf(currentSlide)
    }

    const getNextSlideIndex = () => {
        const currentSlideIndex = getCurrentSlideIndex()
        let nextSlideIndex = -1
        if (currentSlideIndex === (slides.length - 1)) {
            // set to first in slides array
            nextSlideIndex = 0
        } else {
            nextSlideIndex = currentSlideIndex + 1
        }
        return nextSlideIndex
    }

    const getPrevSlideIndex = () => {
        const currentSlideIndex = getCurrentSlideIndex()
        let prevSlideIndex = -1
        if (currentSlideIndex === 0) {
            // set to last in slides array
            prevSlideIndex = (slides.length - 1)
        } else {
            prevSlideIndex = currentSlideIndex - 1
        }
        return prevSlideIndex
    }

    const handleScrollNext = () => {
        
    }

    const handleScrollPrev = () => {
        
    }

    return (
        <div
            className={styles.customCarousel}
        >
            {title ? <span>{title}</span> : undefined}
            <div className={styles.customCarouselInner}>
                
            </div>
        </div>
    )
}

export default CustomCarousel
