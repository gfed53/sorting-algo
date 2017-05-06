// jshint esversion: 6

(function(){
	angular
	.module('myApp', ['ngAnimate'])
	.run(function(){
		console.log("Hello World");
	})
	.config(['$compileProvider', ($compileProvider) => {
		$compileProvider.debugInfoEnabled(false);
	}])
	.controller('CtrlMain', ['mySorter', CtrlMain]);

})();



function CtrlMain(mySorter){
	var vm = this;
	console.log('Main');
	vm.items = ['kavxpfequl', 'ynsxcrxout', 'jrhmnjyvpb', 'kefrxznjsn', 'juaypzwoow', 'kaszncrqdc', 'tlvszaghul', 'owfjrozmdf', 'qcwhbmviaj', 'dakguurrhi'];
	vm.sort = sort;
	vm.sorted = false;

	function sort(list){
		vm.sortedItems = mySorter.sort(list);
		vm.sorted = true;
	}



}