Vue.directive('highlight', {
	bind: (el, binding) => {
		// mouseenter時のイベント処理を定義
		el.addEventListener('mouseenter', 
			function() {
				this.style.backgroundColor = binding.value;
			}, false);
		// mouseleave時のイベント処理を定義
		el.addEventListener('mouseleave',
			function() {
				el.style.backgroundColor = binding.value;
				this.style.backgroundColor = '';
			}, false);
	}
});

new Vue({
	el: '#app',
	data: {
		color: 'Yellow'
	}
});
