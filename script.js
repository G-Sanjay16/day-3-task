//! 1. compare two jason have the same properties without order
//!   let obj1= {name:"person 1", age:5};
//!   let obj2= {name:{age:5,name:"person 1";}
let obj1 = { name: "person 1", age: 5 };
let obj2 = { name: { age: 5, name: "person 1" } };

function sortObject(obj) {
    return JSON.stringify(obj, Object.keys(obj).sort());
}
function compareJSON(obj1, obj2) {
    return sortObject(obj1) === sortObject(obj2);
}
console.log(compareJSON(obj1, obj2));

//! 2. XMLHTTPREQUEST display all the country flags in the console 

var assignment =new XMLHttpRequest();
assignment.open("GET","https://restcountries.com/v3.1/all")
assignment.send();
assignment.onload = function () {
    var data = assignment.response;
    var result = JSON.parse(data);
    console.log(result);
    for(var i=0;i<result.length;i++){

        console.log(result[i].flags.svg)
}
}

//! 3. print all the countries names,region,subregionand population

var assignment1 =new XMLHttpRequest();
assignment1.open("GET","https://restcountries.com/v3.1/all")
assignment1.send();
assignment1.onload = function () {
    var data = assignment.response;
    var result1 = JSON.parse(data);
    console.log(result1);
    for(var i=0;i<result1.length;i++){
        console.log("countryname:"+" "+result1[i].name.Common , "region:"+" "+result1[i].region,"subregion:"+" "+result1[i].subregion , "population:"+" "+result1[i].population );
}
}

