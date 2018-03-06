var app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue!',
        messageTwo: '页面加载于' + new Date().toLocaleString(),
        seen: true,
        todos: [
            {text: '学习 JavaScript！'},
            {text: '学习 Vue！'},
            {text: '学习 React！'}
        ],
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '随便其它什么人吃的东西'}
        ]
    },
    methods: {
        modifyMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});