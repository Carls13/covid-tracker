import React from 'react';

import { Container, Flag, CountryName, Continent, Info, Block, Title, Value } from './styles.js';

import { Button } from './../Button/Button';

export const Country = ({ data }) => {
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
					<Value>{cases}</Value>
				</Block>
				<Block>
					<Title>Total tests: </Title>
					<Value>{tests}</Value>
				</Block>
				<Block>
					<Title>Deaths: </Title>
					<Value>{deaths}</Value>
				</Block>
				<Block>
					<Title>Recovered: </Title>
					<Value>{recovered}</Value>
				</Block>
			</Info>
			<Button text="Details" handleClick={() => console.log('Cominnng')} />
		</Container>
	)
};