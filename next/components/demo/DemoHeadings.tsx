import { NextComponentType } from "next";
import { Card } from "react-bootstrap";
import styles from './DemoHeadings.module.scss'

export const DemoHeadings: NextComponentType = ({

}) => {
    return (
        <Card className={styles.container}>
            <h1>
                Heading 1
            </h1>
            <h2>
                Heading 2
            </h2>
            <h3>
                Heading 2
            </h3>
            <h4>
                Heading 2
            </h4>
        </Card>
    )
}