(function(){
	angular
	.module('myApp', ['ngAnimate'])
	.run(function(){
		console.log("Hello World");
	})
	.controller('CtrlMain', ['mySorter', CtrlMain]);

})();



function CtrlMain(mySorter){
	var vm = this;
	console.log('Main');
	vm.items = ['kavxpfequl', 'ynsxcrxout', 'jrhmnjyvpb', 'kefrxznjsn', 'juaypzwoow', 'kaszncrqdc', 'tlvszaghul', 'owfjrozmdf', 'qcwhbmviaj', 'dakguurrhi'];
	vm.sort = mySorter.sort;



}