import styled from 'styled-components';

export const Container = styled.header`
	display: grid;
	grid-template-columns: 1fr 5fr 1fr;
	align-items: center;
	height: 3.2rem;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primaryGreen};
	color: ${({ theme }) => theme.colors.shape};
	font-weight: bold;
	.logo{
		img{

			background-color: ${({ theme }) => theme.colors.primaryGray};
			border-radius: 1rem;
		}
	}
	div{
		display: flex;
		justify-content: center;
	}

	@media (max-width: 600px) {
			padding: 0 1rem;
		}

		@media (min-width: 1220px) {
		padding: 0 8rem;

	}

`;

export const SearchBox = styled.div`
	height: 2.5rem;
	color: ${({ theme }) => theme.colors.shape};
	color: ${({ theme }) => theme.colors.primaryGray};
	div{
		display: flex;
		align-items: center;
		padding: 0 .5rem;
		width: 40%;
		height: 100%;
		border-radius: 0.2rem;
		background-color: ${({ theme }) => theme.colors.shape};
		border: 1px solid ${({ theme }) => theme.colors.secondaryGreen};

		@media (max-width: 600px) {
			width: 80%;
		}
	}
	input{
		height: 100%;
		width: 100%;
		border: none;
		outline: none;
		
	}

`;

export const Icons = styled.div`
	display: flex;
	gap: 1.5rem;

	.total-notification{
		position: relative;
		top: -10px;
		right: 12px;
		display: flex;
		align-items: center;
		border-radius: 100px;
		padding: 0px 8px;
		background: ${({ theme }) => theme.colors.primaryYellow};
		color: ${({ theme }) => theme.colors.primaryBlack};
		font-size: 14px;
	}
`;
