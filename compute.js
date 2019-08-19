new Vue({
	el: '#app',
	data: {
		email: 'Yamada@example.com',
	},
	// 算出した結果を取得す算出プロパティ
	computed: {
		localEmail: function() {
			return this.email.split('@')[0].toLowerCase();
		}
	}
});
