import React from 'react'
import styles from '@/app/result.module.css'


const DrawNums = ({ draws }: { draws: number[] }) => {
    return (
        <>
            {
                draws.map((d, index) => <div className={styles.drawNum} key={index}>{d}</div>)
            }
        </>
    )
}

export default DrawNums