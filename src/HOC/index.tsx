import Footer from './Footer'
import Header from './Header'

export default function HeaderAndFooter(Component: React.ComponentType) {
	return (props: any) => (
		<>
			<Header />
			<Component {...props} />
			<Footer />
		</>
	)
}
