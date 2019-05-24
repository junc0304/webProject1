import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Alert, Table } from 'react-bootstrap';
import ImageCarousel from './CardImage';
import moment from 'moment';

//card template
class DefaultCard extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.data = this.props.data;
    this.state={
      currentData :null
    }
    this.cardBody = this.cardBody.bind(this);
    this.cardFooter = this.cardFooter.bind(this);
    this.style = this.style.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  style() {
    return ({
        cardContainer: {
          width: '250px', height: '100%', padding: '5px', minWidth: '230px', margin: "0px 10px 0px 10px",
          float: 'left !important', position: 'relative', display: 'inline-block', 
          left: '0', clear: 'both', verticalAlign: 'top', transition: 'transform .3s ease'
        },
        cardBody: {
          padding: '0', margin: '0', marginTop: '5px', marginBottom: '5px'
        },
        cardFooter: {
          borderSizing: 'border-box', margin: '0', marginTop: '5px',
          marginBottom: '5px', fontSize: '12px', border: '0', padding: '0'
        }
    });
  }
  cardBody() {
    return (
      <div>default Body</div>
    );
  }
  cardFooter() {
    return (
      <div>default footer</div>
    );
  }

  handleClick(data) {
    this.setState({currentData: data});
    return (
      alert(`Card-${data} Clicked`)
    )
  }

  render() {
    return (
      <Card
        onClick={() => this.handleClick(this.data)}
        id={this.id}
        style={this.style().cardContainer}>
        <ImageCarousel
          images={this.data.images}
          style={{ position: 'relative' }} />
        <Card.Body
          style={this.style().cardBody}>
          {this.cardBody()}
        </Card.Body>
        <Card.Footer
          style={this.style().cardFooter} >
          {this.cardFooter()}
        </Card.Footer>
      </Card>
    );
  }
}

export class RentCard extends DefaultCard {
  roundedRating() {
    if (this.data.rating) {
      return Number.parseFloat(this.data.rating).toFixed(1)
    }
    return 'N/A';
  }
  ratingColorControl() {
    let rating = this.roundedRating();
    switch (rating) {
      case (rating >= 3.5):
        return 'success'
      case (rating >= 2.5):
        return 'warning'
      case (rating >= 0):
        return 'danager'
      default:
        return 'lignt'
    }
  }
  cardBody() {
    return (
      <Fragment>
        <Row className="first-item-row">
          <Col sm={7} xs={7} md={7}
            style={{ borderSizing: 'border-box', textAlign: 'center', paddingRight: '5px' }}>
            <Alert
              variant='light'
              style={{ padding: '1px', margin: '0px 0px 5px 0px', color: 'black', borderColor: 'rgba(0,0,0,0.1)' }}>
              <span className="" style={{ fontWeight: '700', fontSize: '37px', lineHeight: '95%' }}>
                <span style={{ fontSize: '25px' }}>$</span>
                {this.props.data.price}</span>
              <br />
              <div style={{ textAlign: 'right', lineHeight: '95%' }}>
                <small style={{ fontSize: '12px' }}>/ month</small>
              </div>
            </Alert>
          </Col>
          <Col sm={5} xs={5} md={5}
            style={{ borderSizing: 'border-box', paddingLeft: '5px', textAlign: 'center' }}>
            <Alert
              variant={this.ratingColorControl()}
              style={{ padding: '1px', margin: '0px 0px 5px 0px' }}>
              <span className="" style={{ fontWeight: '700', fontSize: '40px', lineHeight: '95%' }}>
                {this.roundedRating()}
              </span>
              <br />
              <div style={{ textAlign: 'right', lineHeight: '95%' }}>
                <small style={{ fontSize: '12px' }}> out of 5</small>
              </div>
            </Alert>
          </Col>
        </Row>
        <Row className="second-item-row">
          <Col className="address">
            <Card.Text style={{ backgroundColor: '#e1e2e3' }}>{this.props.data.address}, {this.props.data.city} </Card.Text>
          </Col>
        </Row>
        <Row className="third-item-row">
          <Col className="tags">
            <Card.Text> #tags </Card.Text>
          </Col>
        </Row>
      </Fragment>
    );
  }
  cardFooter() {
    return (
      <div>
        <span className="bold" style={{ fontWeight: '700' }}>{this.props.data.bedrooms}</span>
        <span className="classifier"> bed</span>
        <span className="divider"> | </span>
        <span className="bold" style={{ fontWeight: '700' }}>{this.props.data.bathrooms}</span>
        <span className="classifier"> bath</span>
        <span className="divider"> | </span>
        <span className="bold" style={{ fontWeight: '700' }}>{this.props.data.carSpaces}</span>
        <span className="classifier"> parkings</span>
      </div>
    );
  }
}


