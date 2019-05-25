import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody} from "reactstrap";
import CocktailThumbnail from "../CocktailThumbnail/CocktailThumbnail";
import {Link} from "react-router-dom";

const CocktailListItem = props => {
    return (
        <Card style={{marginTop: '10px'}}>
            <CardBody>
                <CocktailThumbnail image={props.image}/>
                <Link to={'/cocktails/' + props._id}>
                    Title: {props.title}
                </Link>
                <strong style={{marginLeft: '10px'}}>
                    <p>Recicpe: {props.receipt}</p>
                    <p>Ingredients: {props.ingredients.map(ing => (<span>ing</span>))}</p>
                    <p>{props.isPublished ? '' : <span>Your cocktail is waiting for moderation!</span>}</p>
                </strong>
            </CardBody>
        </Card>
    );
};

CocktailListItem.propTypes = {
    image: PropTypes.string,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default CocktailListItem;
