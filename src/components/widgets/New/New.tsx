import { type FC } from "react"
import { motion } from "framer-motion"
import SketchbookImageDesktop from "../../../assets/images/sketchbook_desktop.png"
import SketchbookImageNotebook from "../../../assets/images/sketchbook_notebook.png"
import SketchbookImageTablet from "../../../assets/images/sketchbook_tablet.png"
import { Container, Button } from "../../ui"
import styles from "./New.module.scss"

const New: FC = () => {
	return (
		<section className={styles.block} id="new">
			<Container customStyles={styles.content}>
				<div className={styles.info}>
					<motion.h2
						className={styles.title}
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.4 }}
						viewport={{ once: true }}
					>
						Simple скетчбук
					</motion.h2>

					<motion.p
						className={styles.description}
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.4 }}
						viewport={{ once: true }}
					>
						80 листов, твердая обложка, бумага Fabriano 200 г/м2. Подойдет и для
						графики и для акварели. Для самых смелых творческих замыслов!
					</motion.p>

					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.4 }}
						viewport={{ once: true }}
					>
						<Button text="Купить" />
					</motion.div>
				</div>

				<motion.picture
					className={styles.image}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 1.0, duration: 0.4 }}
					viewport={{ once: true }}
				>
					<source srcSet={SketchbookImageTablet} media="(max-width: 576px)" />
					<source srcSet={SketchbookImageNotebook} media="(max-width: 768px)" />
					<img src={SketchbookImageDesktop} alt="Ошибка загрузки..." />
				</motion.picture>
			</Container>
		</section>
	)
}

export default New
