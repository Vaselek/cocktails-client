import React from 'react';

import imageNotAvailable from '../../assets/images/image_not_available.png';
import {apiURL} from "../../constants";

const styles = {
    width: '100px',
    height: '100px',
    marginRight: '10px'
};

const CocktailThumbnail = props => {
    let image = imageNotAvailable;

    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
    }

    return <img src={image} style={styles} className="img-thumbnail" alt="Cocktail" />;
};

export default CocktailThumbnail;
