
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import {
  Mask,
  Modal,
  Alert,
  Confirm,
  Toast,
  Loading,
  Button,
  Swipe,
  Switch
} from '../../components';

import '../../styles/index.scss';
import '../styles/pages/Page1.scss';

class Page1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal     : false,
      confirm   : false,
      alert     : false,
      mask      : false,
      toast     : false,
      loading   : false,
      switchChecked : false,
    };
  }

  _onClickOpen(key) {
    this.setState({
      [`${ key }`]: true
    });
  }

  _onClickClose(key) {
    this.setState({
      [`${ key }`]: false
    });
  }

  render() {

    return (
      <div>
        <Swipe>
          <div className="ui-swipe-item">
            <div className="ui-swipe-pic">
              <a href="http://www.baidu.com">
                <img src="http://map.baidu.com/fwmap/upload/h5v1.2-%E9%A6%96%E9%A1%B5banner-%E4%BD%B3%E4%B9%90%E9%94%AD.png" />
              </a>
            </div>
            <div className="ui-swipe-info">
              <div className="ui-swipe-title">百度</div>
            </div>
          </div>
          <div className="ui-swipe-item">
            <div className="ui-swipe-pic">
              <a href="http://www.taobao.com">
                <img src="http://map.baidu.com/fwmap/upload/h5v1.2-%E9%A6%96%E9%A1%B5banner-%E8%96%AF%E7%89%87-0.png" />
              </a>
            </div>
            <div className="ui-swipe-info">
              <div className="ui-swipe-title">淘宝</div>
            </div>
          </div>
          <div className="ui-swipe-item">
            <div className="ui-swipe-pic">
              <a href="http://www.qq.com">
                <img src="http://map.baidu.com/fwmap/upload/h5v1.2-%E9%A6%96%E9%A1%B5banner-%E9%BB%84%E6%B2%B9%E8%96%AF%E7%89%87-0.png" />
              </a>
            </div>
            <div className="ui-swipe-info">
              <div className="ui-swipe-title">腾讯</div>
            </div>
          </div>
        </Swipe>

        <Switch isCheckedText="是" unCheckedText="否" checked={this.state.switchChecked} onChange={(data) => {
          this.setState({
            switchChecked: data
          });
        }}></Switch>

        <p className="buttons">
          <Button size="xl" onClick={() => this._onClickOpen('mask')}>遮罩层</Button>
          <Button size="lg" theme="primary" onClick={() => this._onClickOpen('modal')}>模态框</Button>
          <Button theme="info" onClick={() => this._onClickOpen('confirm')}>确认框</Button>
          <Button size="sm" theme="success" onClick={() => this._onClickOpen('alert')}>警告框</Button>
          <Button size="xs" theme="warning" onClick={() => this._onClickOpen('loading')}>加载中</Button>
          <Button theme="danger" onClick={() => this._onClickOpen('toast')}>提示信息</Button>
        </p>

        <Modal visible={this.state.modal} width="600" onMaskClick={() => this._onClickClose('modal')}>
          <Modal.Header title="标题" onClose={() => this._onClickClose('modal')}></Modal.Header>
          <Modal.Body height={400}>
            我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮
          </Modal.Body>
          <Modal.Footer>
            <Button size="lg" onClick={() => this._onClickClose('modal')}>取消</Button>
            <Button size="lg" theme="success" onClick={() => { alert('你点击了确定') }}>确定</Button>
          </Modal.Footer>
        </Modal>

        <Confirm
          visible={this.state.confirm}
          message="确定要删除吗？"
          onOk={() => this._onClickOpen('alert')}
          onCancel={() => this._onClickClose('confirm')} />

        <Alert
          visible={this.state.alert}
          message="这是一个警告框！"
          onClose={() => this._onClickClose('alert')} />
        
        { this.state.toast ?
          <Toast
            visible={this.state.toast}
            message="这是一个提示信息！"
            onMaskClick={() => this._onClickClose('toast')} />
        : null }
        
        <Loading
          visible={this.state.loading}
          message="付款中" />

        <Mask
          visible={this.state.mask}
          onClose={() => this._onClickClose('mask')} />

      </div>
    );
  }
}

export default Page1;