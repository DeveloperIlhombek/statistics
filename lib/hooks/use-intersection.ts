import { useEffect, useState, RefObject } from 'react'

export function useIntersection(ref: RefObject<HTMLElement>, options = {}) {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const element = ref.current
		if (!element) return

		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible(entry.isIntersecting)
		}, options)

		observer.observe(element)

		return () => {
			if (element) observer.unobserve(element)
		}
	}, [ref, options])

	return isVisible
}
