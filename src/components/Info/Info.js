import React from 'react';

import { Div, Container, MainTitle, FirstDiv, Block, Title, Value, SecondDiv, TodayTitle } from './styles.js';

import { numberWithCommas } from './../../utils/formatNumber';

export const Info = ({ data }) => {
	const { cases, todayCases, todayDeaths, deaths, recovered, tests, affectedCountries } = data;

	return (
		<Div>
			<MainTitle>How is the world?</MainTitle>	
			<Container>
				<FirstDiv>
					<Block>
						<Title>Total cases: </Title>
						<Value>{numberWithCommas(cases)}</Value>
					</Block>
					<Block>
						<Title>Total tests: </Title>
						<Value>{numberWithCommas(tests)}</Value>
					</Block>
					<Block>
						<Title>Total deaths: </Title>
						<Value>{numberWithCommas(deaths)}</Value>
					</Block>
					<Block>
						<Title>Total recovered: </Title>
						<Value>{numberWithCommas(recovered)}</Value>
					</Block>
				</FirstDiv>
				<SecondDiv>
					<TodayTitle>TODAY</TodayTitle>
					<Block>
						<Title>New cases: </Title>
						<Value>{numberWithCommas(todayCases)}</Value>
					</Block>
					<Block>
						<Title>New deaths: </Title>
						<Value>{numberWithCommas(todayDeaths)}</Value>
					</Block>
					<Block>
						<Title>Affected countries: </Title>
						<Value>{affectedCountries}</Value>
					</Block>
				</SecondDiv>
			</Container>
		</Div>
	)
};