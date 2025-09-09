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
					<h2 className={styles.title}>Simple скетчбук</h2>
					<p className={styles.description}>
						80 листов, твердая обложка, бумага Fabriano 200 г/м2. Подойдет и для
						графики и для акварели. Для самых смелых творческих замыслов!
					</p>
					<Button text="Купить" />
				</div>

				<motion.picture
					className={styles.image}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.4 }}
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
