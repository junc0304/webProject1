import React, { Component } from 'react';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0,
      currentPosition: 0,
      itemStyle: { transform: 'translateX(0px)' },
      width: 0,
      btnBackground: 'rgba(0,0,0,0)',
    };
    this.setItem = this.setItem.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.showBotton = this.showBotton.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    let itemWidth = document.getElementById(`${this.props.itemType}-item`).clientWidth;
    console.log(itemWidth);
    this.setState({
      width: itemWidth
    });
  }

  showBotton() {
    this.setState({
      btnBackground: 'rgba(0,0,0,0.2)'
    });
  }

  hideButton() {
    this.setState({
      btnBackground: 'rgba(0,0,0,0.0)'
    });
  }

  handleClick(type) {
    let margin = window.getComputedStyle(document.getElementById(`${this.props.itemType}-item`)).marginRight;
    margin = JSON.parse(margin.replace(/px/i, ''));
    let sliderWidth = document.getElementById(`${this.props.itemType}-items-wrapper`).clientWidth;
    
    const itemWidth = this.state.width;
    const itemMargin = margin;
    const itemCount = this.props.children.length;
    
    const itemsPerView = Math.floor(sliderWidth/itemWidth);
    console.log(itemsPerView);
    let currentItem = this.state.currentItem;
    let currentPosition = this.state.currentPosition;

    switch (type) {
      case 'next':
        if (currentItem < itemCount - itemsPerView) {
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
      itemStyle: { transform: `translate(${currentPosition}px)` }
    });
  }

  renderItems() {
    let items = this.props.children;
    if (!items) {
      return null;
    }
    return (
      React.Children.map(items, (item, i) => (
        <div
          className="slider-item-wrapper"
          id={`${this.props.itemType}-item`}
          key={i}
          style={{
            transform: this.state.itemStyle.transform,
            border: '0',
            transition: 'transform .2s ease-in-out'
          }}>
          {item}
        </div>
      )))
  }
  render() {
    return (
      <div className="item-slider-container"
        style={styles.sliderContainer}>
        <div className="slider-btn">
          <button
            className="btn-left"
            onMouseEnter={() => this.showBotton()}
            onMouseLeave={() => this.hideButton()}
            onClick={() => this.handleClick('prev')}
            style={{...styles.leftButton, backgroundColor:this.state.btnBackground }}
          >&lt;</button>
          <button
            className="btn-right"
            onMouseEnter={() => this.showBotton()}
            onMouseLeave={() => this.hideButton()}
            onClick={() => this.handleClick('next')}
            style={{...styles.rightButton, backgroundColor:this.state.btnBackground}}
          >&gt;</button>
        </div>
        <div
          className="slider-all-item-wrapper"
          id={`${this.props.itemType}-items-wrapper`}
          style={styles.mainWrapper}>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

const styles = {
  sliderContainer: {
    width: '100%', height: '100%', margin: '0px 0px 0px 0px', border: '1px solid rgba(255,255,255,0.1)', 
    boxShadow: '1px 1xp 10px #D8D8D8', backgroundColor: 'rgba(225,225,225,0.0)', 
    position: 'relative', display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap',
  },
  leftButton: {
    left: '0px', height: '100%', width: '50px', 
    fontWeight: '700', fontSize: '60px', color: 'rgba(225,225,225,0.8)',textAlign: 'center',  
    border: '0', position: 'absolute', zIndex: '1000', outline: 'none',
    transition: 'all 0.6s ease 0s',
  },
  rightButton: {
    right: '0px', height: '100%',width: '50px', border: '0',
    fontWeight: '700', fontSize: '60px', color: 'rgba(225,225,225,0.8)', textAlign: 'center', 
    position: 'absolute', zIndex: '1000', outline: 'none',
    transition: 'all 0.6s ease 0s'
  },
  mainWrapper: {
    overflow: 'hidden',
    display: 'flex',
    margin: '0px 50px'
  }
}