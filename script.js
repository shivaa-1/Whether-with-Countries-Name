const output=document.getElementById("cards");
console.dir(output);

// function normal(){

async function getdata(){
    let data = await fetch("https://restcountries.com/v3.1/all");
    let jobject =  await data.json();
    // console.log(jobject);
    let result="";

    jobject.forEach(obj => {
        const value1 = obj.latlng[0];
        const value2 = obj.latlng[1];
        result+=`
        <div class="card">
        <img src="${obj.flags.png}" widht="100px" height="200px" alt="flags">
        <h1>Name: ${obj.name.common}</h1>
        <h2>Region: ${obj.region}</h2>
        <h3>Population: ${obj.population}</h3>
        <h3>Location: <a href="${obj.maps.googleMaps}">Click Here</a></h3>
        <button onclick="showwhether(${value1},${value2})" id="showwhether">Get Whether</button>
        </div>`
        // const value1 = obj.latlng[0];
        // const value2 = obj.latlng[1];
        // const latlang = parseInt(value);
        // console.log(latlang)
        // console.log(value1)
        // console.log(value2)

        //

    });

    output.innerHTML=result;
}


async function showwhether(lat=0,lng=0){
    let Whetherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f5a588675c0d25bfa9da1cec92117092&units=metric`)

    try {
        let res = await Whetherdata.json();
    console.log(res.main); 

    alert(`The Temprature Is: ${res.main.temp} Degree Celcius.`);
        
    } catch (error) {
        alert(`Facing Some Problems`)
    }

}
