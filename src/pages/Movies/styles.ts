import styled from 'styled-components';

export const Container = styled.div`	
	display: grid;
	grid-template-columns: repeat(4,1fr);
	flex-wrap: wrap;
	gap: 2.2rem;

	@media (max-width: 600px) {
		grid-template-columns: repeat(2,1fr);
		gap: 1.5rem;
	}
	@media (min-width: 1220px) {
		grid-template-columns: repeat(5,1fr);

	}
`;
