new Vue({
	el: '#app',
	data: {
		time: ''
	},
	methods: {
		// 入力値を小数点第一位に丸めたものをログ表示
		onchange: function() {
			console.log(this.time);
		}
	}
});
