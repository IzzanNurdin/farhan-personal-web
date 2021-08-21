import * as React from 'react'
import styled from 'styled-components'
import { colors } from './colors'
import Logo from '../assets/logo/FJLogo.svg'
import LogoWhite from '../assets/logo/FJLogoWhite.svg'

const Navbar = ({ pageActive, setPageActive }) => {
  const [isPortofolio, setIsPortofolio] = React.useState(false)

  React.useEffect(() => {
    if (pageActive) {
      setIsPortofolio(pageActive === 'portfolio')
    }
  }, [pageActive])
  return (
    <Bar>
      <Container>
        {isPortofolio ? <LogoWhite /> : <Logo />}
        <MenuBar>
          <Label
            isPortofolio={isPortofolio}
            pageActive={pageActive === 'home'}
            onClick={() => setPageActive('home')}
          >
            Home
          </Label>
          <Label
            isPortofolio={isPortofolio}
            pageActive={pageActive === 'portfolio'}
            onClick={() => setPageActive('portfolio')}
          >
            Portfolio
          </Label>
          <Label
            isPortofolio={isPortofolio}
            pageActive={pageActive === 'resume'}
            onClick={() => setPageActive('resume')}
          >
            Resume
          </Label>
          <Label
            isPortofolio={isPortofolio}
            pageActive={pageActive === 'about'}
            onClick={() => setPageActive('about')}
          >
            About
          </Label>
        </MenuBar>
      </Container>
    </Bar>
  )
}

const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 96px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  max-width: 1080px;
`

const Label = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  width: fit-content;
  color: ${(props) =>
    props.pageActive
      ? colors.yellow
      : props.isPortofolio
      ? colors.blue100
      : colors.white};
`

const MenuBar = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
`

export default Navbar
