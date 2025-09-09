import { type FC } from "react"
import { Container } from "../../ui"
import Product from "./Product/Product.tsx"
import styles from "./Products.module.scss"
import { products } from "./products.data.ts"

const Products: FC = () => {
	return (
		<section className={styles.block} id="products">
			<Container>
				<ul className={styles.products}>
					{products.map((product, index) => (
						<Product key={index} {...product} />
					))}
				</ul>
			</Container>
		</section>
	)
}

export default Products
