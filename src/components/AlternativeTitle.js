import styled from "styled-components";
import { colors } from "../utils";
import React from 'react'


export const AlternativeTitle = ({title, className}) => {
  return (
      <div className={className}>
          <h1>{title}</h1>
          <div className="underline"></div>
    </div>
  )
}

const Wrapper = styled(AlternativeTitle)`
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
`;

export default Wrapper;