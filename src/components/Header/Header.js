import React from 'react';

import { Container, LogoContainer, Logo, TitleContainer, Title } from './styles.js';

import logoImage from './logo.png';

export const Header = () => {
	return (
		<Container>
			<LogoContainer>
				<Logo src={logoImage} alt="Carls13"/>
			</LogoContainer>
			<TitleContainer>
				<Title>COVID-19 Tracker</Title>
			</TitleContainer>
		</Container>
	)
};