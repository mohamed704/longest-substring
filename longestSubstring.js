const lengthOfLongestSubstring = (str) => {
  let max = '';
  let tab = [];
  let s = [];
  let arr = str.split('');
  arr.map(car => {
    
    if(!s.includes(car)){
      s.push(car)
      
    }
    else{
      tab.push(s.join(''));
      s=[];
      s.push(car)
    }
      
  })
  tab.push(s.join(''));
  tab.map((elmt) => {
    if(max.length < elmt.length) max=elmt;
  })
  return max;
}
console.log(lengthOfLongestSubstring("abcabcfbb"));