import React from 'react'
import styled from 'styled-components'
import Linkedin from '../../assets/logo/linkedin.svg'
import Email from '../../assets/logo/email.svg'
import Farhan from '../../assets/farhan.svg'
import BNILogo from '../../assets/logo/BNI-logo-white.svg'
import UILogo from '../../assets/logo/UI-logo-white.svg'
import AgreeLogo from '../../assets/logo/Agree-logo-white.svg'
import { colors } from '../colors'

const HomeComponent = ({ setPageActive, setActiveCompany }) => {
  return (
    <Container id="home">
      <HeaderContainer>
        <HeaderText>
          <HeaderTitle>
            Hi, I’m Farhan, a user-centered designer. I love designing
            experiences that are humane-centric yet delightful.
          </HeaderTitle>
          <HeaderSubtitle>
            Previously at <CompanyText>Telkom</CompanyText> and{' '}
            <CompanyText>Bank Negara Indonesia</CompanyText>
          </HeaderSubtitle>
          <HeaderIcons>
            <a
              href="https://id.linkedin.com/in/farhan-fauzan-jamaludin-a50a76129"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href="mailto:farhanf.jamaludin@gmail.com" target="_blank">
              <Email />
            </a>
          </HeaderIcons>
        </HeaderText>
        <HeaderPhoto>
          <Farhan />
        </HeaderPhoto>
      </HeaderContainer>
      <CompanyCard agree>
        <CompanyLogo>
          <AgreeLogo width={'100%'} />
        </CompanyLogo>
        <CompanyDetail>
          <h2>UX Designer at Agree Telkom</h2>
          <h3>Designing experiences for Indonesian Agriculture</h3>
          <ReadMore
            onClick={() => {
              setPageActive('portfolio')
              setActiveCompany('agree')
            }}
          >
            Read More
          </ReadMore>
        </CompanyDetail>
      </CompanyCard>
      <CompanyCard bni>
        <CompanyLogo>
          <BNILogo width={'100%'} />
        </CompanyLogo>
        <CompanyDetail>
          <h2>Web Dev at BNI New York Agency</h2>
          <h3>Creating information portal site for BNI NY Agency</h3>
          <ReadMore
            onClick={() => {
              setPageActive('portfolio')
              setActiveCompany('bni')
            }}
          >
            Read More
          </ReadMore>
        </CompanyDetail>
      </CompanyCard>
      <CompanyCard ui>
        <CompanyLogo>
          <UILogo width={'100%'} />
        </CompanyLogo>
        <CompanyDetail>
          <h2>Student at Universitas Indonesia</h2>
          <h3>Designing prototypes for courses and competitions</h3>
          <ReadMore
            onClick={() => {
              setPageActive('portfolio')
              setActiveCompany('ui')
            }}
          >
            Read More
          </ReadMore>
        </CompanyDetail>
      </CompanyCard>
    </Container>
  )
}

const Container = styled.div`
  width: 70%;
  max-width: 1080px;
  margin: 0 auto;
`

const HeaderContainer = styled.div`
  display: flex;
  height: 500px;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.div`
  color: ${colors.white};
  padding-right: 64px;
  width: 70%;
`
const HeaderTitle = styled.div`
  font-size: 30px;
  margin-bottom: 12px;
`

const HeaderSubtitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 12px;
`

const HeaderIcons = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
`

const HeaderPhoto = styled.div`
  border-radius: 16px;
  box-shadow: ${colors.yellow} -10px -10px;
`

const CompanyCard = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  border-radius: 16px;
  margin-bottom: 32px;
  padding: 48px;
  background-color: ${(props) =>
    props.agree
      ? colors.Agreegreen
      : props.bni
      ? colors.BNIorange
      : colors.UIbrown};
`
const CompanyDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  color: ${colors.white};
`
const ReadMore = styled.button`
  font: 400 16px 'Roboto', sans-serif;
  padding: 16px;
  color: ${colors.gray02};
  background: ${colors.white};
  border-radius: 8px;
  border: white;
  cursor: pointer;
`

const CompanyLogo = styled.div`
  display: flex;
  height: fill;
  width: 50%;
  align-items: center;
`

const CompanyText = styled.div`
  display: inline-flex;
  color: ${colors.yellow};
`

export default HomeComponent
