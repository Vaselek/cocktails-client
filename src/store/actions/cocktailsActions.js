import axios from '../../axios-api';

export const FETCH_COCKTAILS_SUCCESS = 'FETCH_COCKTAILS_SUCCESS';
export const CREATE_COCKTAIL_SUCCESS = 'CREATE_COCKTAIL_SUCCESS';

export const fetchCocktailsSuccess = cocktails => ({type: FETCH_COCKTAILS_SUCCESS, cocktails});
export const createCocktailSuccess = () => ({type: CREATE_COCKTAIL_SUCCESS});


export const fetchCocktails = () => {
    console.log('sjflsjfljslkfjklsdjf')
    return dispatch => {
        let path = '/cocktails';
        console.log('sjdlfjslfjlsj')
        return axios.get(path).then(
            response => dispatch(fetchCocktailsSuccess(response.data))
        );
    };
};

export const createCocktail = cocktailData => {

    return (dispatch) => {
        debugger
        return axios.post('/cocktails', cocktailData).then(
            () => dispatch(createCocktailSuccess())
        );
    };
};
