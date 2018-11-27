/**
 * Retourne true si la valeur à le même type passé en paramètre
 */
function type_check_v1(value1, value2){
	return value1 == typeof value2;
}
/*
val = 10;
console.log(type_check_v1(val, "number") + " " + 
			type_check_v1(val, "string") + " " +
			type_check_v1(val, "boolean") + " " +
			type_check_v1(val, "undefined") + " " +
			type_check_v1(val, "object"));
*/

/**
 * Retourne true si deux variables ont la même valeur
 */
function type_check_v2(value1, value2){
	return typeof value1 == value2.type && value1 == value2.name;
}

//console.log(type_check_v2(5, {type:"number", name:5}));

//console.log(typeof tab.type);

/**
 * 
 */
//function type_check()