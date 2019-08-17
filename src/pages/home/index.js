import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import Topic from './components/topic';
import List from './components/list';
import Recommendation from './components/recommendation';
import Writer from './components/writer';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { actionCreators } from './store';

class Home extends PureComponent {

    handleScrollTop() {
        window.scroll(0, 0);
    }

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
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Back to Top</BackTop> : null }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    changHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        dispatch(actionCreators.toggleTopShow(document.documentElement.scrollTop > 100 ? true : false));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);