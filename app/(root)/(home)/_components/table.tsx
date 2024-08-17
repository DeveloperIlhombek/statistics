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
import { Checkbox } from '@/components/ui/checkbox'
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

const data: Payment[] = [
	{
		id: 'm5gr84i9',
		tarif: 'defininition',
		status: 'success',
		maqol: "Aylanasi ovuli, To'garagi to'rkuni.",
	},
	{
		id: '3u1reuv4',
		tarif: 'defininition',
		status: 'success',
		maqol: 'Ayrilmagin elingdan, Quvvat ketar belingdan.',
	},
	{
		id: 'derv1ws0',
		tarif: 'defininition',
		status: 'processing',
		maqol: "Badqavm bo'lsang bo'l, Beqavm bo'lma. ",
	},
	{
		id: '5kma53ae',
		tarif: 'defininition',
		status: 'success',
		maqol: 'Baliq suv bilan tirik, Odam — el bilan.',
	},
	{
		id: 'bhqecj4p',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Begona tuproq — devona tuproq.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
	{
		id: 'bhqecj4pk',
		tarif: 'defininition',
		status: 'failed',
		maqol: 'Betkay ketar, bel qolar, Beklar ketar, el qolar.',
	},
]

export type Payment = {
	id: string
	tarif: string
	status: 'pending' | 'processing' | 'success' | 'failed'
	maqol: string
}

export const columns: ColumnDef<Payment>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Select all'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={value => row.toggleSelected(!!value)}
				aria-label='Select row'
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => (
			<div className='capitalize'>{row.getValue('status')}</div>
		),
	},
	{
		accessorKey: 'maqol',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Maqol
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => <div className='lowercase'>{row.getValue('maqol')}</div>,
	},
	{
		accessorKey: 'tarif',
		header: () => <div className='text-right'>tarif</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue('tarif'))

			// Format the amount as a dollar amount
			const formatted = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(amount)

			return <div className='text-right font-medium'>{formatted}</div>
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
							<MoreHorizontal className='h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.id)}
						>
							Copy payment ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]

export function DataTableDemo() {
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
		<div className='w-full'>
			<div className='text-5xl text-blue-500 my-4 text-center font-bold'>
				Maqolalarni qisqa ta&apos;riflari orqali izlang{' '}
			</div>
			<div className='flex items-center py-4'>
				<Input
					placeholder='Filter emails...'
					value={(table.getColumn('maqol')?.getFilterValue() as string) ?? ''}
					onChange={event =>
						table.getColumn('maqol')?.setFilterValue(event.target.value)
					}
					className='max-w-sm'
				/>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' className='ml-auto'>
							Columns <ChevronDown className='ml-2 h-4 w-4' />
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
										No results.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
			</ScrollArea>

			<div className='flex items-center justify-end space-x-2 py-4'>
				<div className='flex-1 text-sm text-muted-foreground'>
					{table.getFilteredSelectedRowModel().rows.length} of{' '}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
				{/* <div className='space-x-2'>
					<Button
						variant='secondary'
						size='sm'
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button
						variant='destructive'
						size='sm'
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</Button>
				</div> */}
			</div>
		</div>
	)
}
