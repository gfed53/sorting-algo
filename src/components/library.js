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
		//Create a new instance of array so we can have both unsorted and sorted versions
		var list = [].slice.call(_list);
		for(let i = 0; i<list.length; i++){
	    	//With each iteration, we essentially push the item that should be last to its proper place.
	    	//Each iteration will traverse one item less than the last since we know the previous last item is where it needs to be.
	    	//The outer loop using i exists to determine how much less we need to traverse for each iteration.
	    	//The inner loop is the loop that does the actual checking and swapping if necessary.
		    for(let j = 0, k = list.length-i; j<k; j++){
		    	if(list[j] > list[j+1]){
		    		swap(list, j, j+1);
		    	}
		    }
		}
		return list;
	}
}