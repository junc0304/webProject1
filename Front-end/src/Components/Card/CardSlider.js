import React, { Component } from 'react';
import Card from './Card';

const cardStyle = {


    imageStyle: {

    }
}

const sliderStyle = {

}

export default class CardSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCard: 0,
            currentPosition: 0,
            cardStyle: {
                transform: 'translateX(0px)'
            },
            width: 0,
            btnBackground: 'rgba(0,0,0,0)',
        };
    }

    componentDidMount() {
        let sliderWidth = document.getElementById(`${this.props.type}-card`).clientWidth;;
        this.setState({
            width: sliderWidth
        });
    }

    btnShow() {
        this.setState({
            btnBackground: 'rgba(0,0,0,0.2)'
        })
    }

    btnHide() {
        this.setState({
            btnBackground: 'rgba(0,0,0,0.0)'
        })
    }

    handleClick(type) {
        let margin = window.getComputedStyle(document.getElementById(`${this.props.type}-card`)).marginRight;
            margin = JSON.parse(margin.replace(/px/i, ''));
        const cardWidth = this.state.width;
        const cardMargin = margin;
        const cardCount = this.props.data.length;

        let currentCard = this.state.currentCard;
        let currentPosition = this.state.currentPosition;

        switch (type) {
            case 'next':
                if (currentCard < cardCount - 1) {
                    currentCard = currentCard + 1;
                    currentPosition -= (cardWidth + cardMargin);
                }
                break;
            case 'prev':
                if (currentCard > 0) {
                    currentCard--;
                    currentPosition += (cardWidth + cardMargin);
                }
                break;
            default:
                break;
        }
        this.setCard(currentCard, currentPosition);
    }

    setCard(currentCard, currentPosition) {
        this.setState({
            currentCard: currentCard,
            currentPosition: currentPosition,
            cardStyle: {
                transform: `translate(${currentPosition}px)`
            }
        });
    }

    render() {
        let cardType = this.props.type;
        let cards = this.props.data;

        return (
            <div className="card-slider-container"
                style={{
                    position: 'relative', display: 'inline-block', overflow: 'hidden',
                    whiteSpace: 'nowrap', width: '100%', height: '100%',
                    backgroundColor: 'rgba(225,225,225,0.0)', margin: '5px', border: '1px solid #D8D8D8',
                    boxShadow: '1px 1xp 10px #D8D8D8'
                }} >
                <div className="slider-btn">
                    <button
                        className="btn-left"
                        onMouseEnter={() => this.btnShow()}
                        onMouseLeave={() => this.btnHide()}
                        onClick={() => this.handleClick('prev')}
                        style={{
                            backgroundColor: this.state.btnBackground, left: '0px', height: '100%',
                            fontWeight: '700', fontSize: '60px', color: 'rgba(225,225,225,0.8)',
                            textAlign: 'center', width: '50px', border: '0', transition: 'all 0.6s ease 0s',
                            position: 'absolute', zIndex: '1000', outline: 'none'
                        }}
                    >&lt;</button>
                    <button
                        className="btn-right"
                        onMouseEnter={() => this.btnShow()}
                        onMouseLeave={() => this.btnHide()}
                        onClick={() => this.handleClick('next')}
                        style={{
                            backgroundColor: this.state.btnBackground, right: '0px', height: '100%',
                            fontWeight: '700', fontSize: '60px', color: 'rgba(225,225,225,0.8)',
                            textAlign: 'center', width: '50px', border: '0', transition: 'all 0.6s ease 0s',
                            position: 'absolute', zIndex: '1000', outline: 'none'
                        }}
                    >&gt;</button>
                </div>
                <div
                    style={{
                        overflow: 'hidden',
                        display: 'flex',
                        margin: '0px 50px'
                    }}>
                    {
                        cards.map((card, i) =>
                            <Card
                                id={`${this.props.type}-card`}
                                key={i}
                                data={card}
                                type={cardType}
                                cardStyle={this.state.cardStyle}
                                style={{ transition: 'transform 700ms cubic-bezier(0.455, 0.03, 0.515, 0.955)' }}
                            />)
                    }
                </div>
            </div>
        );
    }
}
