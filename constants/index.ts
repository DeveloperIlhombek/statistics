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
		label: 'Marifat',
		image: '/assets/site/marifat.png',
		url: 'http://marifat.uz/',
	},
	{ label: 'Kun uz', image: '/assets/site/kunuz.jpg', url: 'https://kun.uz/' },

	{
		label: 'Fanlar',
		image: '/assets/site/fanlaracademiyasi.png',
		url: 'https://www.academy.uz/',
	},
]

export const dataOfChart = [
	{ label: 'Maqolalar soni', count: '213' },
	{ label: 'Iboralar soni', count: '107' },
	{ label: 'Maqollar soni', count: '250' },
]

export const sourceOfsites = ['kun.uz', 'UzA', "Ma'rifat", 'Fanlar academiyasi']
