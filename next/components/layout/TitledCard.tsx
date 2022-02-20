import { Card } from "react-bootstrap"
import styles from './TitledCard.module.scss'

interface TitledCardProps {
    title: string
    children: any
    description?: string | React.ReactNode
}

const TitledCard = ({
    title,
    children,
    description
}: TitledCardProps) => {
    return (
        <Card>
            <div className={styles.titleRow}>
                <h1>{title}</h1>
            </div>
            {description ? 
                <div className={styles.description}>
                    {description}
                </div>
            : undefined}
            <div>
                {children}
            </div>
        </Card>
    )
}

export default TitledCard
