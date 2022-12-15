import React, { useState, useEffect } from 'react'
import { AvatarImage, Card, CardContainer, LogoContainer, Container, GreetingCard, LeftContainer, LogoHeader, RightContainer, DateImage } from '../StyleComponent'
import Popup from 'react-animated-popup'

function MainComponent() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 1000);


  }, [])


  return (<>
    
    <Container>
      <LeftContainer>
        <Card>

    
          <GreetingCard />

        </Card>
       
      </LeftContainer>
      <RightContainer>

{!visible?<div style={{marginTop:'20%'}}></div>:""}

        <Popup className="hello" animationDuration={100} style={{
          height: '200px',
          borderRadius: '18px',
          width: '200px',
          padding: '2px',
          overflow: 'hidden',
          transitionTimingFunction: 'ease-out',
          transition: 'width 2s, height 2s, ease-out 6s',
        }}
          visible={visible} onClose={() => setVisible(false)}>
          <AvatarImage />
        </Popup>
        <LogoContainer>
          <LogoHeader />
        </LogoContainer>
        <div style={{marginTop:'80px'}}>
        <DateImage/>
      </div>
      </RightContainer>


    </Container>
  </>
  )
}

export default MainComponent