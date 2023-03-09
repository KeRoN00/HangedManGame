import styles from '../styles.module.css'

export type HangedManParts = {
    partId: number,
    isShown: boolean,
}


const HangedManPart:React.FC<HangedManParts> = ({partId, isShown}) => {
    return (
        <div className={`${styles.imagePart} ${styles[`part${partId}`]} ${isShown ? '' : styles.none}`}/>
    )
}
export default HangedManPart