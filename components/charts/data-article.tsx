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
import { getPhrase } from '@/actions/ibora.action'
import { ScrollArea } from '../ui/scroll-area'
import { ArticleType, PhraseType } from '@/app.type'
import { IArticles } from '@/type'

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
	const [phrase, setPhrase] = React.useState<PhraseType[]>([])
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	)
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = React.useState({})
	const [filteredArticles, setFilteredArticles] = React.useState<IArticles[]>(
		[]
	)
	const [searchPhrase, setSearchPhrase] = React.useState<string>('') // Yangi state qo'shildi

	// Helper function to extract first three letters of each word in an array
	const getFirstThreeLetters = (words: string[]) =>
		words.map(word => word.slice(0, 3))

	// Fetch articles and phrases on component mount
	React.useEffect(() => {
		async function fetchArticleAndPhrase() {
			try {
				const articles = await getArticle()
				const phrases = await getPhrase()
				setData(articles || [])
				setPhrase(phrases)
			} catch (error) {
				throw new Error('Something went wrong when fetch articles')
			}
		}
		fetchArticleAndPhrase()
	}, [])

	// Memoized data processing for articles and phrases
	const processedArticles = React.useMemo(() => {
		return data.map(item => {
			const words = item.article.split(' ')
			return getFirstThreeLetters(words).join(' ')
		})
	}, [data])

	const processedPhrases = React.useMemo(() => {
		return phrase.map(item => {
			const words = item.phrase.split(' ')
			return getFirstThreeLetters(words).join(' ')
		})
	}, [phrase])

	// Filter by input phrase (searchPhrase)
	React.useEffect(() => {
		const matchingArticles = data.filter(
			article =>
				article.article.toLowerCase().includes(searchPhrase.toLowerCase()) // Saralash ibora orqali
		)
		setFilteredArticles(matchingArticles)
	}, [searchPhrase, data])

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
					placeholder='Filter maqol...'
					value={(table.getColumn('article')?.getFilterValue() as string) ?? ''}
					onChange={event =>
						table.getColumn('article')?.setFilterValue(event.target.value)
					}
					className='max-w-full '
				/>
				<Input
					placeholder='Filter ibora...'
					value={searchPhrase} // Input qiymatini `searchPhrase` bilan bog'lash
					onChange={event => setSearchPhrase(event.target.value)}
					className='max-w-full '
				/>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' className='ml-auto'>
							Columns <ChevronDownIcon className='ml-2 h-4 w-4' />
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
				<ScrollArea className='h-48'>
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
										No results.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</ScrollArea>
			</div>
		</div>
	)
}
