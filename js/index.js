const box = document.querySelector('.row');






fetch('https://restcountries.com/v3.1/all').then((response)=> response.json()).then
((data) => {
  data.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    } else if (a.name.common > b.name.common) {
      return 1;
    } else {
      return 0;
    }
  });
   const newData= data.map((country) =>{
      
      let newpop = country.population.toString();
      let newi=[]
      if (newpop.length<=6) {
       newi= `${parseInt(newpop.slice(0,newpop.length-3))/10}`
      }
     else if (newpop.length>6 && newpop.length<=9) {
      newi= `${parseInt(newpop.slice(0,newpop.length-5))/10}m`
       }
       else if(newpop.length>9){
        newi= `${parseInt(newpop.slice(0,newpop.length-8))/10}b`
       }
    
       console.log(newi);
      return ` <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card .bg-primary-subtle p-3">
            <img src="${country.flags.png}" class="card-img-top" style="height: 60%;>
            <div class="card-body">
              <h5 class="card-title">${country.name.common}</h5>
              <h5 class="card-title">${country.capital}</h5>
              <p class="card-text">${newi}</p>
            </div>
          </div>
    </div>`
    })
    box.innerHTML= newData.join('');

 
});
