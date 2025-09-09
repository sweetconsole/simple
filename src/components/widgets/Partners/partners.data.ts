import PartnerLogoOne from "../../../assets/images/sponsor_1.png"
import PartnerLogoTwo from "../../../assets/images/sponsor_2.png"
import PartnerLogoThree from "../../../assets/images/sponsor_3.png"
import PartnerLogoFour from "../../../assets/images/sponsor_4.png"
import type { PartnerType } from "./partner.type.ts"

export const partners: Array<PartnerType> = [
	{
		image: PartnerLogoOne,
		title: "Hahnemuhle",
		initial: { x: -100, opacity: 0 },
		whileInView: { x: 0, opacity: 1 }
	},
	{
		image: PartnerLogoTwo,
		title: "Canson",
		initial: { y: 100, opacity: 0 },
		whileInView: { y: 0, opacity: 1 }
	},
	{
		image: PartnerLogoThree,
		title: "Royal Talens",
		initial: { y: 100, opacity: 0 },
		whileInView: { y: 0, opacity: 1 }
	},
	{
		image: PartnerLogoFour,
		title: "Fabriano",
		initial: { x: 100, opacity: 0 },
		whileInView: { x: 0, opacity: 1 }
	}
]
