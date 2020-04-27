import React, { Fragment } from 'react';

import { useFetching } from './../../hooks/useFetching';

import { Spinner } from './../../components/Spinner/Spinner';
import { Info } from './../../components/Info/Info';
import { InfoModal } from './../../components/InfoModal/InfoModal';

export const WorldwideStats = () => {
	const [loading, data, error, setError] = useFetching('https://corona.lmao.ninja/v2/all');

	return (
		<Fragment>
			{error && <InfoModal isError text={`Ocurrió un error: ${error}`} onClick={() => setError(null)}/>}
			{loading ? <Spinner/> : <Info data={data}/> }
		</Fragment>
	)
};