'use client'

import * as React from 'react'
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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
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
import { ScrollArea } from '@/components/ui/scroll-area'
import { getPhrase } from '@/actions/ibora.action'
import { PhraseType } from '@/app.type'
import { AiOutlineFileSearch } from 'react-icons/ai'

export const columns: ColumnDef<PhraseType>[] = [
	{
		accessorKey: 'phrase',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Ibora
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className='lowercase'>{row.getValue('phrase')}</div>
		),
	},
	{
		accessorKey: 'description',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Ta&apos;rif
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className='lowercase'>{row.getValue('description')}</div>
		),
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
							<MoreHorizontal className='h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Qulayliklar:</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.phrase)}
						>
							Iboradan nusxa olish
						</DropdownMenuItem>
						<DropdownMenuSeparator />
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]

export function IboraTable() {
	const [data, setData] = React.useState<PhraseType[]>([])
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState<string | null>(null)

	React.useEffect(() => {
		async function fetchData() {
			try {
				const iboralar = await getPhrase()
				setData(iboralar)
			} catch (err) {
				setError('Maqollarni yuklashda xatolik yuz berdi.')
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [])

	const [sorting, setSorting] = React.useState<SortingState>([])
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	)
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = React.useState({})

	const table = useReactTable({
		data,
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
		<div className='flex flex-col items-center justify-center '>
			<h1 className='text-5xl text-blue-500 my-4 text-center font-bold tracking-widest'>
				<AiOutlineFileSearch className='inline-block mr-8 text-yellow-500' />
				Iboralar
			</h1>
			<h2 className='font-bold tracking-widest'>
				Bo&apos;shliqqa kiritilgan ta&apos;riflar orqali iboralarni izlang
			</h2>
			<div className='w-full'>
				<div className='flex items-center py-4'>
					<Input
						placeholder="Ta'riflar orqali qidiruv..."
						value={
							(table.getColumn('description')?.getFilterValue() as string) ?? ''
						}
						onChange={event =>
							table.getColumn('description')?.setFilterValue(event.target.value)
						}
						className='max-w-sm ring-1'
					/>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='outline' className='ml-auto'>
								Ustunlar <ChevronDown className='ml-2 h-4 w-4' />
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
											onCheckedChange={value =>
												column.toggleVisibility(!!value)
											}
										>
											{column.id}
										</DropdownMenuCheckboxItem>
									)
								})}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<ScrollArea className='h-96'>
					<div className='rounded-md border'>
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
											Natijalar
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</div>
				</ScrollArea>
				<div className='flex items-center justify-end space-x-2 py-4'>
					<div className='flex-1 text-sm text-muted-foreground'>
						{table.getFilteredRowModel().rows.length} ta ibora topildi
					</div>
					<div className='space-x-2'>
						<Button
							variant='outline'
							size='sm'
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							Oldingisi
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							Keyingisi
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
