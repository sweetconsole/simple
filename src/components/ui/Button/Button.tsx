import { type FC } from "react"
import styles from "./Button.module.scss"

interface ButtonProps {
	text: string
	customStyles?: string
}

const Button: FC<ButtonProps> = ({ text, customStyles }) => {
	return (
		<button className={[styles.button, customStyles].join(" ")}>{text}</button>
	)
}

export default Button
