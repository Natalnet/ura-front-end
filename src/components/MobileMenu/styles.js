import styled from 'styled-components';
import { MdClose } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: ${({ open }) => open ? 'block' : 'none'};

  position: relative;
  width: 95%;
  height: 477px;
  border-radius: 4px;
  z-index: 50;
  top: 12px;
  margin: 0 auto;

  background: #fff;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);

  @media (min-width: 990px) {
    display: none;
  }

  @media (max-width: 300px) {
    height: 753px;
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

  padding: 20px 15px;

  h1 {
    text-transform: uppercase;
    color: #8898AA;
    font-size: 17px;
    font-weight: bold;
  }
`

export const AulasContent = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px 15px;
  width: 100%;

  /* border-bottom: 1px solid #8898AA; */

  @media (max-width: 300px) {
    flex-direction: column;
  }


  div {
    width: 100%;

    display: flex;
    flex-direction: column;


    a {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 12px;

      transition: opacity 0.1s ease-in;

      &:hover {
        opacity: 0.7;
      }

      span {
        display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #80b9f9;

      }

      p {
        font-size: 18px;
        color: #424770;
        margin-left: 8px;
        font-weight: bold;
      }
    }
  }
`

export const Line = styled.div`
  width: 100%;
  height: 0.08px;
  
  background: #ccc;
  opacity: 0.9;
`

export const BottomContent = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px 15px;
  width: 100%;

  @media (max-width: 300px) {
    flex-direction: column;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;

    

    a {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 12px;

      &:hover {
        opacity: 0.7;
      }

      p {
        font-size: 18px;
        color: #424770;
        margin-left: 8px;
      }
    }
  }
`
export const LoginCotent = styled(Link)`
  width: 100%;
  padding: 20px 22px;
  background: #f6f9fc;

  transition: opacity 0.1s ease-in;

  &:hover {
    opacity: 0.7;
  }
  
  display: flex;
  flex-direction: row;

  align-items: center;

  p {
    font-size: 18px;
    color: #424770;
    font-weight: bold;
  }
`
export const ArrowLeft = styled(FaArrowRight)`
  height: 16px;
  width: 16px;
  margin-left: 6px;
  color: #424770;
`