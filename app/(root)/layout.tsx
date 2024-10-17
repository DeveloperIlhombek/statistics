import { ChildProps } from '@/types'
import Footer from './_components/footer'

function Layout({ children }: ChildProps) {
	return (
		<main>
			<div className='container'>{children}</div>
			<Footer />
		</main>
	)
}

export default Layout
