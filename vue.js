/**
 *创建时间:  2018/6/24
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */
with (this) {
    // noinspection JSAnnotator
    return _c('div', {attrs: {"id": "example-1"}}, [ //div
        _c('input', { //input
            directives: [{
                name: "model",
                rawName: "v-model",
                value: (title),
                expression: "title"
            }],
            domProps: {"value": (title)}, //model 往 view
            on: {
                "input": function ($event) {
                    if ($event.target.composing) return;
                    title = $event.target.value //view 往 model
                }
            }
        }), _v(" "), //换行
        _c('button',
            {
                on: {
                    "click": add //绑定 methods add
                }
            },
            [
                _v("udto list") //文本子节点
            ]
        ), _v(" "), //换行
        _c('ul',
            _l((items), function (item) {  // <li v-for="item in items"> _l v-for
            return _c('li',
                [
                    _v("\n            " + _s(item.message) + "\n        ") //item 对应 vm.item 即 data中的item
                ]
            )
        }))
    ])
}