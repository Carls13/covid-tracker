import React from 'react';

import { Container, Flag, CountryName, Continent, Info, Block, Title, Value } from './styles.js';

import { Button } from './../Button/Button';

import { numberWithCommas } from './../../utils/formatNumber';

export const Country = ({ data, onDetailClick }) => {
	const { country, countryInfo, cases, deaths, recovered, tests, continent } = data;
	const { iso3, flag } = countryInfo;

	return (
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
			</Info>
			<Button text="Details" handleClick={onDetailClick} />
		</Container>
	)
};