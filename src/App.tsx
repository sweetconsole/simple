import { type FC } from "react"
import { Header, Intro, Features, Products } from "./components/widgets"
import "./assets/styles/general.scss"

const App: FC = () => {
	return (
		<>
			<Header />
			<Intro />
			<Features />
			<Products />
		</>
	)
}

export default App
