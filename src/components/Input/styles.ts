import styled from 'styled-components';

export const Container = styled.input`
	width: 100%;
	border: 2px solid ${({ theme }) => theme.colors.borderColor};
	border-radius: 4px;
	padding: 0 .8rem;
`;
