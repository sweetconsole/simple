import { type FC } from "react"
import { motion } from "framer-motion"
import { Container } from "../../ui"
import { partners } from "./partners.data.ts"
import styles from "./Partners.module.scss"
import { useMediaQuery } from "../../../hooks/useMediaQuery.ts"

const Partners: FC = () => {
	const isMobile = useMediaQuery("(max-width: 568px)")

	return (
		<section className={styles.block} id="partners">
			<Container customStyles={styles.partners}>
				{partners.map((partner, index) => (
					<motion.a
						className={styles.partner}
						href={`https://${partner.link}`}
						target="_blank"
						key={index}
						initial={isMobile ? undefined : { ...partner.initial }}
						whileInView={isMobile ? undefined : { ...partner.whileInView }}
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
