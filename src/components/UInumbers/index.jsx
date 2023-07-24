
import * as C from './styles'
import React from 'react';
import numeral from 'numeral';

export function UInumbers({format, children, color}) {
  return (
      <C.uiFormat color={color}>
        R$ {numeral(children).format(format)}      
      </C.uiFormat>
  );
}

export default UInumbers;