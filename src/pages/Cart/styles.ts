import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10rem;
	width: 100%;

	@media (max-width: 800px) {
		padding: 1rem;
	}
	
`;

export const Content = styled.div`
	display: flex;
	width: 100%;
	max-height: 20.5rem;
	gap: 8.8rem;
	margin-top: 2rem;

	@media (max-width: 800px) {
		flex-direction: column;
	}
	
`;

export const Form = styled.div`
display: flex;

flex-direction: column;
width: 100%;
gap: 2rem;

input{
	max-width: 23.5rem;
	height: 2.5rem;
}

div{
	max-width: 23.5rem;
	gap: 1.25rem;
	display: flex;
	flex-direction: row;
}

`;

export const CartContainer = styled.div`
	width: 100%;
`;
