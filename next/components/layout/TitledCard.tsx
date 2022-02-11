import { Card } from "react-bootstrap"
import styles from './TitledCard.module.scss'

interface TitledCardProps {
    title: string
    children: any
}

const TitledCard = ({
    title,
    children
}: TitledCardProps) => {
    return (
        <Card>
            <div className={styles['title-row']}>
                <h1>{title}</h1>
            </div>
            <div>
                {children}
            </div>
        </Card>
    )
}

export default TitledCard
