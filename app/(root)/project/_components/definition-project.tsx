import React from 'react'
import { motion } from 'framer-motion'

export default function DefinitionProject() {
	return (
		<div className='relative py-20'>
			{/* Background Effects */}
			<div className='absolute inset-0'>
				<div className='absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,197,253,0.2),transparent_40%)]' />
			</div>

			<div className='container relative mx-auto max-w-4xl px-4'>
				<motion.article
					className='prose prose-lg max-w-none dark:prose-invert lg:prose-xl'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent'
					>
						Statistika haqida
					</motion.h1>

					{['first', 'second', 'third'].map((key, index) => (
						<motion.p
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className='text-gray-600 dark:text-gray-300'
						>
							Statistika Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. A unde mollitia temporibus illo iste, omnis maiores ducimus
							vero veritatis deserunt distinctio obcaecati aliquid quam vel
							illum? Inventore suscipit et nobis!
						</motion.p>
					))}
				</motion.article>
			</div>
		</div>
	)
}
