import { type TargetAndTransition } from "framer-motion"

export type PartnerType = {
	image: string
	title: string
	link: string
	initial: TargetAndTransition
	whileInView: TargetAndTransition
}
