Vue.component('my-hello', {
	// 1.プロパティを定義
	props: [ 'yourName' ],
	template:'<div>こんにちは、{{ yourName }}！</div>'
});
// var MyHello = {
// 	template: '<div>こんにちは、コンポーネント!</div>'
// };
new Vue({
	el: '#app',
});
