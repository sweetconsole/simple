import FeatureImageOne from "../../../assets/images/features_1.png"
import FeatureImageTwo from "../../../assets/images/features_2.png"
import FeatureImageThree from "../../../assets/images/features_3.png"
import { type Feature } from "./features.types.ts"

export const features: Array<Feature> = [
	{
		image: FeatureImageOne,
		title: "Тактильность",
		description: "Бумагу приятно держать в руках",
		delay: 0.4
	},
	{
		image: FeatureImageTwo,
		title: "Прочность",
		description: "Выдерживают  высокую нагрузку",
		delay: 0.6
	},
	{
		image: FeatureImageThree,
		title: "Универсальность",
		description: "Упаковка под разные товары",
		delay: 0.8
	}
]
