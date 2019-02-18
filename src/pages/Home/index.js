import React from 'react'
import {Link} from 'react-router-dom'
import './index.styl'
import Sliders from 'components/Sliders/Sliders.js'
import {Button} from 'antd'

const Img=[
    'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
    'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg',
    'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg',
]

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {name: ''}
  }
  handleClick = (ev) => {
    this.setState({
      name: 'lwj'
    })
  }
  render(){
    // async function async1() {
    //     console.log('2--async1 start');  //
    //     await async2();  // !执行了 await 跟着的的表达式，剩下的东西 都属于 异步
    //     console.log('6--async1 end');  // ! 属于异步的  微任务
    // }
    // async function async2() {
    //   console.log('3--async2');  //  
    // }
    // async function async3() {
    //   console.log('special--async2');  //  
    // }
    
    // console.log('1--script start'); //
    
    // setTimeout(function() {  
    //     console.log('8--setTimeout'); // ! 属于异步的  宏任务 执行 比  异步的  微任务 迟
    // }, 0)
    
    // async1();
    // async3()

    // new Promise(function(resolve) {
    //     console.log('4--promise1'); // 
    //     resolve();
    // }).then(function() {
    //     console.log('7--promise2'); // ! 属于异步的  微任务
    // });
    // console.log('5--script end');  // 


    const style = {
      padding: '10px 0'
    }
    return (
      <div style={style}>
        <div className="header">
          <div className="header-left" onClick={this.handleClick}>
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
            autoPlay={false}
            pause={true}
            dots={true}
            arrows={true}
        />

        <Button type="primary">123</Button>
      </div>
    )
  }
}

export default Home