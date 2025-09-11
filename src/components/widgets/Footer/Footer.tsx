import { type FC } from "react"
import Logo from "../../../assets/images/light_logo.svg"
import { AnchorLink, Container } from "../../ui"
import styles from "./Footer.module.scss"
import { networks } from "./footer.data.ts"

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container customStyles={styles.block}>
				<AnchorLink anchor="root">
					<img className={styles.logo} src={Logo} alt="Simple" />
				</AnchorLink>

				<div className={styles.line}></div>

				<nav className={styles.networks}>
					{networks.map((network, index) => (
						<a
							className={styles.link}
							href={network.link}
							aria-label={network.title}
							key={index}
						>
							<network.icon />
						</a>
					))}
				</nav>
			</Container>
			<div className={styles.copyright}>
				Simple <span className={styles.highlighting}>®</span> 2021
			</div>
		</footer>
	)
}

export default Footer
