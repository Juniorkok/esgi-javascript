//ucfirst
var hello = "hello world";
console.log(hello);

function ucfirst(word){
	var result = "";

	for(var i = 0; i < word.length; i++){
		if(i == 0){
			result += word[i].toUpperCase();
		}else{
			result += word[i];
		}
	}

	return result;
}

console.log(ucfirst(hello));

//capitalize
/*for(var i = 0; i < hello.length; i++){
	if(i == 0){
		hello[i].toUpperCase();
	}

	if(hello[i] == " "){
		hello[i + 1].toUpperCase();
	}
}*/

function capitalize(word){
	var result = "";

	for(var i = 0; i < word.length; i++){
		if(i == 0){
			result += word[i].toUpperCase();
		}/*else{
			if(hello[i] == " "){
				hello[i + 1].toUpperCase();
			}else{
				result += word[i];
			}
			
		}*/
	}

	return result;
}

//camelcase

//snake_case

//leet

