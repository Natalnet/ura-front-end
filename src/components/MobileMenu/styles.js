import styled from 'styled-components';
import { MdClose } from 'react-icons/md'

export const Container = styled.div`
  display: ${({ open }) => open ? 'block' : 'none'};

  position: relative;
  width: 95%;
  height: 400px;
  border-radius: 4px;
  z-index: 50;
  top: 12px;
  margin: 0 auto;

  background: #fff;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);

  @media (min-width: 990px) {
    display: none;
  }

`;

export const CloseButton = styled(MdClose)`
  width: 36px;
  height: 36px;

  position: absolute;
  top: 5px;
  right: 5px;

  color: #5533ff;
`

export const HeaderTitle = styled.div`
  width: 100%;

  padding: 5px 10px;

  background: #ccc;

  h1 {
    color: #8898AA;
    font-size: 22px;
  }

`