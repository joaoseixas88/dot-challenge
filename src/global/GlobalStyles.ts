import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body {
  height:100%;
}

	button{
		border: none;
		cursor: pointer;
	}

	

	.routes{
		display: flex;
		justify-content: center;
		padding: 2.5rem 0;
		height: 10%;
	}
	
`;
