// const vdom = {
//     type:'div',
//     props:{
//         id:'app',
//         children:[
//             {
//                 type:'TEXT_ELEMENT',
//                 nodeValue:'hello'
//             }
//         ]
//     },
    
// };

import ReactDOM from './core/ReactDOM.js';
import App from './App.js'


// console.log(element);
// render(element, document.querySelector('#root'));





ReactDOM.createRoot(document.querySelector('#root')).render(App)

// 通过原生JS的方式在DOM中添加一个div元素
// const app = document.createElement(element.type);
// app.id = element.props.id;
// // createTextNode 要有参数
// const txt = document.createTextNode('');
// txt.nodeValue = textNode.props.nodeValue;
// app.appendChild(txt);

// const root = document.querySelector('#root');

// root.appendChild(app);

