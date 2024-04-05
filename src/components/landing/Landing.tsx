import { ScaffoldCard } from "@/components/common/styled-components/index"
import styles from './landing.module.css'

const Landing = () => {
    return(
        <ScaffoldCard className={styles.wrapper}>
            <div className={styles.left_wrapper}>
                <div className={styles.hello}>Hello,</div>
                <div id="name">I&apos;m Avinash Singh</div>
                <div id="niche">Web Dev | App Dev | AWS & Google Cloud</div>
                <button id="know-more"><a href="./resume.html">KNOW MORE</a></button>
            </div>
            <div className={styles.right_wrapper}>
                Image
            </div>
        </ScaffoldCard>
    )
}

export default Landing