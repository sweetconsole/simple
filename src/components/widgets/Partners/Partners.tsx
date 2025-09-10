import { type FC } from "react"
import { motion } from "framer-motion"
import { Container } from "../../ui"
import { partners } from "./partners.data.ts"
import styles from "./Partners.module.scss"

const Partners: FC = () => {
	return (
		<section className={styles.block} id="partners">
			<Container customStyles={styles.partners}>
				{partners.map((partner, index) => (
					<motion.a
						className={styles.partner}
						href={`https://${partner.link}`}
						target="_blank"
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
					</motion.a>
				))}
			</Container>
		</section>
	)
}

export default Partners
