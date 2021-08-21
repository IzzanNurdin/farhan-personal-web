import React from 'react'
import styled from 'styled-components'
import BNILogo from '../../../assets/logo/BNI-logo.svg'
import BNILogoWhite from '../../../assets/logo/BNI-logo-white.svg'
import UILogo from '../../../assets/logo/UI-logo.svg'
import UILogoWhite from '../../../assets/logo/UI-logo-white.svg'
import AgreeLogo from '../../../assets/logo/Agree-logo.svg'
import AgreeLogoWhite from '../../../assets/logo/Agree-logo-white.svg'
import { colors } from '../../colors'

const PortfolioBar = ({ activeCompany, setActiveCompany }) => {
  return (
    <Container>
      <MenuBar>
        <Label
          onClick={() => setActiveCompany('agree')}
          active={activeCompany === 'agree'}
        >
          {activeCompany === 'agree' ? (
            <AgreeLogoWhite width={113} />
          ) : (
            <AgreeLogo width={113} />
          )}
        </Label>
        <Label
          onClick={() => setActiveCompany('bni')}
          active={activeCompany === 'bni'}
        >
          {activeCompany === 'bni' ? (
            <BNILogoWhite width={113} />
          ) : (
            <BNILogo width={113} />
          )}
        </Label>
        <Label
          onClick={() => setActiveCompany('ui')}
          active={activeCompany === 'ui'}
        >
          {activeCompany === 'ui' ? (
            <UILogoWhite width={113} />
          ) : (
            <UILogo width={113} />
          )}
        </Label>
      </MenuBar>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border: 4px ${colors.blue100} solid;
  border-radius: 8px;
`

const Label = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? colors.blue100 : colors.white};
  align-items: center;
  width: 100%;
`

const MenuBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`

export default PortfolioBar
