/**
 *创建时间:  2018/6/24
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */

import * as el from 'ele';
var ol = el('ul', {id: 'ul-list'}, [
    el('li', {className: 'item'}, ['Item 1']),
    el('li', {className: 'item'}, ['Item 2']),
    el('li', {className: 'item'}, ['Item 3'])
]);

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