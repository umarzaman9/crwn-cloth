import React from 'react'; 

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
	const Spinner =  ({ isLoading, ...otheProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>	
		) : (
			<WrappedComponent {...otheProps} />
		)
	}
return Spinner;
};
export default WithSpinner;