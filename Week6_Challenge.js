function detectWord(str) {
	var word='';
	for(var i=0; i<str.length;i++){
		if(str[i].toLowerCase()==str[i]){
			var letter = str[i];
			word+=letter;
		}
	}
	return word;
}
