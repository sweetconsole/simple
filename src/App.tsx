import { type FC } from "react"
import {
	Header,
	Intro,
	Features,
	Products,
	Partners,
	New
} from "./components/widgets"
import "./assets/styles/general.scss"

const App: FC = () => {
	return (
		<>
			<Header />
			<Intro />
			<Features />
			<Products />
			<Partners />
			<New />
		</>
	)
}

export default App
