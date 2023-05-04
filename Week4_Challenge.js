function LongestWord(sen) {
    wrds = sen.match(/\w+/gi);
    let l = wrds.length;
    let i = 0;
    let a = '';
    for (i; i < l; i++) {
        if (wrds[i].length > a.length) {
            a = wrds[i];
        }
    }
  return a; 
}
