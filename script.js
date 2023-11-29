
function  covertTemp(){
    const inputTeam=document.getElementById('input1').value;
    const GivenScale=document.getElementById('selextInput').value;
    const selectScale=document.getElementById('selectOutput').value;
    //console.log("hekko");
    console.log(inputTeam +'  '+GivenScale +  selectScale);
    let result = 'To be determined...';

    const out=document.getElementById('output1');
    out.value=result;

    if(GivenScale =="Choose type" )
    {
        alert("plese chhoose type of input Temperature")
    }
    else
    if(selectScale =="Choose type"){
        
        alert("plese chhoose type of output Temperature")
    }


    if(GivenScale == selectScale && givenScale != 'Choose scale'){
        result = inputTeam + selectScale;
    }

    //kelvin and celcius
    else if(GivenScale=='°C' && selectScale=='K'){
        result = (parseFloat(inputTeam) + 273.15) + ' K';
    }
    else if(GivenScale=='K' && selectScale=='°C'){
        result = (parseFloat(inputTeam) - 273.15) + ' °C';
    }

    //celcius and fahrenheit
    else if(GivenScale=='°C' && selectScale=='°F'){
        result = (9*parseFloat(inputTeam)/5.0 + 32.0 ) + ' °F';
    }
    else if(GivenScale=='°F' && selectScale=='°C'){
        result = ((parseFloat(inputTeam) - 32.0)*5/9.0 ) + ' °C';
    }
    //kelvin and fahrenheit
    else if(GivenScale=='K' && selectScale=='°F'){
        result = (9*(parseFloat(inputTeam) - 273.15)/5.0 + 32.0 ) + ' °F';
    }
    else if(GivenScale=='°F' && selectScale=='K'){
        result = ((parseFloat(inputTeam) - 32.0)*5/9.0 + 273.15) + ' K';
    }

    out.value=result;
    console.log(result);
}