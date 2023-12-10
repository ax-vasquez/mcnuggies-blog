import React from 'react'
import Link from 'next/link'
import CustomIcon from './CustomIcon'
import kebabCase from '../../util/kebabCase'
import style from './AnchoredHeading.module.scss'

interface AnchoredHeadingProps {
    component: React.ReactNode
    label: string
    variant: | `h2` | `h3` | `h4`
}

export const AnchoredHeading: React.FC<AnchoredHeadingProps> = ({
    component,
    label,
    variant,
}) => {

    const id = kebabCase(label.toLowerCase())

    const pickHeader = () => {
        switch (variant) {
            case `h2`: {
                return <h2 id={id}>{component}</h2>
            }
            case `h3`: {
                return <h3 id={id}>{component}</h3>
            }
            case `h4`:
            default: {
                return <h4 id={id}>{component}</h4>
            }
        }
    }

    if (!label) {
        return null
    }

    return (
      <div className={style.container}>
        {pickHeader()}
        <Link
                href={`#${id}`}
            >
          <CustomIcon
                    fileName="link-45deg"
                    height={32}
                    width={32}
                    onClick={() => {
                        navigator.clipboard.writeText(`${window.location.href}#${id}`)
                    }}
                />
        </Link>
      </div>
    )
}