export class MarketCard extends DefaultCard {
  cardBody() {
    return (
      <Fragment>
        <Row>
          <Col
            sm={7} xs={7} md={7}
            style={{ borderSizing: 'border-box', textAlign: 'center', paddingRight: '5px' }}>
            <Alert
              variant='light'
              style={{
                padding: '1px', margin: '0px 0px 5px 0px',
                color: 'black', borderColor: 'rgba(0,0,0,0.1)'
              }}>
              <span className="" style={{ fontWeight: '700', fontSize: '37px', lineHeight: '95%' }}>
                <span style={{ fontSize: '25px' }}>$</span>{this.props.data.price}
              </span>
              <br />
              <div style={{ textAlign: 'right', lineHeight: '95%' }}>
                <small style={{ fontSize: '12px' }}>/ month</small>
              </div>
            </Alert>
          </Col>
          <Col
            sm={5} xs={5} md={5}
            style={{ borderSizing: 'border-box', paddingLeft: '5px', textAlign: 'center' }}>
            <Alert
              variant={this.ratingColorControl()}
              style={{ padding: '1px', margin: '0px 0px 5px 0px' }}>
              <span className="" style={{ fontWeight: '700', fontSize: '40px', lineHeight: '95%' }}>
                {this.roundedRating()}
              </span>
              <br />
              <div style={{ textAlign: 'right', lineHeight: '95%' }}>
                <small style={{ fontSize: '12px' }}> out of 5</small>
              </div>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col className="address">
            <Card.Text style={{ backgroundColor: '#e1e2e3' }}>
              {this.props.data.address}, {this.props.data.city}
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
      </Fragment>
    );
  }
  cardFooter() {
    return (
      <div>
        <span className="bold" style={{ fontWeight: '700' }}>{this.props.data.bedrooms}</span>
        <span className="classifier"> bed</span>
        <span className="divider"> | </span>
        <span className="bold" style={{ fontWeight: '700' }}>{this.props.data.bathrooms}</span>
        <span className="classifier"> bath</span>
        <span className="divider"> | </span>
        <span className="bold" style={{ fontWeight: '700' }}>{this.props.data.carSpaces}</span>
        <span className="classifier"> parkings</span>
      </div>
    );
  }
}

export class MeetupCard extends DefaultCard {
  countAttendee() {
    let numOfJoins = this.props.data.attendance || 23;
    return (
      <Alert
        variant='light'
        style={{ padding: '0px 0px 0px 5px', margin: '0px 0px 5px 0px' }}>
        <div style={{ textAlign: 'left', lineHeight: '60%' }}>
           <small style={{ fontSize: '12px' }}><br/></small>
        </div>
        <Table borderless style={{ padding: '0', margin: '0px 5px 5px 5px' }}>
          <tbody style={{ fontWeight: '700', fontSize: '35px', lineHeight: '90%', padding: '5px 0px 0px 5px' }}>
            <tr style={{ textAlign: 'center', lineHeight: '95%' }}>
              <td style={{ padding: '0px'}}>{numOfJoins}</td>
            </tr>
            <tr style={{ fontSize: '10px', textAlign: 'right', lineHeight: '90%' }}>
              <td className="w-25" style={{ padding: '0px' }}>joins</td>
            </tr>
          </tbody>
        </Table>
      </Alert>
    );
  }
  //returns time difference between now
  timeDifference(time) {
      return moment.duration(time?time:moment().add(1,'hour').diff(moment()));
  }

  timeBoxColorControl(timeLeft) {
    switch (timeLeft) {
      case (
        timeLeft.years() > 0
        || timeLeft.months() > 0
        || timeLeft.days() > 0):
        return 'success';
      case (timeLeft.hours() > 2):
        return 'warning';
      case (timeLeft.hours() < 2):
        return 'danger';
      default:
        return 'light';
    }
  }

