import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
// 'dd.mm.yyyy' formatidan 'Jun.2024' formatga o'tkazuvchi funksiya
export function formatDateToMonthYear(date: string): string {
	// Oylarning ingliz tilidagi qisqartirilgan nomlari ro'yxati
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]
	const parts = date.split('.')
	const monthIndex = parseInt(parts[1], 10) - 1
	const year = parts[2]

	return `${monthNames[monthIndex]}.${year}`
}
