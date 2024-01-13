const vdom = {
    type:'div',
    props:{
        id:'app',
        children:[
            {
                type:'TEXT_ELEMENT',
                nodeValue:'hello'
            }
        ]
    },
    
};

function createTextNode(value){ // 数据格式保持一致
    return {
        type:'TEXT_ELEMENT',
        props:{
            nodeValue:value,
            children:[]
        }
    }
}

function createElement(tagName, props, ...children){
    return {
        type:tagName,
        props:{
            ...props,
            children:children.map(child=>{
                
                if(typeof child === 'string'){
                    return createTextNode(child)
                }else{
                    return child;
                }
            })
        }
    }
}


const textNode = createTextNode('1231321');
const element = createElement('div',{id:'app'},'nihao','zhangjiakou');


// 模拟render 函数
function render(el, container){
    const dom = el.type === 'TEXT_ELEMENT'? document.createTextNode(''):document.createElement(el.type);
    // console.log(el.props);
    const props = el.props&&Object.keys(el.props);
    props?.forEach(prop=>{
        if(prop!=='children'){ // 不是children属性
            dom[prop] = el.props[prop];
        }
    })
    if(el.props.children && el.props.children.length){
        el.props.children.forEach(child=>{
            render(child, dom);
        })
    }
   container.appendChild(dom);
}
// console.log(element);
render(element, document.querySelector('#root'));


// 通过原生JS的方式在DOM中添加一个div元素
// const app = document.createElement(element.type);
// app.id = element.props.id;
// // createTextNode 要有参数
// const txt = document.createTextNode('');
// txt.nodeValue = textNode.props.nodeValue;
// app.appendChild(txt);

// const root = document.querySelector('#root');

// root.appendChild(app);

