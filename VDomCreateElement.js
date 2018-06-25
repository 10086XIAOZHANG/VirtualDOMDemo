/**
 *创建时间:  2018/6/24
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */

/**
 *
 * @param container 容器
 * @param vDom 虚拟dom
 * @constructor
 */

var ulE = {
    tagName: 'ul', // 标签名
    props: { // 属性用对象存储键值对
        id: 'ul-list'
    },
    children: [ // 子节点
        {tagName: 'li', props: {className: 'item'}, children: ["Item 1"]},
        {tagName: 'li', props: {className: 'item'}, children: ["Item 2"]},
        {tagName: 'li', props: {className: 'item'}, children: ["Item 3"]},
    ]
}

export default function VDomCreateElement(vDom){
    var tagName=vDom.tagName || '';
    var props =vDom.props || {};
    var children =vDom.children || [];
    var tagNameEle =document.createElement(tagName);
    for(var prop in props){
        if(props.hasOwnProperty(prop)){
            tagNameEle.setAttribute(prop,props[prop])
        }
    }
    if(!children){
        return tagNameEle;
    }else{
        children.forEach(function(item){
            tagNameEle.appendChild(VDomCreateElement(item)) //不断递归生成child Node
        })
    }
    return tagNameEle;
}

/**
 * vDOM 简单diff
 * @param vDom 老vDom
 * @param newVDom 新vDom
 */
export function vDomDiff(vDom,newVDom){
    var vDomChilden = vDom.children || [];
    var newVDomChilden = newVDom.children || [];
    //假设 tagName 相同
    vDomChilden.forEach(function(item,index){
        if(!newVDomChilden[index]){
            return;
        }
        if(item.tagName === newVDomChilden[index].tagName){
            //两者tagName 一样 递归
            VDomCreateElement(item,newVDomChilden[index]);
        }else {
            //两者tagName 不一样 替换
            replaceNode(item,newVDomChilden[index])
        }
    })
}

/**
 * dom操作 替换
 * @param vDom
 * @param newVDom
 */
function replaceNode(vDom,newVDom){
    //dom操作 node替换
    // ....

}