"use client" 

import React from 'react'
import { PageSection } from '@pixelated-tech/components';

export default function Home() {
  return (
    <>
		<PageSection columns={1} maxWidth="1024px" id="header-section">
			<h1>Pixelated Template</h1>
			<p>Welcome — this template is scaffolded using the Next.js App Router (src/app).</p>
			<p>Run <code>npm run setup && npm install && npm run dev</code> to get started.</p>
		</PageSection>
    </>
  )
}
