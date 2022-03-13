import React from 'react'

interface SectionHeaderProps {
    sectionTitle: string
    children?: any
}

const SectionHeader = ({ sectionTitle, children }: SectionHeaderProps) => {
    return (
	<div className='section-header'>
		<h2>{sectionTitle}</h2>
		{children}
	</div>
    )
}

export default SectionHeader