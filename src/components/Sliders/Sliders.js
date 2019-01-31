import React from 'react'
import './Sliders.css';
export default class Sliders extends React.Component{
  constructor(props){
    super(props)
    this.state = {index: 0}
  }
  turn = (step) => {
    let index = this.state.index + step
    if (index > this.props.items.length) {
      // ! 右移动：当图片去到3的位置后，再点击右，然后设置没动画的情况下，切换到最左的图（神不知鬼不觉），然后继续正常操作。
      this.$sliderUl.style.transitionDuration = '0s'
      this.$sliderUl.style.left = 0
      setTimeout(() => {
        index = 1
        this.$sliderUl.style.transitionDuration = this.props.speed+'s'
        this.setState({index})
      }, 0);
      return
    }
    if (index < 0) {
      // ! 左移动：当在0的位置，再点击左，然后设置没动画的情况下，切换到最右的图（神不知鬼不觉），然后继续正常操作。
      this.$sliderUl.style.transitionDuration = '0s'
      this.$sliderUl.style.left = -(this.$wrapWidth * this.props.items.length) + 'px'
      setTimeout(() => {
        index = this.props.items.length - 1
        this.$sliderUl.style.transitionDuration = this.props.speed+'s'
        this.setState({index})
      }, 0);
      return
    }
    this.setState({index})
  }
  go = () => {
    this.$timer = setInterval(() => {
      this.turn(1)
    },this.props.delay * 1000)
  }
  componentDidMount() {
    this.$sliderUl = document.querySelector('.sliders')
    this.$wrapWidth = document.getElementsByTagName('body')[0].offsetWidth
    if (this.props.autoPlay) {
      this.go()
    }
  }
  render(){
    let wrapWidth = document.getElementsByTagName('body')[0].offsetWidth
    let ulStyle = {
      width: (this.props.items.length+1) * wrapWidth, // ! 多一张copy的图
      left: this.state.index * (-wrapWidth),
      transitionDuration:this.props.speed+'s'
    }
    let liStyle = {
      width: wrapWidth,
    }
    return (
      <div className="slider-wrapper" onMouseEnter={() => clearInterval(this.$timer)} onMouseLeave={() => this.go()}>
        <ul style={ulStyle} className="sliders">
          {
            this.props.items.map((item, index) => {
              return <li style={liStyle} className="slider" key={index}><img src={item} alt="" /></li>
            })
          }
          <li style={liStyle} className="slider" ><img src={this.props.items[0]} alt="" /></li>
        </ul>

        <div  className="arrows" >
          <span  className="arrow arrow-left" onClick={()=>this.turn(-1)} ></span>
          <span className="arrow arrow-right" onClick={()=>this.turn(1)} ></span>
        </div>

        <div className="dots">
          {
            this.props.items.map((item,index)=>(
              <span key={index} className={"dot "+(index===this.state.index % this.props.items.length ?'active':'')} onClick={()=>this.turn(index-this.state.index)}></span>
            ))
          }
        </div>
      </div>
    )
  }
}