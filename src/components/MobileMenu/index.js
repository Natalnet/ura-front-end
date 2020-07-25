import React from 'react';
import { Link } from 'react-router-dom'

import {
  Container,
  CloseButton,
  HeaderTitle,
  AulasContent,
  Line,
  BottomContent,
  LoginCotent,
  ArrowLeft
} from './styles';

function MobileMenu({ open, setOpen }) {

  return <Container open={open} setOpen={() => setOpen(!open)}>
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
          <p>Arduino</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>Arduino</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>Arduino</p>
        </Link>
      </div>
      <div>
        <Link to="/webinar">
          <span />
          <p>Arduino</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>Arduino</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>Arduino</p>
        </Link>
        <Link to="/webinar">
          <span />
          <p>Arduino</p>
        </Link>
      </div>
    </AulasContent>
    <Line />
    <BottomContent>
      <div>
        <Link to="/"><p>Contato</p></Link>
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