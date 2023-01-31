const calculateTemp = ()=>{
    const numberTemp = document.getElementById('temp').value;
    console.log(numberTemp)

    let SelectedIndx = document.getElementById('selectTemp').selectedIndex;
    let opt = document.getElementById('selectTemp').options;
    let val =  opt[SelectedIndx].value;
    console.log(val=='cel');
    let result;

    const celToFah = (num) =>{
        let fahrenheit = ((num * 9)/5)+32;
        fahrenheit = fahrenheit.toFixed(2);
        return fahrenheit;
    }
    const fahToCel = (num) =>{
        let celcius = ((num -32)*5)/9;
        celcius = celcius.toFixed(2);
        return celcius;
    }

    if(val == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `=${result} &#176;Fahrenheit`;
       
    }
    else{
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `=${result} &#176;Celcius`;
    }
}