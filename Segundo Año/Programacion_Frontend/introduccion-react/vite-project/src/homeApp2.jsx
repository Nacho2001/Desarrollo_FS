import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

export const HomeApp2 = () =>{
    return (
        <>
        <p>HomeApp nro 2</p>
        <Button>Amarillo</Button>
        </>
    )
}