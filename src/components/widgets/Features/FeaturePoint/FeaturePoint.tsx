import { type FC } from "react"
import { motion } from "framer-motion"
import styles from "./Feature.module.scss"
import type { Feature } from "../features.types.ts"

const FeaturePoint: FC<Feature> = ({ delay, image, title, description }) => {
	return (
		<motion.li
			className={styles.feature}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: delay, duration: 0.4 }}
			viewport={{ once: true }}
		>
			<img className={styles.image} src={image} alt="Ошибка загрузки..." />
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.description}>{description}</p>
			</div>
		</motion.li>
	)
}

export default FeaturePoint
