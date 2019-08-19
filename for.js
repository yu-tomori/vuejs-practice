new Vue({
	el: '#app',
	data: {
		books: [
		{
			isbn: '978-4-7981-5382-7',
			title: '独習C# 新版',
			price: 3600
		},
		{
			isbn: '586-3-8395-5839-6',
			title: 'PHPの教科書',
			price: 2800
		},
		{
			isbn: '2567-3-3484-33',
			title: 'Go言語の教科書',
			price: 2400
		},
		{
			isbn: '3e45-354353-34',
			title: 'Rubyの教科書',
			price: 1900
		}
		]
	},
	computed: {
		cheapBooks: function() {
			return this.books.filter(function(b) {
				return b.price < 2500;
			})
		}
	}
});
