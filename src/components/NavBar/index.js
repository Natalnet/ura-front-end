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
                name="Produtos"
                content={Products}
                backgroundHeight={286}
              />
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
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

            <li>
              <Login>
                <span>Login</span>
                <FaArrowRight />
              </Login>
            </li>
          </ul>



        </Container>


        <DropdownRoot />

      </DropdownStyles>
    </DropdownProvider>
  );
}

export default Navbar;
