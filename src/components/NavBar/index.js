import React from 'react';

import { Products, Developers, Company } from '../Content';
import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown';
import { Container, DropdownStyles, Login } from './styles';
import { FaArrowRight } from 'react-icons/fa'

function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Aulas"
                content={Products}
                backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="URA/letter"
                content={Developers}
                backgroundHeight={167}
              />
            </li>
            <li>
              <DropdownOption
                name="Perfil"
                content={Company}
                backgroundHeight={215}
              />
            </li>
          </ul>



        </Container>


        <DropdownRoot />

      </DropdownStyles>
    </DropdownProvider>
  );
}

export default Navbar;
