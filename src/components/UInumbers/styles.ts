import styled from 'styled-components';

export const uiFormat = styled.span< {color: String} > `
  color: ${props => props.color ?? '#000'};
`;