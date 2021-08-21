import React from 'react'
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import styled from 'styled-components'
import { colors } from '../colors'

const ResumeComponent = () => {
  return (
    <Container>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer
          fileUrl="./portofolio_ffj.pdf"
          defaultScale={SpecialZoomLevel.PageFit}
        />
      </Worker>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${colors.blue100};
  height: 750px;
  width: 500px;
`

export default ResumeComponent
