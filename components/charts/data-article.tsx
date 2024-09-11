'use client'

import * as React from 'react'
import {
	CaretSortIcon,
	ChevronDownIcon,
	DotsHorizontalIcon,
} from '@radix-ui/react-icons'
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { getArticle } from '@/actions/maqola.action'
import { ScrollArea } from '../ui/scroll-area'
import { ArticleType } from '@/app.type'
import { IArticles } from '@/type'
import { PieChartComponent } from './pie-chart'
import Image from 'next/image'
import { BsTicketDetailed } from 'react-icons/bs'

export const columns: ColumnDef<ArticleType>[] = [
	{
		accessorKey: 'dataOfCreate',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Sana
					<CaretSortIcon className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className='lowercase'>{row.getValue('dataOfCreate')}</div>
		),
	},
	{
		accessorKey: 'source',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Manbaa
					<CaretSortIcon className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className='capitalize'>{row.getValue('source')}</div>
		),
	},

	{
		accessorKey: 'article',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Maqola
					<CaretSortIcon className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => {
			const formatArticle = row.getValue('article') as string

			const formatted = () => {
				if (formatArticle.length > 100) {
					return formatArticle.substring(0, 100) + '...'
				}
				return formatArticle
			}

			return <div>{formatted()}</div>
		},
	},

	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<DotsHorizontalIcon className='h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Qulayliklar</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.article)}
						>
							Maqoladan nusxa olish
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]

export function DataArticle() {
	const [sorting, setSorting] = React.useState<SortingState>([])
	const [data, setData] = React.useState<ArticleType[]>([])
	const [phrase, setPhrase] = React.useState<string>('')
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	)
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = React.useState({})
	const [filteredArticles, setFilteredArticles] = React.useState<IArticles[]>(
		[]
	)
	const [filterMaqol, setFilterMaqol] = React.useState<string>('') // Ikkinchi filter uchun

	// Fetch articles and phrases on component mount
	React.useEffect(() => {
		async function fetchArticleAndPhrase() {
			try {
				const articles = await getArticle()
				// const phrases = await getPhrase()
				setData(articles || [])
				// setPhrase(phrases)
			} catch (error) {
				throw new Error('Something went wrong when fetch articles')
			}
		}
		fetchArticleAndPhrase()
	}, [])

	// Filter by input phrase (searchPhrase)
	React.useEffect(() => {
		const matchingArticles = data.filter(article => {
			// Phrase va maqoladagi so'zlarni boshidagi 3 harf bilan taqqoslash
			const articleWords = article.article
				.split(' ')
				.map(word => word.slice(0, 3))
			const phraseWords = phrase.split(' ').map(word => word.slice(0, 3))

			// Agar maqoladagi so'zlarning boshidagi 3 harf phrase bilan mos kelsa, maqolani qabul qiladi
			return phraseWords.every(phraseWord =>
				articleWords.some(articleWord =>
					articleWord.toLowerCase().includes(phraseWord.toLowerCase())
				)
			)
		})

		setFilteredArticles(matchingArticles)
	}, [phrase, data])
	// Filter by second input (filterPhrase)
	React.useEffect(() => {
		const matchingArticles = data.filter(article => {
			return article.article.toLowerCase().includes(filterMaqol.toLowerCase())
		})

		setFilteredArticles(matchingArticles)
	}, [filterMaqol, data])

	const table = useReactTable({
		data: filteredArticles,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	})

	return (
		<div className='w-full'>
			<div className='mx-2 flex items-center py-4 gap-4'>
				<Input
					placeholder='Ibora izlash...'
					value={phrase} // Input qiymatini `phrase` bilan bog'lash
					onChange={event => setPhrase(event.target.value)}
					className='max-w-full ring-2'
				/>
				<Input
					placeholder='Maqol izlash...'
					value={filterMaqol}
					onChange={event => setFilterMaqol(event.target.value)}
					className='max-w-full ring-2'
				/>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' className='ml-auto'>
							Ustunlar <ChevronDownIcon className='ml-2 h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						{table
							.getAllColumns()
							.filter(column => column.getCanHide())
							.map(column => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className='capitalize'
										checked={column.getIsVisible()}
										onCheckedChange={value => column.toggleVisibility(!!value)}
									>
										{column.id}
									</DropdownMenuCheckboxItem>
								)
							})}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className='rounded-md border '>
				<ScrollArea className='h-40'>
					<Table>
						<TableHeader>
							{table.getHeaderGroups().map(headerGroup => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map(header => {
										return (
											<TableHead key={header.id}>
												{header.isPlaceholder
													? null
													: flexRender(
															header.column.columnDef.header,
															header.getContext()
													  )}
											</TableHead>
										)
									})}
								</TableRow>
							))}
						</TableHeader>
						<TableBody>
							{table.getRowModel().rows?.length ? (
								table.getRowModel().rows.map(row => (
									<TableRow
										key={row.id}
										data-state={row.getIsSelected() && 'selected'}
									>
										{row.getVisibleCells().map(cell => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										))}
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className='h-24 text-center'
									>
										Natijalar yo&apos;q
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</ScrollArea>
			</div>

			<div className='grid grid-cols-5 border rounded-md mt-4'>
				<div className='col-span-4'>
					<PieChartComponent articles={filteredArticles} />
				</div>
				<div className='flex flex-col'>
					<h2 className='text-wrap p-6 font-bold text-xl'>
						<BsTicketDetailed className='inline-block text-5xl mr-2 ' />
						Web-saytlarda qatnashgan qismini batafsil ko&apos;rish
					</h2>
					<Image
						src={'/assets/detailed.svg'}
						alt='detailed article'
						width={400}
						height={400}
						objectFit='cover'
					/>
					<Button className='w-fit m-auto relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-green-500 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-500'>
						Ma&apos;lumotni ko&apos;rish
					</Button>
				</div>
			</div>
		</div>
	)
}
