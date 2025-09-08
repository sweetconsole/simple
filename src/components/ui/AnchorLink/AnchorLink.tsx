import { type FC } from "react"
import { Link } from "react-scroll"
import styles from "./AnchorLink.module.scss"

interface AnchorLinkProps {
	text: string
	anchor: string
	customStyles?: string
}

const AnchorLink: FC<AnchorLinkProps> = ({ text, anchor, customStyles }) => {
	return (
		<Link className={[styles.link, customStyles].join(" ")} to={anchor}>
			{text}
		</Link>
	)
}

export default AnchorLink
