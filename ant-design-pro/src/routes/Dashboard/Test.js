import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

class Test extends Component {
  componentDidMount() {
    this.props.onLoad({ accesstoken: '3M0k2y2w2G1Y17103Z1k1L133s3k222w2T3r3l1F0b3Z3P001R2c2v0h2q2f2D0U' });
  }
  render() {
    const columns = [
      {
        title: '会员名',
        dataIndex: 'MemName',
        width: '150px',
      }, {
        title: '联系电话',
        dataIndex: 'Phone',
        width: '150px',
      }, {
        title: '店铺名称',
        dataIndex: 'ShopName',
        width: '200px',
      }, {
        title: '所在省份',
        dataIndex: 'ProvinceName',
        key: 'ProvinceName',
      }, {
        title: '所在城市',
        dataIndex: 'CityName',
        key: 'CityName',
      }, {
        title: '所在地区',
        dataIndex: 'AreaName',
        key: 'AreaName',
      }, {
        title: '详细地址',
        dataIndex: 'Address',
        key: 'Address',
      },
    ];
    return (
      <div style={{ padding: '24px 32px', background: '#fff' }}>
        <Table
          columns={columns}
          dataSource={this.props.list}
          rowKey={record => record.RecId}
          loading={this.props.global}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state.test,
    ...state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: params => dispatch({ type: 'test/getData', payload: params }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
