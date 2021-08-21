import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'

const PortfolioSubBar = ({ projects, setSelected, selected }) => {
  return (
    <Container>
      <MenuBar>
        {projects.map((project) => {
          return (
            <Label
              key={project.name}
              onClick={() => setSelected(project.name)}
              active={selected === project.name}
            >
              {project.name}
            </Label>
          )
        })}
      </MenuBar>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 80px;
  border-radius: 8px;
`

const Label = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  color: ${(props) => (props.active ? colors.gray02 : colors.gray04)};
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  border-bottom: ${(props) =>
    props.active ? `4px ${colors.yellow} solid` : `4px ${colors.white} solid`};
  align-items: center;
  width: 100%;
  max-width: fit-content;
`

const MenuBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`

export default PortfolioSubBar
