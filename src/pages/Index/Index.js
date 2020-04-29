import React, { useState } from 'react';

import { useFetching } from './../../hooks/useFetching';
import { usePagination } from './../../hooks/usePagination';

import { Container, CountriesSection, CountriesGrid } from './styles.js';

import { Filtering } from './../../components/Filtering/Filtering';
import { Pagination } from './../../components/Pagination/Pagination';
import { Country } from './../../components/Country/Country';
import { Spinner } from './../../components/Spinner/Spinner';
import { WorldwideStats } from './../../components/WorldwideStats/WorldwideStats';
import { CountryDetail } from './../../components/CountryDetail/CountryDetail';
import { InfoModal } from './../../components/InfoModal/InfoModal';

const COUNTRIES_PER_PAGE = 20;

const INITIAL_FILTERS = [
	{
		label: 'Country',
		param: 'country',
		value: ''
	}
];

export const Index = () => {
	const [loading, countries, error, setError] = useFetching('https://corona.lmao.ninja/v2/countries');
	const [countryDetail, setCountry] = useState(null);

	const [ paginatedData, 
			currentPage, 
			setCurrent, 
			handleChange, 
			handleClear,  
			filters] = usePagination(INITIAL_FILTERS, countries, COUNTRIES_PER_PAGE);

	return (
		<Container>
			{error && <InfoModal isError text={`Ocurrió un error: ${error}`} onClick={() => setError(null)}/>}
			{
				countryDetail && <CountryDetail data={countryDetail} onGoBack={() => setCountry(null)} />
			}
			<WorldwideStats/>
			{
				loading ? <Spinner/> : 
				<CountriesSection>
					<Filtering filters={filters} handleChange={handleChange} handleClear={handleClear}/>
					<CountriesGrid>
						{
							paginatedData.length > 0 && paginatedData[currentPage - 1].map((country, i) => {
								return <Country key={i} data={country} onDetailClick={() => setCountry(country)}/>
							})
						}
					</CountriesGrid>
					<Pagination 
					currentPage={currentPage} 
					data={paginatedData} 
					setPage={setCurrent}
					recordsPerPage={COUNTRIES_PER_PAGE}
					/>
				</CountriesSection>
			}
		</Container>
	)
};