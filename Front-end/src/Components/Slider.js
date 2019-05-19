import React, { Component } from 'react';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: 0,
            currentPosition: 0,
            itemStyle: {
                transform: 'translateX(0px)'
            },
            width: 0,
            btnBackground: 'rgba(0,0,0,0)',
        };
        this.setItem = this.setItem.bind(this);
    }

    componentDidMount() {
      console.log(this.props.itemType)
        let sliderWidth = document.getElementById(`${this.props.itemType}-item`).clientWidth ;
        console.log(sliderWidth);
        this.setState({
            width: sliderWidth
        });
    }

    btnShow() {
        this.setState({
            btnBackground: 'rgba(0,0,0,0.2)'
        });
    }

    btnHide() {
        this.setState({
            btnBackground: 'rgba(0,0,0,0.0)'
        });
    }

    handleClick(type) {
        let margin = window.getComputedStyle(document.getElementById(`${this.props.itemType}-item`)).marginRight;
            margin = JSON.parse(margin.replace(/px/i, ''));
        const itemWidth = this.state.width;
        const itemMargin = margin;
        const itemCount = this.props.children.length;

        let currentItem = this.state.currentItem;
        let currentPosition = this.state.currentPosition;

        console.log('current position',currentPosition)
        console.log('itemWidth',itemWidth)
        console.log('itemMargin',itemMargin)
        console.log('itemCount',itemCount)

        switch (type) {
            case 'next':
                if (currentItem < itemCount - 1) {
                    currentItem = currentItem + 1;
                    currentPosition -= (itemWidth + itemMargin);
                }
                break;
            case 'prev':
                if (currentItem > 0) {
                    currentItem--;
                    currentPosition += (itemWidth + itemMargin);
                }
                break;
            default:
                break;
        }
        this.setItem(currentItem, currentPosition);
    }

    setItem(currentItem, currentPosition) {
        this.setState({
            currentItem: currentItem,
            currentPosition: currentPosition,
            itemStyle: {
                transform: `translate(${currentPosition}px)`
            }
        });
    }

    renderItems(items) {
      return (
        React.Children.map(items, (item, i) => (
          <div 
            className="slider-item-wrapper"
            id={`${this.props.itemType}-item`} 
            key={i} 
            style={{ 
              transform: this.state.itemStyle.transform, 
              transition: 'transform .2s ease-in-out' }}>
            {item}
         </div>
       )))
      }
    
    render() {
        let items = this.props.children;
        console.log(items)
        return (
            <div className="item-slider-container"
                style={{
                    position: 'relative', display: 'inline-block', overflow: 'hidden',
                    whiteSpace: 'nowrap', width: '100%', height: '100%',
                    backgroundColor: 'rgba(225,225,225,0.0)', margin: '0px 0px 0px 0px', border: '1px solid #D8D8D8',
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
                    { this.renderItems(items)}
                </div>
            </div>
        );
    }
}