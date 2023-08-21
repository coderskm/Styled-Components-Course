import styled from 'styled-components';
import { colors, setupBorder } from "../utils";

const ComplexTitle = ({ title }) => {
  return (
      <Wrapper className='bg-grey'>
          <h1>{title}</h1>
      <div className='underline'></div>
      <div className='box'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: ${colors.primary};
    margin: 0 auto;
  }
  .box{
    height: 10px;
    border: ${setupBorder({width:5, type:`solid`, color:`green`})};
  }
`;

export default ComplexTitle;