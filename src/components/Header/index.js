import React from 'react';
import { Row, Col } from 'antd';
// import axios from '../../axios';
// import Utils from '../../utils/utils';
// import './index.less';

export default class Header extends React.Component {
    componentWillMount() {
        this.setState({
            userName: 'lwj'
        });
        // // 获取天气
        // this.getWeatherAPIDate();
        // // 系统时间
        // setInterval(() => {
        //     let sysTime = Utils.formateDate(new Date().getTime())
        //         this.setState({
        //             sysTime
        //         })
        // },1000);
    };
   
    // 封装jsonp
    // getWeatherAPIDate() {
    //     let city = 'wuhan';
    //     axios.jsonp({
    //         url: 'http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    //     }).then((res) => {
    //         console.log(res)
    //         if(res.status === 'success') {
    //             let data = res.results[0].weather_data[0];
    //             this.setState({
    //                 dayPictureUrl: data.dayPictureUrl,
    //                 weather: data.weather
    //             })
    //         }
    //     })
    // }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎,&nbsp;{this.state.userName}</span>
                        <a href="#sadsa">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">2019-05-04</span>
                        <span className="weather-detail">多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}