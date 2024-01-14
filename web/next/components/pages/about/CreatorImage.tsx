import React from 'react'
import Image from 'next/image'
import styles from './CreatorImage.module.scss'

interface CreatorImageProps {
    imageUrl: string
    base64Image: string
}

const CreatorImage: React.FC<CreatorImageProps> = ({
    imageUrl,
    base64Image
}) => {
    return (
      <div className={styles.container}>
        <Image
              data-cy='author-avatar'
              src={imageUrl}
              layout='fill'
              alt='creator-image'
              placeholder='blur'
              blurDataURL={base64Image}
            />
      </div>
    )
}

export default CreatorImage
