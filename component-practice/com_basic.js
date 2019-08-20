Vue.component('my-hello', {
  	props: {
		yourName: {
			type: String
		}
	},
  	template:'<div>こんにちは、<slot>権兵衛</slot>さん！</div>'
});
Vue.component('my-counter', {
	props: [ 'init' ],
	template: '<div>現在地は{{ current }}です！' + '<input type="button" v-on:click="onclick" value="増加" /></div>',
	data: function() {
		return {
			current: this.init
		};
	},
	methods: {
		// ボタンクリック時にcurrentプロパティをインクリメント
		onclick: function() {
			this.current++;
		}
	}
});
// var MyHello = {
// 	template: '<div>こんにちは、コンポーネント!</div>'
// };
new Vue({
	el: '#app',
});
