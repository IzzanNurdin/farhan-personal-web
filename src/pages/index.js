import Head from 'next/head'
import React from 'react'
import styles from '../../styles/Home.module.css'
import { colors } from '../components/colors'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import HomeComponent from '../components/home'
import PortfolioComponent from '../components/portfolio'
import ResumeComponent from '../components/resume'
import AboutComponent from '../components/about'

export default function Home() {
  const [pageActive, setPageActive] = React.useState('home')
  const [activeCompany, setActiveCompany] = React.useState('agree')

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor:
          pageActive === 'portfolio' ? colors.white : colors.blue100,
      }}
    >
      <Head>
        <title>Farhan Fauzan's</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <Navbar pageActive={pageActive} setPageActive={setPageActive} />
        {pageActive === 'home' && (
          <HomeComponent
            setPageActive={setPageActive}
            setActiveCompany={setActiveCompany}
          />
        )}
        {pageActive === 'portfolio' && (
          <PortfolioComponent
            activeCompany={activeCompany}
            setActiveCompany={setActiveCompany}
          />
        )}
        {pageActive === 'resume' && <ResumeComponent />}
        {pageActive === 'about' && <AboutComponent />}
      </main>

      <footer className={styles.footer}>
        <Container>
          <FooterContainer>
            &copy; 2021{' '}
            <a
              href="https://id.linkedin.com/in/farhan-fauzan-jamaludin-a50a76129"
              target="_blank"
            >
              Linkedin
            </a>{' '}
            <a href="mailto:farhanf.jamaludin@gmail.com" target="_blank">
              Email
            </a>
          </FooterContainer>
        </Container>
      </footer>
    </div>
  )
}

const FooterContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 70%;
  max-width: 1080px;
`