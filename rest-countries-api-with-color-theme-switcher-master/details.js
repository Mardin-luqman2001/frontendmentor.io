
jsonData = localStorage['jsonData'];


var countriesData = JSON.parse(jsonData);


for(var i=0;i<countriesData.length;i++){
    console.log(countriesData[i].name);
}