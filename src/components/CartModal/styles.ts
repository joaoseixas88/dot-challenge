import styled from 'styled-components';

interface ContainerProps{
	visibility: boolean
}

export const Container = styled.div<ContainerProps>`
	
	background: ${({ theme }) => theme.colors.shape};

	position: absolute;
	top: 3.2rem;
	width: 17.5rem;
	margin-right: 13.3rem;
	height: 94%;
	visibility: ${({ visibility }) => (visibility ? '' : 'hidden')};
	border: 2px solid ${({ theme }) => theme.colors.borderColor};

	
	color: ${({ theme }) => theme.colors.textColor};
	
	#empty-button{		
		color: ${({ theme }) => theme.colors.primaryPurple};
		border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryPurple};
	}

`;

export const Content = styled.div`
	position: relative;
	flex-grow: 1 ;
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: space-around;
	flex-direction: column;
	padding: 16px 12px;
	

	.title-container{
		width: 100%;	
		align-items: center;
		justify-content: space-between;
		

	}

	.cards-container{
		width: 100%;
		display: flex;
		gap: 12px;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding: 1rem 0;
		flex-grow: 1 ;
	}

	.total-container{
		width: 100%;
		justify-content: space-between;
		padding: 1rem 0;
	}

	.btn-container{
		height: 2.5rem;
	}


`;
