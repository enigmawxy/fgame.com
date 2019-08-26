import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

// 渲染 Root 组件
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
