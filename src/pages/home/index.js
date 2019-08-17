import React, {Component} from 'react';
import Topic from './components/topic';
import List from './components/list';
import Recommendation from './components/recommendation';
import Writer from './components/writer';
import { HomeWrapper, HomeLeft, HomeRight } from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommendation />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;