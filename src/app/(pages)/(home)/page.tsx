"use client" 

import React from 'react'
import { PageSection } from '@pixelated-tech/components';

export default function Home() {
  return (
    <>
		<PageSection columns={1} maxWidth="1024px" id="header-section">
			<h1>__SITE_NAME__</h1>
			<p>Welcome to __SITE_NAME__</p>
		</PageSection>
    </>
  )
}
