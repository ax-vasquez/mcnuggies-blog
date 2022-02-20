import { FunctionComponent, useState } from "react"
import { Card } from "react-bootstrap"
import CustomIcon from "../util/CustomIcon"
import styles from './TitledCard.module.scss'

interface TitledCardProps {
    title: string
    children: any
    description?: string | React.ReactNode
}

const TitledCard: FunctionComponent<TitledCardProps> = ({
    title,
    children,
    description
}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Card>
            <div className={styles.titleRow} onClick={() => setIsOpen(!isOpen)}>
                <h1>{title}</h1>
            </div>
            {description ? 
                <div className={`${styles.description}`}>
                    {description}
                </div>
            : undefined}
            <div className={`${styles.cardBody} ${isOpen ? undefined : styles.closed}`}>
                {children}
            </div>
            <div className={styles.cardFooter}>
                <CustomIcon 
                    fileName="bootstrap-three-dots"
                    height={32}
                    width={32}
                />
            </div>
        </Card>
    )
}

export default TitledCard
