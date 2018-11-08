/**
 * Utility to consolidate and return classNames
 * from an arbitrary amount of inputs
 */

 export const cssConcat = (...classes) => {
 	let newString = '';
 	classes.map((a) => (newString += `${a} `));
 	return newString;
 }