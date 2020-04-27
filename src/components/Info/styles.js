import styled from 'styled-components';

export const Div = styled.div`
    box-shadow: 1px 1px 5px 2px black;
    padding: 15px;
`;

export const Container = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

export const MainTitle = styled.h2`
	text-align: center;
	font-size: 40px;
`;

export const FirstDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	justify-content: center;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

export const SecondDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	justify-content: center;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

export const TodayTitle = styled.h3`
	text-align: center;
	margin-bottom: 25px;
	font-size: 30px;
`;

export const Block = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

export const Title = styled.h5`
	font-weight: bold;
	margin-right: 5px;
	font-size: 20px;
`;

export const Value = styled.h5`
	font-size: 20px;
`;


