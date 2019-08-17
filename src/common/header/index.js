import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch,
    Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle,
    SearchInfoSwitch, SearchInfoItem, SearchInfoList} from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators} from '../../pages/login/store';
import {Link} from "react-router-dom";   // 单引用路由

class Header extends Component {

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS(); // convert to normal JS array
        const pageList = [];

        if(newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; ++i) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        Top Searches
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>change
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download App</NavItem>
                    {
                        login ?
                            <NavItem onClick={logout} className='right'>Log out</NavItem> :
                            <Link to='/login'><NavItem className='right'>Log in</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
                        >&#xe633;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writing'>
                            <i className="iconfont">&#xe607;</i>
                            New Article
                        </Button>
                    </Link>
                    <Button className='reg'>Sign Up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        // focused: state.get('header').get('focused')
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            dispatch(actionCreators.changePage(page < totalPage ? page + 1 : 1));
        },
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);