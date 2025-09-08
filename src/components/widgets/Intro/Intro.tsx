import { type FC } from "react"
import { motion } from "framer-motion"
import IntroImageDesktop from "../../../assets/images/intro_desktop.png"
import IntroImageNotebook from "../../../assets/images/intro_notebook.png"
import IntroImageTablet from "../../../assets/images/intro_tablet.png"
import { Container, Button, AnchorLink } from "../../ui"
import styles from "./Intro.module.scss"

const Intro: FC = () => {
	return (
		<section className={styles.intro}>
			<Container customStyles={styles.block}>
				<div className={styles.info}>
					<motion.h1
						className={styles.title}
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.4 }}
						viewport={{ once: true }}
					>
						Простые вещи Из бумаги
					</motion.h1>
					<motion.p
						className={styles.description}
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.4 }}
						viewport={{ once: true }}
					>
						Бума́га (предположительно от итал. bombagia, первоисточником же
						считается иранский) — волокнистый материал с минеральными добавками.
					</motion.p>

					<AnchorLink anchor="products">
						<motion.div
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.4 }}
							viewport={{ once: true }}
						>
							<Button text="Каталог" />
						</motion.div>
					</AnchorLink>
				</div>

				<motion.picture
					className={styles.image}
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.4 }}
					viewport={{ once: true }}
				>
					<source srcSet={IntroImageTablet} media="(max-width: 576px)" />
					<source srcSet={IntroImageNotebook} media="(max-width: 768px)" />
					<img src={IntroImageDesktop} alt="Error loading..." />
				</motion.picture>
			</Container>
		</section>
	)
}

export default Intro
