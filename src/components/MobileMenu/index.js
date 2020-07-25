import React from 'react';

import { Container, CloseButton } from './styles';

function MobileMenu({ open, setOpen }) {

  return <Container open={open} setOpen={() => setOpen(!open)}>
    <CloseButton onClick={() => setOpen(false)} />
  </Container>
}

export default MobileMenu;