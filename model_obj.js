new Vue({
	el: '#app',
	data: {
		unit: {}
	},
	methods: {
		// ラジオボタンの変更時にログを出力
		onchange: function() {
			console.log(
				this.unit.name + '：' + this.unit.size
			);
		}
	}
});
