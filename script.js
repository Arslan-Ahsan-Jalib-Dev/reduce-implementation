/***------Reduce in javescript------***/
/* Syntex:-
         arry.reduce(callback_function(acc,val,index,source_array),initial_value);

1)The reuce method executes the callback function to each element of the array and returns the 
  single value,array or object as an output.

2)The callback function further takes four parameters as an input acc,val,index,source_array

3)The reducer does not change the orignal array


Reducer Inputs:-

 callback function
   acc                Required     The intial value or value return from the last function call
   val                Required     The Value of the Current Element
   index              Optional     The index of the current element
   array              Optional     The array of the current ellement
  
 Initial Value
   The intial value pass by the function

Reducer Output:-
    The accmulated value from the last callback function call
    
*/

// 1) Reduce Implementation

var my_array=[1,2,3,4];
var result=reduce(my_array,sum,0);
function reduce(array,callback,initial_value){
    var acc=initial_value;
    for(i=0;i<array.length;i++){
        acc=callback(acc,array[i]);
    }
    return acc;
}

function sum(acc,val,index,source_array){
    var addition=acc+val;
    return addition;
}
console.log(result);