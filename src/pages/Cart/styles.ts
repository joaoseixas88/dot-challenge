import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 5.1rem 0 7.5rem;
	width: 100%;
	height: 100%;

	
	table{
		width: 22.6rem;
		border-collapse: collapse; 
		
		td{
			border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
			padding: 8px 0;
		}

	}

	@media (max-width: 800px) {
		padding: 1rem;
	}

	@media (min-width: 1220px) {
		padding: 0 12rem 0 15rem;

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

/* .table-container{
	height: 18.5rem;
	overflow: scroll;	
} */
	
`;

export const Form = styled.div`
display: flex;

flex-direction: column;
width: 100%;
gap: 2rem;

input{
	max-width: 23.5rem;
	height: 2.5rem;
	@media (min-width: 1220px) {
		max-width: 30rem;
	}
}

div{
	max-width: 23.5rem;
	gap: 1.25rem;
	display: flex;
	flex-direction: row;

	@media (min-width: 1220px) {
		max-width: 30rem;
	}
}

`;

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;

	.total-container{
		display: flex;
		width: 22.6rem;
		align-items: center;
		justify-content: space-between;
		margin-top: 1.8rem;
		margin-bottom: 3.1rem;
	}

	button{
		width: 22.6rem;
		height: 2.5rem;
		margin-bottom: 4rem;
	}
`;
