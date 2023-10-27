import dynamic from 'next/dynamic'
import React, { useState } from 'react'

import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

const BookPage = () => {
  const { width } = useWindowDimensions()
  return (
    <div
      style={{
        height: '100vh',
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
        <Viewer
          fileUrl='/files/oblomov.pdf'
          defaultScale={width < 768 ? 0.5 : 1}
        />
      </Worker>
    </div>
  )
}
export default BookPage
