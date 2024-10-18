import {
	GaugeCircle,
	MessageSquareMore,
	Newspaper,
	Notebook,
	Settings2,
} from 'lucide-react'

export const navLink = [
	{ name: 'Bosh sahifa', route: '/' },
	{ name: 'Muallif', route: '/author' },
	{ name: 'Loyiha haqida', route: '/project' },
	{ name: 'Aloqa', route: '/contact' },
]

export const instructorNavLinks = [
	{
		label: 'Dashboard',
		route: '/admin',
		icon: GaugeCircle,
	},
	{
		label: "Maqola qo'shish",
		route: '/admin/maqola',
		icon: Newspaper,
	},
	{
		label: "Ibora qo'shish",
		route: '/admin/ibora',
		icon: MessageSquareMore,
	},
	{
		label: "Maqol qo'shish",
		route: '/admin/maqol',
		icon: Notebook,
	},
	{
		label: 'Sozlamalar',
		route: '/admin/sozlamalar',
		icon: Settings2,
	},
]

export const listOfsite = [
	{ label: 'UzA', image: '/assets/site/uza.png', url: 'https://uza.uz' },
	{
		label: 'edu.uz',
		image: '/assets/site/edu.png',
		url: 'https://edu.uz/uz#gsc.tab=0',
	},
	{
		label: 'natlib.uz',
		image: '/assets/site/natlib.png',
		url: 'https://www.natlib.uz/',
	},

	{
		label: 'edu.profedu.uz',
		image: '/assets/site/proedu.svg',
		url: 'https://edu.profedu.uz/',
	},
	{
		label: 'ziyouz.uz',
		image: '/assets/site/ziyouz.png',
		url: 'https://ziyouz.uz/yangiliklar/',
	},
]

export const dataOfChart = [
	{ label: 'Maqolalar soni', count: '213' },
	{ label: 'Iboralar soni', count: '107' },
	{ label: 'Maqollar soni', count: '250' },
]

export const sourceOfsites = [
	'edu.uz',
	'UzA',
	'natlib',
	'edu.profedu.uz',
	'ziyouz.uz',
]
