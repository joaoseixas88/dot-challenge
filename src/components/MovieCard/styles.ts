import styled from 'styled-components';

interface ImageProps{
	uri: string
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 18rem;
	width: 10rem;
	
	justify-content: center;
	
	.title-container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: .8rem 2rem;
		height: 29%;
		width: 100%;
		border-left: 2px solid ${({ theme }) => theme.colors.borderColor};
	border-right: 2px solid ${({ theme }) => theme.colors.borderColor};

		div{
				display: flex;
			}
		h3, h4, h5{
			text-align: center;
			align-items: center;
			
		}
	}

	.btn-container{
		display: flex;
		flex-grow: 1;
		height: 11%;
		width: 100%;
		justify-content: center;
	}
`;

export const Image = styled.div<ImageProps>`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	height: 60%;
	width: 100%;
	background-image: url(${(props) => props.uri});
	border-left: 2px solid ${({ theme }) => theme.colors.borderColor};
	border-right: 2px solid ${({ theme }) => theme.colors.borderColor};
	border-top: 2px solid ${({ theme }) => theme.colors.borderColor};
	background-repeat: no-repeat;
	background-position: center center;
	flex-wrap: wrap;
	overflow: hidden;
	color: ${({ theme }) => theme.colors.primaryGray};;
	padding: .4rem 0;

	.heart{
		display: flex;
		width: 100%;		
		justify-content: flex-end;
		padding: 0 10px;
	}
	
`;
