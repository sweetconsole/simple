import { type FC } from "react"
import { motion } from "framer-motion"
import styles from "./Product.module.scss"
import type { ProductType } from "../product.types.ts"

const Product: FC<ProductType> = ({
	image,
	title,
	circulation,
	description,
	delay
}) => {
	return (
		<motion.li
			className={styles.product}
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ delay: delay, duration: 0.4 }}
			viewport={{ once: true }}
		>
			<img className={styles.image} src={image} alt="Ошибка загрузки..." />
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.circulation}>Тираж: от {circulation} штук</p>
			<p className={styles.description}>{description}</p>
			<a className={styles.link}>Подробнее</a>
		</motion.li>
	)
}

export default Product
