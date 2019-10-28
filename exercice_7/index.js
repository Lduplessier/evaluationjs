'use strict'

function computeNotes(){
	var tabgrade = [10,13,13,12,15,12,11,16,14];
	var compute = true;
	var addition = 0;
	var result = 0;
	var i = 1;

	while(compute == true){
		for (var i = 0; i < tabgrade.length; i++) {
			addition += tabgrade[i];
		}
		result = addition / tabgrade.length;
		compute = false;
	}
	alert('la moyenne est de'+ result);
}
 computeNotes();