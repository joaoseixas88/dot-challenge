import { Container } from './styles';

interface InputProps{
	placeholder?:string
}

export default function Input({ placeholder }: InputProps) {
  return (
    <Container placeholder={placeholder} />
  );
}
