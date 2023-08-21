import React from 'react'
import styled from 'styled-components';

const Button = styled.button.attrs((props)=>{
    return{type:props.type||'button'}
})`
background: var(--primary);
border: none;
color: white;
padding: 0.25rem;
cursor: pointer;
`;

const BasicInput = styled.input.attrs((props) => {
    return { type: props.type || "text", placeholder:props.placeholder || `please enter value` };
})`
box-sizing: border-box;
padding: 0.5rem;
border: 2px solid #f2f4f8;
`;

const Form = () => {
  return (
    <div>
      <h2>some random stuff</h2>
      <Button>click me </Button>
      <form
        css={`
          width: 300px;
          background: #fff;
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <h2>Form</h2>
              <BasicInput type='email' placeholder='enter email'/>
              <Button>submit here</Button>
          </form>
    </div>
  );
}

export default Form;