import React, { Component } from 'react'
import {
    Button
} from 'antd';
import { connect } from 'react-redux';
import './index.less';

class Home extends Component {
    
    render() {
        return (
            <div className="home">
                <p>首页内容</p>
                <Button type="primary">点击</Button>
            </div>
        )
    }

    componentDidMount() {
        this.props.getAppListData()
    }
}

const mapStateToProps = (state) => ({
    appList: state.home.appListData,
})

const mapDispatchToProps = (dispatch) => {
    const { home } = dispatch
    return {
        getAppListData: home.getAppListData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
