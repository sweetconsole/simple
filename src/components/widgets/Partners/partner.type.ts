import { type TargetAndTransition } from "framer-motion"

export type PartnerType = {
	image: string
	title: string
	initial: TargetAndTransition
	whileInView: TargetAndTransition
}
