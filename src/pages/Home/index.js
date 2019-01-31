import React from 'react'
import {Link} from 'react-router-dom'
import './index.styl'
import Sliders from 'components/Sliders/Sliders.js'

const Img=[
    'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
    'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg',
    'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg',
]

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div>
        <div className="header">
          <div className="header-left">
            <div className="iconfont back-icon">&#xe624;</div>
          </div>
          <div className="header-input">
            <span className="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
          </div>
          <Link to='/city'>
            <div className="header-right">
              广州
              <span className="iconfont arrow-icon">&#xe64a;</span>
            </div>
          </Link>
        </div>

        <Sliders
            items={Img}
            speed={1}
            delay={3}
            autoPlay={true}
            pause={true}
            dots={true}
            arrows={true}
        />

      </div>
    )
  }
}

export default Home