function fetching(to,from,amount){
    var myHeaders = new Headers();
    myHeaders.append("apikey", "8b8kZn5Me6TtSIl33DzoRQRjqIvhwxCY");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    const link = "https://api.apilayer.com/currency_data/convert?to=" + to +"&from="+from+"&amount="+amount+""

    fetch(link, requestOptions)
    .then((response) =>{
        return response.json();
    }).then((rezultat) => {
        console.log(rezultat.result);
        document.getElementById('number2').value = rezultat.result;
    })
    .catch(error => console.log('error', error));
}



function myFunction(){
    const firstValue = document.getElementById("number").value;
    const moneda1 = document.getElementById("monede1").value;
    const moneda2 = document.getElementById("monede2").value;
    
    fetching(moneda2,moneda1,firstValue);

    console.log(firstValue + ' ' + moneda1 + ' ' + moneda2);

}

