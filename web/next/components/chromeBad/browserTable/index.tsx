import React from "react"
import CustomIcon from "../../shared/CustomIcon"
import styles from './BrowserTable.module.scss'
import { RANKED_PERMISSIONS } from "./permissions"


const BrowserTable: React.FC = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.permissionContainer} ><b>Permissions</b></div>
                {Object.keys(RANKED_PERMISSIONS).map(rank => {
                    const index = parseInt(rank)
                    return (
                        <div className={styles.permissionContainer} key={index}>
                            <CustomIcon 
                                fileName={RANKED_PERMISSIONS[index].icon}
                                height={32}
                                width={32}
                            />
                            <div className={styles.permissionName} >
                                {RANKED_PERMISSIONS[index].name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BrowserTable
