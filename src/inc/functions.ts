export function isInteger(num: string) {

	if (num[0] == "0") return false;
	
	
   const isInteger = /^[0-9]+$/.test(num);
  
    return isInteger ? true : false;  
}
