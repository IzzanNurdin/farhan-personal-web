import React from 'react'
import styled from 'styled-components'
import PortfolioBar from './components/PortfolioBar'
import portfolio from '../../contents/portfolio.json'
import PortfolioSubBar from './components/PortfolioSubBar'

const PortfolioComponent = ({ activeCompany, setActiveCompany }) => {
  const [data, setData] = React.useState(portfolio[activeCompany])
  const [selectedContent, setSelectedContent] = React.useState(
    data.projects[0].name
  )
  const [contents, setContents] = React.useState(
    data.projects.filter((obj) => {
      return obj.name === selectedContent
    })
  )

  React.useMemo(() => {
    setSelectedContent(data.projects[0].name)
  }, [data])

  React.useMemo(async () => {
    await setData(portfolio[activeCompany])
    setContents(
      data.projects.filter((obj) => {
        return obj.name === selectedContent
      })
    )
  }, [selectedContent, activeCompany, portfolio, data])

  return (
    <Container>
      <PortfolioBar
        activeCompany={activeCompany}
        setActiveCompany={setActiveCompany}
      />
      <Subtitle>{data.subtitle}</Subtitle>
      <PortfolioSubBar
        projects={data.projects}
        setSelected={setSelectedContent}
        selected={selectedContent}
      />
      <ContentContainer>
        {contents &&
          contents[0] &&
          contents[0].contents.map((content, idx) =>
            content.component !== 'img' ? (
              <content.component key={content + idx}>
                {content.content}
              </content.component>
            ) : (
              <content.component key={content + idx} url={content.content} />
            )
          )}
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 48px;
  width: 70%;
  max-width: 1080px;
  margin: 0 auto;
`

const ContentContainer = styled.div`
  padding-top: 24px;
`

const Subtitle = styled.div`
  padding: 48px;
`

export default PortfolioComponent
