import React from 'react';

import { numberWithCommas, percentage } from './../../utils/formatNumber';

import { Container, Flag, CountryName, Continent, Info, Block, Title, Value, TodayTitle } from './styles.js';

import { Modal } from './../Modal/Modal.js';
import { Button } from './../Button/Button.js';

export const CountryDetail = ({ data, onGoBack }) => {
	const { country, 
			countryInfo, 
			cases, 
			deaths, 
			recovered, 
			tests, 
			continent, 
			todayCases, 
			todayDeaths,
			casesPerOneMillion,
			deathsPerOneMillion,
			testsPerOneMillion } = data;
	const { iso3, flag } = countryInfo;

	return (
		<Modal>
			<Container>
				<Flag src={flag} alt={country}/>
				<CountryName>{`${country} (${iso3 ? iso3 : '?'})`}</CountryName>
				<Continent>{continent}</Continent>
				<Info>
					<Block>
						<Title>Total cases: </Title>
						<Value>{numberWithCommas(cases)}</Value>
					</Block>
					<Block>
						<Title>Total tests: </Title>
						<Value>{numberWithCommas(tests)}</Value>
					</Block>
					<Block>
						<Title>Deaths: </Title>
						<Value>{numberWithCommas(deaths)}</Value>
					</Block>
					<Block>
						<Title>Recovered: </Title>
						<Value>{numberWithCommas(recovered)}</Value>
					</Block>
					<Block>
						<Title>Known Mortality: </Title>
						<Value>{percentage(deaths / (deaths + recovered))}</Value>
					</Block>
				</Info>
				<TodayTitle>TODAY</TodayTitle>
				<Info>
					<Block>
						<Title>New cases: </Title>
						<Value>{numberWithCommas(todayCases)}</Value>
					</Block>
					<Block>
						<Title>New deaths: </Title>
						<Value>{numberWithCommas(todayDeaths)}</Value>
					</Block>
				</Info>
				<TodayTitle>STATS PER ONE MILLION PEOPLE</TodayTitle>
				<Info>
					<Block>
						<Title>Cases: </Title>
						<Value>{numberWithCommas(casesPerOneMillion)}</Value>
					</Block>
					<Block>
						<Title>Tests: </Title>
						<Value>{numberWithCommas(testsPerOneMillion)}</Value>
					</Block>
					<Block>
						<Title>Deaths: </Title>
						<Value>{numberWithCommas(deathsPerOneMillion)}</Value>
					</Block>
				</Info>
				<Button text="Go back" handleClick={onGoBack} />
			</Container>
		</Modal>
	)
};