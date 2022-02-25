import React, { FunctionComponent } from 'react'
import styles from 'CarouselSlide.module.scss'

export interface CarouselSlideProps {
    feature: React.ReactNode
    description?: React.ReactNode
}

const CarouselSlide: FunctionComponent<CarouselSlideProps> = ({
    feature,
    description
}) => {
    return (
        <div className={styles.slideContainer}>
            <div className={styles.slideFeature}>
                {feature}
            </div>
            {description && (
                <div className={styles.slideDescription}>
                    {description}
                </div>
            )}
        </div>
    )
}

export default CarouselSlide