  timeDisplayControl(rawTime) {
    let time = this.timeDifference(rawTime);
    if( time.years() > 0 ) {
        return ( 
          { times: <td className="w-25" style={{ padding: '0px' }}> {time.years()} </td>,
            unit: <td className="w-25" style={{ padding: '0px' }}> {time.years()>1?'years':'year'} </td>});
            
    }
    if( time.months() > 0 ) {
        return (
          { times: <td className="w-25" style={{ padding: '0px' }}> {time.months()} </td>,
            unit: <td className="w-25" style={{ padding: '0px' }}>  {time.months()>1?'months':'moonth'} </td> });
    }
    if(  time.days() > 0) {
        return ( 
          { times: <td className="w-25" style={{ padding: '0px' }}> {time.days()} </td>,
            unit:  <td className="w-25" style={{ padding: '0px' }}> {time.days()>1?'days':'day'}</td> });
    }
    if( time.hours() > 0) {
      if( time.minutes() > 0) {
        return ( 
          { times: 
              <Fragment> 
                <td className="w-25" style={{ padding: '0px' }}> 
                  {time.hours()} 
                </td>
                <td className="w-25" style={{ padding: '0px' }}>
                  {time.minutes()}
                </td>
              </Fragment>,
            unit: 
              <Fragment>
                <td className="w-25" style={{ padding: '0px' }}> 
                  {time.hours()>1?'hrs':'hr'} 
                </td>
                <td className="w-25" style={{ padding: '0px' }}> 
                  {time.minutes()>1?'mins':'min'}
                </td>
              </Fragment> 
          });
      }
      return (
        { times: 
            <Fragment> 
              <td className="w-25" style={{ padding: '0px' }}> 
                {time.hours()}
              </td>
            </Fragment>,
          unit: 
            <Fragment>
              <td className="w-25" style={{ padding: '0px' }}> 
                {time.hours()>1? 'hrs': 'hr'}
              </td>
            </Fragment>
        });
    }
    if( time.minutes() > 0) {
        return({ 
          times: <td className="w-25" style={{ padding: '0px' }}> {time.minutes()}</td>,
          unit: <td className="w-25" style={{ padding: '0px' }}> {time.minutes() > 1 ? 'mins':'min'}</td> 
        });
    }

    return ({ 
      times: <td className="w-25" style={{ padding: '0px', textSize:'15px' }}> Expired </td>,
      unit: <td className="w-25" style={{ padding: '0px' }}>  </td> 
    });
  }
  

  getTime() {
    let timeDiff = this.timeDifference(this.props.data.time);
    let timeBoxColor = this.timeBoxColorControl(timeDiff);
    let {times, unit} = this.timeDisplayControl(this.props.data.time);
    return (
      <Alert
        variant={timeBoxColor}
        style={{ padding: '0px 10px 0px 5px', margin: '0px 0px 5px 0px' }}>
        <div style={{ textAlign: 'left', lineHeight: '60%' }}>
          <small style={{ fontSize: '12px' }}>starts in: </small>
        </div>
        <Table borderless style={{ padding: '0', margin: '0px 5px 5px 5px' }}>
          <tbody className="" style={{ fontWeight: '700', fontSize: '35px', lineHeight: '90%', padding: '5px 0px 0px 5px' }}>
            <tr style={{ textAlign: 'center', lineHeight: '95%' }}>
              {times}
            </tr>
            <tr style={{ fontSize: '10px', textAlign: 'right', lineHeight: '90%' }}>
              {unit}
            </tr>
          </tbody>
        </Table>
      </Alert>
    );
  }

  cardBody() {
    return (
      <Fragment>
        <Row>
          <Col
            style={{ borderSizing: 'border-box', textAlign: 'center' }}>
            <Alert
              variant='light'
              style={{ padding: '1px', margin: '0px 0px 5px 0px', color: 'black', borderColor: 'rgba(0,0,0,0.1)' }}>
              <span className="" style={{ fontWeight: '300', fontSize: '20px', lineHeight: '95%' }}>
                {this.props.data.title ? null : 'this.props.data.title'}
              </span>
              <br />
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col
            sm={5} xs={5} md={5}
            style={{ borderSizing: 'border-box', textAlign: 'center', paddingRight: '5px' }}>
            {this.countAttendee()}
          </Col>
          <Col
            sm={7} xs={7} md={7}
            style={{ borderSizing: 'border-box', textAlign: 'center', paddingLeft: '5px' }}>
            {this.getTime()}
          </Col>
        </Row>
        <Row>
          <Col className="address">
            <Card.Text style={{ backgroundColor: '#e1e2e3' }}>
              {this.props.data.address}, {this.props.data.city}
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
      </Fragment>
    );
  }
  cardFooter() {
    return (
      <div>
        <span className="bold" style={{ fontWeight: '700' }}>{this.props.data.bedrooms}</span>
        <span className="classifier"> bed</span>
        <span className="divider"> | </span>
        <span className="bold" style={{ fontWeight: '700' }}>{this.props.data.bathrooms}</span>
        <span className="classifier"> bath</span>
        <span className="divider"> | </span>
        <span className="bold" style={{ fontWeight: '700' }}>{this.props.data.carSpaces}</span>
        <span className="classifier"> parkings</span>
      </div>
    );
  }
}

export default MeetupCard;