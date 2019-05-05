import React, { Component } from 'react';
import {  Card, Jumbotron, Row, Col, Alert, Glyphicon , Container } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';

const style = {
    cardMain : {
        width: '18rem', 
        paddingTop:'6px', 
        paddingLeft: '6px', 
        paddingRight: '6px'
    },
    cardBody : {
        padding:'0', margin:'0', marginTop:'5px', marginBottom:'5px'
    },
    cardRow1Col1: {
        paddingTop:'5px', fontSize: '30px', whiteSpace:'nowrap'
    },
    cardRow1Col2: {
        textAlign:'center'
    },
    cardRateText: {
        fontWeight: '700', fontSize:'25px',padding:'5px', right:'0', marginBottom: '5px'
    },
    cardRow2Col1: {
        padding: '9px', paddingTop: '18px', backgroundColor:'#e1e2e3'
    },
    cardFooter: {
        borderSizing: 'border-box', margin: '0', marginTop: '5px', marginBottom: '5px', fontSize: '12px', border: '0', padding: '0'
    }
}

const formatRating = rating => {
    return rating? Number.parseFloat(rating).toFixed(1):'N/A';
}

const getRatingVariant = rating => {
    return rating >= 3.5 ? 'success': rating >= 2.5 ? 'warning' : 'danger';
}

export default class StyledCard extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.data)
    }
    render() {
        let { address, bathrooms, bedrooms, carSpaces, city, images, price, rating} = this.props.data;
        let decimalRating = formatRating(rating);
        console.log(rating);
        let ratingVariant = getRatingVariant(formatRating);

        return (
            <Card 
                id={this.props.id} 
                style={{ 
                    width: '100%', height:'100%', padding:'5px', minWidth:'20%',
                    flex:'1', transform: this.props.cardStyle.transform, 
                    transition: 'transform 700ms cubic-bezier(0.455, 0.03, 0.515, 0.955)' }}>
                <ImageCarousel 
                    images={images} 
                    imageSize={{height: undefined, width: undefined}}/>    
                <Card.Body 
                    style={{ padding:'0', margin:'0', marginTop:'5px', marginBottom:'5px'}}>
                    <Row>
                        <Col 
                            sm={7} xs={7} md={7} 
                            style={{borderSizing: 'border-box', textAlign:'center', paddingRight:'5px'}}>
                            <Alert 
                                variant='light'
                                style= {{
                                    padding: '1px', margin:'0px 0px 5px 0px', 
                                    color:'black', borderColor:'rgba(0,0,0,0.1)'}}>     
                                <span className="" style={{fontWeight: '700', fontSize:'37px', lineHeight:'95%'}}>
                                    <span style={{ fontSize:'25px'}}>$</span>{price}
                                </span>  
                                <br/>
                                <div style={{textAlign:'right', lineHeight:'95%'}}>
                                    <small style={{fontSize: '12px'}}>/ month</small>
                                </div>
                            </Alert>
                        </Col>
                        <Col 
                            sm={5} xs={5} md={5} 
                            style={{ borderSizing: 'border-box', paddingLeft: '5px', textAlign:'center'}}>
                            <Alert 
                                variant={ratingVariant}  
                                style={{ padding: '1px', margin:'0px 0px 5px 0px'}}>
                                <span className="" style={{ fontWeight: '700', fontSize:'40px', lineHeight:'95%'}}>
                                    {decimalRating}
                                </span>
                                <br/>
                                <div style={{textAlign:'right', lineHeight:'95%'}}>
                                    <small style={{fontSize: '12px'}}> out of 5</small>
                                </div>
                            </Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="address">
                            <Card.Text style={{backgroundColor:'#e1e2e3'}}>
                                {address}, {city}
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tags">
                            <Card.Text>
                                #tags
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer style={{ borderSizing: 'border-box', margin: '0', marginTop: '5px', marginBottom: '5px', fontSize: '12px', border: '0', padding: '0' }} >
                    <span className="bold" style={{ fontWeight: '700' }}>{bedrooms}</span>
                    <span className="classifier"> bed</span>
                    <span className="divider"> | </span>
                    <span className="bold"  style={{fontWeight:'700'}}>{bathrooms}</span>
                    <span className="classifier"> bath</span>
                    <span className="divider"> | </span>
                    <span className="bold" style={{ fontWeight: '700' }}>{carSpaces}</span>
                    <span className="classifier"> parkings</span>
                </Card.Footer>
            </Card>
        );
    }  
}
