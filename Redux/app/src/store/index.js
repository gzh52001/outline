import {createStore,applyMiddleware,compose} from 'redux';

// 引入浏览器插件的中间件
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducers';

// 引入自定义saga配置文件
import rootSaga from './middleware/rootSaga.js';

// 使用saga中间件步骤1：引入
import createSagaMiddleware from 'redux-saga';

// 使用saga中间件步骤2：创建saga中间件
const sagaMiddleware = createSagaMiddleware();
// console.log('sagaMiddleware',sagaMiddleware)

// 使用saga中间件步骤3：将 sagaMiddleware 连接至 Store
let enhancer = compose(applyMiddleware(sagaMiddleware),composeWithDevTools())
// console.log('enhancer',enhancer);

const store = createStore(reducer,enhancer);

// 使用saga中间件步骤4：运行 Saga配置
sagaMiddleware.run(rootSaga);

export default store;
