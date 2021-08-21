import React from 'react'
import styled from 'styled-components'
import Farhan from '../../assets/farhan-large.svg'
import { colors } from '../colors'
import about from '../../contents/about.json'

const AboutComponent = () => {
  return (
    <Container id="about">
      <Farhan width={'60%'} />
      <Text header>{about.header}</Text>
      <Text content>{about.content}</Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
  align-items: center;
  width: 70%;
  max-width: 1080px;
  margin: 0 auto;
`

const Text = styled.p`
  display: flex;
  padding: 20px;
  max-width: 80%;
  line-height: 24px;
  text-align: justify;
  font-weight: ${(props) => (props.content ? 500 : props.header ? 600 : null)};
  color: ${colors.white};
`

export default AboutComponent
