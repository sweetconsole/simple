import { type FC } from "react"
import { motion } from "framer-motion"
import FeatureImageFour from "../../../assets/images/features_4.png"
import { Container } from "../../ui"
import styles from "./Features.module.scss"
import FeaturePoint from "./FeaturePoint/FeaturePoint.tsx"
import { features } from "./features.data.ts"

const Features: FC = () => {
	return (
		<section className={styles.block} id="features">
			<Container>
				<ul className={styles.features}>
					{features.map((feature, index) => (
						<FeaturePoint key={index} {...feature} />
					))}
				</ul>

				<div className={styles.content}>
					<motion.img
						className={styles.image}
						src={FeatureImageFour}
						alt="Ошибка загрузки..."
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1.0, duration: 0.4 }}
						viewport={{ once: true }}
					/>

					<div className={styles.info}>
						<motion.h2
							className={styles.title}
							initial={{ x: 100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.4 }}
							viewport={{ once: true }}
						>
							Максимальная белизна
						</motion.h2>
						<motion.p
							className={styles.text}
							initial={{ x: 100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.4 }}
							viewport={{ once: true }}
						>
							Для повышения белизны, гладкости и мягкости в состав бумажной
							массы вводят белые минеральные вещества: мел, тальк, каолин и др.
							Эта операция называется наполнением.
						</motion.p>
						<motion.p
							className={styles.text}
							initial={{ x: 100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.8, duration: 0.4 }}
							viewport={{ once: true }}
						>
							Отлив бумажного листа осуществляют на бумагоделательной машине,
							важнейшей частью которой является непрерывно движущаяся (как
							транспортер) металлическая или капроновая сетка.
						</motion.p>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Features
