import * as C from './styles';
import UInumbers from '../../components/UInumbers';

type Props = {
  title: string;
  value: number;
  color?: string;
}

export const ResumeItem = ({ title, value, color}: Props) => {
  return(
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info >
        <UInumbers format='0.00' children={value} color={color}/>
      </C.Info>
    </C.Container>
  );
}