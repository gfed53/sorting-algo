// jshint esversion: 6

(function(){
	angular
	.module('myApp')
	.service('mySorter', [mySorter]);


})();

function mySorter(){
	this.sort = sort;


	function swap(items, firstIndex, secondIndex){
		var temp = items[firstIndex];
		items[firstIndex] = items[secondIndex];
		items[secondIndex] = temp;
	}

	function sort(_list){
		var list = [].slice.call(_list);
		for(let i = 0; i<list.length; i++){
			console.log('iteration:', i);
	    	//We chop off i from the length of each iteration because, with each iteration, we will pinpoint the last item that hasn't already been pushed to the end of the array.
		    for(let j = 0, k = list.length-i; j<k; j++){
		    	console.log('first:',list[j]);
		    	console.log('second:',list[j+1]);
		    	if(list[j] > list[j+1]){
		    		swap(list, j, j+1);
		    		console.log('swapped! list is now:', list);
		    	}
		    }
		}
		return list;
	}
}