function validEmail(str) {
  //your JS code here.
	 // Define a regular expression pattern for validating email addresses
    const strRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Test the input string against the regular expression
    return strRegex.test(str);
} 

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
