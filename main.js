
function checkStartNumber (startNo, endNo) {
    let result = true;
    if(startNo > endNo)
    	result = false;
    if(startNo > 1000 && endNo < 1)
		result = false;
    return result;
}

function checkEndNumber (endNo) {

    return (endNo <= 1000 && endNo >=1);
}


function getMultiplication (startNo, endNo) {

    let table = "";

    if(checkStartNumber (startNo, endNo) && checkEndNumber (endNo)) {
    	
    	const row = endNo - startNo + 1;

    	let i = 1;
    	let firstNo = startNo;
		let secNo = firstNo;
		let strlongest = endNo + "*" + endNo + "=" + endNo*endNo;
		let length_strlongest = strlongest.length;

		while (i <= row) {

			firstNo = startNo;
			secNo = firstNo + i - 1;

			let str = "";
			let length_str = "";

	    	while (firstNo <= secNo) {
	    		str = firstNo + "*" + secNo + "=" + firstNo*secNo;
	    		length_str = str.length;
	    		if(firstNo != secNo) {
	    			let space = length_strlongest - length_str + 1;
	    			for(var j = 0; j < space; j++) {
	    				str += " ";
	    			}
	    		}
	    		table += str;
	    		firstNo ++;
			}
			secNo ++;
			if(i != row)
				table += "\n";
			i ++;
		}
    }
    else
    	table = null;
    return table;
}


module.exports = getMultiplication;