import React, {Component} from 'react';
import {Button, Col, ListGroup, ListGroupItem, Row} from "reactstrap";
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import CocktailListItem from "../components/CocktailListItem/CocktailListItem";

import {fetchCocktails} from "../store/actions/cocktailsActions";

class Cocktails extends Component {
    componentDidMount() {
        this.props.fetchCocktails();
    }

    render() {
        return (
            <Row>
                <Col sm={12}>
                    <h2>
                        Cocktails
                        <Link to="/cocktails/new">
                            <Button
                                color="primary"
                                className="float-right"
                            >
                                Add cocktail
                            </Button>
                        </Link>
                    </h2>

                    {this.props.cocktails.map(cocktail => (
                        <CocktailListItem
                            key={cocktail._id}
                            _id={cocktail._id}
                            title={cocktail.title}
                            receipt={cocktail.receipt}
                            image={cocktail.image}
                            isPublished={cocktail.isPublished}
                            ingredients={cocktail.ingredients}
                        />
                    ))}
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    cocktails: state.cocktails.cocktails,
    user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
    fetchCocktails: () => dispatch(fetchCocktails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);
