
// 通过原生JS的方式在DOM中添加一个div元素
const app = document.createElement('div');
app.id = 'app';
const txt = document.createTextNode('nihao');
app.appendChild(txt);

const root = document.querySelector('#root');

root.appendChild(app);

