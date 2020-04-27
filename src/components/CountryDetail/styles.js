import styled from 'styled-components';

export const Container = styled.div`
	width: 95%;
	margin: 20px 0;
	padding: 20px 10px;
	display: flex;
	flex-direction: column;
`;

export const Flag = styled.img`
	display: block;
	margin: 10px auto;
	height: 20vh;

	@media screen and (max-width: 600px) {
		margin-top: 40vh;
	}
`;

export const CountryName = styled.h1`
	text-align: center;
`;

export const Continent = styled.h4`
	text-align: center;
	margin-bottom: 20px;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Block = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

export const Title = styled.h3`
	font-weight: bold;
	margin-right: 5px;
`;

export const Value = styled.h3`
`;


export const TodayTitle = styled.h2`
	text-align: center;
	margin-top: 25px;
`;