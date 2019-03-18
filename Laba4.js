try{
	var t =1;

	for(var i =1 ; i>0; i++){
		console.log(i);
		if (t>=1000){
			throw true;//визов catch

		}
		t+=1;
	}
}
catch(e){
	console.log(e.name);
	console.log(e.message);
	console.log(e.stack);
}