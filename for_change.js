var app = new Vue({
	el: '#app',
	data: {
		list: ['melon', 'orange', 'peach']
	},
	methods: {
		// ボタンクリック時に2番目の要素を変更
		onclick: function() {
			Vue.set(this.list, 1, 'strawberry'); // or "this.list.splice(1, 1, 'strawberry')"
		}
	}
});
