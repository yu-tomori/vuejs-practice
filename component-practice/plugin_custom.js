var MyUtil = {
	install : function(Vue, options) {
		Vue.filter('number', function(value, dec) {
			return value.toFixed(dec);
		});
	}
};

Vue.use(MyUtil);
new Vue({
	el: '#app'
});
