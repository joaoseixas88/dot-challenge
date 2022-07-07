import React from 'react';
import { Container } from './styles';

type Props = {
	label: string;
	onClick: () => void
}

export function PrimaryButton({ label, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      {label}
    </Container>
  );
}
