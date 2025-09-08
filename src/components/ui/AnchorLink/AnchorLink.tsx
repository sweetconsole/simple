import { type FC, type JSX } from "react"
import { Link } from "react-scroll"
import styles from "./AnchorLink.module.scss"

interface AnchorLinkProps {
	anchor: string
	text?: string
	children?: JSX.Element | JSX.Element[]
	customStyles?: string
}

const AnchorLink: FC<AnchorLinkProps> = ({
	text,
	anchor,
	customStyles,
	children
}) => {
	return (
		<Link
			className={[styles.link, customStyles].join(" ")}
			to={anchor}
			smooth={true}
			offset={-100}
			duration={500}
		>
			{text}
			{children}
		</Link>
	)
}

export default AnchorLink
