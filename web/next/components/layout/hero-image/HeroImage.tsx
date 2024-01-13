import React from 'react'
import Image from 'next/image'
import styles from './HeroImage.module.scss'

interface HeroImageProps {
    pageTitle?: string
    useTitleOverlay: boolean
    imgSrc: string
}

const HeroImage: React.FC<HeroImageProps> = ({
    pageTitle,
    useTitleOverlay,
    imgSrc
}) => {
    return (
      <div className={styles.heroImageContainer}>
        {!!pageTitle && useTitleOverlay &&  (
          <div className={styles.heroImageOverlay}>
            <h1>{pageTitle}</h1>
          </div>
            )}
        <div className={styles.heroImage}>
          <Image
                src={imgSrc}
                height={0}
                width={0}
                sizes="100vw"
                fill
                alt='hero-image'
                priority={true}
                style={{ objectFit: `cover` }}
              />
        </div>
      </div>
    )
}

export default HeroImage
