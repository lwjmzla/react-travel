import React from 'react';
import { Row, Col } from 'antd';
// import axios from '../../axios';
// import Utils from '../../utils/utils';
import style from './index.less';
import dayjs from 'dayjs'
import jsonp from 'jsonp'

export default class Header extends React.Component {
    componentWillMount() {
        this.setState({
            userName: 'lwj',
            sysTime: dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
        });
        // 获取天气
        this.getWeatherAPIDate();
        // 系统时间
        setInterval(() => {
            let sysTime = dayjs(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
            this.setState({
                sysTime
            })
        },1000);
    };
   
    // 封装jsonp
    getWeatherAPIDate() {
        let city = 'guangzhou';
        jsonp('http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2', {param: 'callback'}, (err, data) => {
            if (err) { console.log(err); return }
            const res = data
            if(res.status === 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }
    render() {
        return (
            <div className={style.header}>
                <Row className={style["header-top"]}>
                    <Col span={24}>
                        <span>欢迎,&nbsp;{this.state.userName}</span>
                        <a href="#sadsa">退出</a>
                    </Col>
                </Row>
                <Row className={style.breadcrumb}>
                    <Col span={4} className={style['breadcrumb-title']}>
                        首页
                    </Col>
                    <Col span={20} className={style['weather']}>
                        <span className={style['date']}>{this.state.sysTime}</span>
                        <span className={style['weather-img']}>
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className={style['weather-detail']}>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}