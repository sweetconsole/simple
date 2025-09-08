import { type FC, type JSX } from "react"
import styles from "./Container.module.scss"

interface ContainerProps {
	children: JSX.Element | JSX.Element[]
	customStyles?: string
}

const Container: FC<ContainerProps> = ({ children, customStyles }) => {
	return (
		<div className={[styles.container, customStyles].join(" ")}>{children}</div>
	)
}

export default Container
