import ProductImageOne from "../../../assets/images/product_1.png"
import ProductImageTwo from "../../../assets/images/product_2.png"
import ProductImageThree from "../../../assets/images/product_3.png"
import ProductImageFour from "../../../assets/images/product_4.png"

export const products = [
	{
		image: ProductImageOne,
		title: "Упаковка",
		circulation: 20,
		description:
			"Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.",
		delay: 0.4
	},
	{
		image: ProductImageTwo,
		title: "Пакеты",
		circulation: 200,
		description:
			"С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.",
		delay: 0.6
	},
	{
		image: ProductImageThree,
		title: "Кейсы",
		circulation: 30,
		description:
			"Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.",
		delay: 0.8
	},
	{
		image: ProductImageFour,
		title: "Другие изделия ",
		circulation: 100,
		description:
			"Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.",
		delay: 1.0
	}
]
