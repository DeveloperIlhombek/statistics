import Image from 'next/image'
import React from 'react'

function Logo() {
	return (
		<div>
			<Image
				src={'/logo.png'}
				alt='logo'
				width={'80'}
				height={'80'}
				className='p-2'
			/>
		</div>
	)
}

export default Logo
