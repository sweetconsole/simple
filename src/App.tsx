import { type FC } from "react"
import { Header, Intro, Features } from "./components/widgets"
import "./assets/styles/general.scss"

const App: FC = () => {
	return (
		<>
			<Header />
			<Intro />
			<Features />
		</>
	)
}

export default App
