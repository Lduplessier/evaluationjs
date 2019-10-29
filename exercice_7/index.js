'use strict'

function computeNotes(){
	var tabgrade = [10,13,13,12,15,12,11,16,14];
	var compute = true;
	var addition = 0;
	var result = 0;

	//setting a stop with a boolean
	while(compute == true){
		//navigating in the tabgrade array
		for (var i = 0; i < tabgrade.length; i++) {
			//adding in the addition variable the differents grades
			addition += tabgrade[i];
		}
		//returning the average result by dividing the addition variable value by the tabgrade array length
		result = addition / tabgrade.length;
		//stopping the funcion
		compute = false;
	}
	//returning result
	alert('la moyenne est de'+ result);
}
//calling the function
 computeNotes();