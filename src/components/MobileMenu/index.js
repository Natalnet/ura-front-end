import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// import ArduinoLogo from '../../assets/arduino-circle.jpg'

import {
  Container,
  CloseButton,
  HeaderTitle,
  AulasContent,
  BottomContent,
  LoginCotent,
  ArrowLeft
} from './styles';

function MobileMenu({ open, setOpen }) {

  return <Container
    open={open}
    setOpen={() => setOpen(!open)}
    animate={open ? { scale: 1 } : { scale: 1.15, opacity: 5, transition: { when: 'beforeChildren', staggerChildren: 0.1 } }}


  >
    <CloseButton onClick={() => setOpen(false)} />
    <HeaderTitle>
      <h1>Aulas</h1>
    </HeaderTitle>

    <AulasContent>


      <div>
        <Link to="/webinar">
          <span />
          <p>Arduino</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>Python</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>P5JS</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>Módulo ESP</p>
        </Link>
      </div>
      <div>
        <Link to="/webinar">
          <span />
          <p>Webinar 1</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>webinar 2</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>webinar 3</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>webinar 4</p>
        </Link>
      </div>
    </AulasContent>
    <BottomContent>
      <div>
        <Link to="/"><p>Newsletter</p></Link>
        <Link to="/"><p>Lorem ipms</p></Link>
        <Link to="/"><p>Dolo ofer set</p></Link>
        <Link to="/"><p>Xeusque</p></Link>
      </div>
      <div>
        <Link to="/"><p>Dale</p></Link>
        <Link to="/"><p>Brehlelele</p></Link>
        <Link to="/"><p>dwawin</p></Link>
        <Link to="/"><p>Bnagbros</p></Link>
      </div>
    </BottomContent>

    <LoginCotent to="/profile" >
      <p >Meu Perfil</p>
      <ArrowLeft />
    </LoginCotent>


  </Container>
}

export default MobileMenu;