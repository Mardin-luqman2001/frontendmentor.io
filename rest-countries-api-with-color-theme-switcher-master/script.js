fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v2/all');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);

    debugger


    for(var i=0; i<myJson.length; i++) {
        const div = document.createElement('div');
        div.classList.add('country-item');
    
        const img = document.createElement('img');
        img.classList.add('flag');
        img.setAttribute('src',myJson[i].flag);
    
        const h3 = document.createElement('h3');
        h3.textContent = myJson[i].name;
        
        var li_list = ["Population", "Region", "Capital"];
        var li_values = [myJson[i].population, myJson[i].region, myJson[i].capital];

        const ul = document.createElement('ul');
        
        for(var j=0; j<li_list.length; j++) {
            const li = document.createElement('li');
            li.textContent = li_list[j] + ": " + li_values[j];
            ul.appendChild(li);
        }

    
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(ul);
    
        var c_box = document.querySelector('#countries-box');
        c_box.appendChild(div);

            if(i===10){
                return;
            }
    }


    // do something with myJson

    // var c_name = document.querySelectorAll('#country-item')[0].children[1];
    // c_name.textContent = "pode dei";

    // const div = document.createElement('div');
    // div.classList.add('country-item');

    // const img = document.createElement('img');
    // img.classList.add('flag');

    // const h3 = document.createElement('h3');
    // // const ul = document.createElement('ul');

    // div.appendChild(img);
    // div.appendChild(h3);

    // var c_box = document.querySelector('#countries-box');
    // c_box.appendChild(div);

    console.log(c_box);
    

}

fetchCountries();