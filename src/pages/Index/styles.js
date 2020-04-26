import styled from 'styled-components';

export const Container = styled.div`
	margin: 10px;
	padding: 10px;
`;

export const CountriesSection = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CountriesGrid = styled.div`
	margin-top: 10px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;

	@media screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
	}
`;
