var arr = ["孙悟空","猪八戒","沙和尚","唐僧","白骨精"];
// slice();

var result = arr.slice(0,2);
document.write(arr);
document.write("<br>");
document.write(result);
document.write("<br>");
var result1 = arr.slice(1);
document.write(result1);
document.write("<br>");
document.write("<br>");
document.write("<br>");
var arr1 = ["孙悟空","猪八戒","沙和尚","唐僧","白骨精"];
var result2 = arr1.splice(0,2);
document.write(arr1);
document.write("<br>");
document.write(result2);
document.write(result2.length);
document.write(arr1.length);



document.write("<br>");
document.write("<br>");


var arr3 = [3,4,6,7,2,8];
var a = arr3.splice(2,2,9,10);
document.write(arr3);
document.write(arr3.length);
document.write(a);



var arr4 = ["b","d","e","a","c"];
arr4.sort();
document.write(arr4);


var arr5 = [7,4,3,21,78];
arr5.sort();
document.write(arr5);










