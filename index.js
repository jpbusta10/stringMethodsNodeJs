String.prototype.multiply = function(num2){
    let len1 = this.length;
    let len2 = num2.length;
    if (len1 == 0 || len2 == 0)
        return "0"
 
    // will keep the result str1 in vector
    // in reverse order
    let result = new Array(len1 + len2).fill(0)
     
    // Below two indexes are used to
    // find positions in result.
    let i_n1 = 0
    let i_n2 = 0
 
    // Go from right to left in this
    for (var i = len1 - 1; i > -1 ; i --)
    {
        let carry = 0
        let n1 = (this[i]).charCodeAt(0) - 48
 
        // To shift position to left after every
        // multiplication of a digit in num2
        i_n2 = 0
 
        // Go from right to left in num2
        for (var j = len2 - 1; j > -1; j--)
        {
            // Take current digit of second number
            let n2 = (num2[j]).charCodeAt(0) - 48
         
            // Multiply with current digit of first number
            // and add result to previously stored result
            // at current position.
            let summ = n1 * n2 + result[i_n1 + i_n2] + carry
 
            // Carry for next iteration
            carry = Math.floor(summ / 10)
 
            // Store result
            result[i_n1 + i_n2] = summ % 10
 
            i_n2 += 1
        }
 
        // store carry in next cell
        if (carry > 0)
            result[i_n1 + i_n2] += carry
 
        // To shift position to left after every
        // multiplication of a digit in this.
        i_n1 += 1
         
    }
    // ignore '0's from the right
    i = result.length - 1
    while (i >= 0 && result[i] == 0)
        i -= 1
 
    // If all were '0's - means either both or
    // one of this or num2 were '0'
    if (i == -1)
        return "0"
 
    // generate the result string
    let s = ""
    while (i >= 0)
    {
        s += String.fromCharCode(result[i] + 48)
        i -= 1
    }
 
    return s
}
String.prototype.plus = function(str2){
    
    //let str2 = "";
    //str2 = num2;
    let str1 = this;
    if (str1.length > str2.length){
       
        let temp = str1
        str1 = str2
        str2 = temp
 
    }
         
    // Take an empty string for storing result
    let str = "";
 
    // Calculate length of both string
    let n1 = str1.length, n2 = str2.length;
    let diff = n2 - n1;
    // Initially take carry zero
    let carry = 0;
 
    // Traverse from end of both strings
    for (let i=n1-1; i>=0; i--)
    {
        // compute sum of
        // current digits and carry
        let sum = ((str1.charCodeAt(i)-48) +(str2.charCodeAt(i + diff)-48) + carry);
        str+=(sum%10);
        carry = Math.floor(sum/10);
    }
 
    // // Add remaining digits of str2[]
    for (let i=n2-n1-1; i>=0; i--)
    {
        let sum = ((str2.charCodeAt(i)-48)+carry);
        str+=(sum%10);
        carry = Math.floor(sum/10);
    }
 
    // Add remaining carry
    if (carry)
        str+=(carry+'0');
 
    // reverse resultant string
 
    str = str.split("").reverse().join("");
 
    return str;
}

String.prototype.minus = function (str2){

    let str1 = this;
    function isSmaller(str1,str2)
    {
    let n1 = str1.length, n2 = str2.length;
        if (n1 < n2)
            return true;
        if (n2 < n1)
            return false;
  
        for (let i = 0; i < n1; i++)
            if (str1[i] < str2[i])
                return true;
            else if (str1[i] > str2[i])
                return false;
  
        return false;
    }
     
     // Function for find difference
     // of larger numbers
    
        // make sure str1
        // is not smaller
        
        if (isSmaller(str1, str2)) {
            let t = str1;
            str1 = str2;
            str2 = t;
        }
  
        // Take an empty string for storing result
        let str = "";
  
        // Calculate length of both string
        let n1 = str1.length, n2 = str2.length;
  
        // Reverse both of strings
        str1 = str1.split("").reverse().join("")
        str2 = str2.split("").reverse().join("")
  
        let carry = 0;
  
        // Run loop till small string length
        // and subtract digit of str1 to str2
        for (let i = 0; i < n2; i++)
        {
            // Do school mathematics,
            // compute difference of
            // current digits
            let sub
                = ((str1[i].charCodeAt(0) -
                '0'.charCodeAt(0))
                   - (str2[i].charCodeAt(0) -
                   '0'.charCodeAt(0)) - carry);
  
            // If subtraction is less than zero
            // we add then we add 10 into sub and
            // take carry as 1 for calculating next step
            if (sub < 0) {
                sub = sub + 10;
                carry = 1;
            }
            else
                carry = 0;
  
            str += String.fromCharCode(sub +
            '0'.charCodeAt(0));
        }
  
        // subtract remaining digits of larger number
        for (let i = n2; i < n1; i++) {
            let sub = ((str1[i].charCodeAt(0) -
            '0'.charCodeAt(0)) - carry);
  
            // if the sub value is -ve, then make it
            // positive
            if (sub < 0) {
                sub = sub + 10;
                carry = 1;
            }
            else
                carry = 0;
  
            str += String.fromCharCode(sub +
            '0'.charCodeAt(0));
        }
  
        // reverse resultant string
        return str.split("").reverse().join("")
    }

    String.prototype.divide = function (str2){
        str1 = this;
        let ans="";
   
        // Initially the carry
        // would be zero
        let idx = 0;
        let temp = str1[idx]-'0';
        while (temp < str2)
        {
            temp = (temp * 10 +
            (str1[idx + 1]).charCodeAt(0) -
                   ('0').charCodeAt(0));
            idx += 1;
        }
        idx += 1;
         
        while(str1.length>idx)
        {
            // Store result in answer i.e. temp / str2
            ans += String.fromCharCode(Math.floor(temp / str2) + ('0').charCodeAt(0));
            // Take next digit of str1
            temp = ((temp % str2) * 10 +
            (str1[idx]).charCodeAt(0) -
                  ('0').charCodeAt(0));
            idx += 1;
        }
         
        ans += String.fromCharCode
        (Math.floor(temp / str2) +
        ('0').charCodeAt(0));
         
        //If str2 is greater than str1
        if(ans.length==0)
            return "0";
        //else return ans
        return ans;
    }

    

console.log('multiply');
console.log('74884984984984989'.multiply('165161654165165'));
console.log('sum:');
console.log('6546546546'.plus("651656516516"));
console.log('diference', '6'.minus('4'));
console.log('division', '4'.divide('2'));
