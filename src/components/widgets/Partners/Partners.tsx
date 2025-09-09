import { type FC } from "react"
import { motion } from "framer-motion"
import { Container } from "../../ui"
import { partners } from "./partners.data.ts"
import styles from "./Partners.module.scss"

const Partners: FC = () => {
	return (
		<section className={styles.block} id="partners">
			<Container>
				<ul className={styles.partners}>
					{partners.map((partner, index) => (
						<motion.li
							className={styles.partner}
							key={index}
							initial={partner.initial}
							whileInView={partner.whileInView}
							transition={{ delay: 0.4, duration: 0.4 }}
							viewport={{ once: true }}
						>
							<img
								className={styles.logo}
								src={partner.image}
								alt={partner.title}
							/>
						</motion.li>
					))}
				</ul>
			</Container>
		</section>
	)
}

export default Partners
