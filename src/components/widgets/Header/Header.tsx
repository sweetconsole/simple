import { type FC, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Logo from "../../../assets/images/dark_logo.svg"
import { Container, AnchorLink } from "../../ui"
import styles from "./Header.module.scss"

const Header: FC = () => {
	const [scroll, setScroll] = useState<number>(0)
	const [viewMenu, setViewMenu] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScroll(window.scrollY)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const changeViewMenu = () => {
		setViewMenu(!viewMenu)
	}

	const getStylesHeader = () => {
		if (scroll > 0) {
			return [styles.header, styles.header_scroll].join(" ")
		} else {
			return styles.header
		}
	}

	const getStylesMenu = () => {
		if (viewMenu) {
			return [styles.navigation, styles.navigation_active].join(" ")
		} else {
			return styles.navigation
		}
	}

	const getStylesButton = () => {
		if (viewMenu) {
			return [styles.button, styles.button_active].join(" ")
		} else {
			return styles.button
		}
	}

	return (
		<motion.header
			className={getStylesHeader()}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 1.0, duration: 0.4 }}
			viewport={{ once: true }}
		>
			<Container customStyles={styles.block}>
				<AnchorLink anchor="root">
					<img className={styles.logo} src={Logo} alt="simple" />
				</AnchorLink>

				<nav className={styles.navigation}>
					<AnchorLink text="Преимущества" anchor="features" />
					<AnchorLink text="Продукция" anchor="products" />
					<AnchorLink text="Партнеры" anchor="partners" />
					<AnchorLink text="Новинка" anchor="new" />
				</nav>

				<button className={getStylesButton()} onClick={changeViewMenu}></button>
			</Container>
		</motion.header>
	)
}

export default Header
