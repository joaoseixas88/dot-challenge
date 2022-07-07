import styled from 'styled-components';

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	border-radius: 3px;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.primaryPurple};
	color: ${({ theme }) => theme.colors.shape};
	font-size: 1rem;
`;
