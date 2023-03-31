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
      let ner=''
      if (newpop.length<=6) {
       newi= newpop.slice(newpop.length-4,newpop.length-1)
       ner = newi.split() ;
      }
     else if (newpop.length>6) {
        newi= newpop.slice(newpop.length-7,newpop.length-4)
        ner = newi.split() ;
       }
      return ` <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card .bg-primary-subtle p-3">
            <img src="${country.flags.png}" class="card-img-top" style="height: 60%;>
            <div class="card-body">
              <h5 class="card-title">${newpop}</h5>
              <h5 class="card-title">${country.capital}</h5>
              <p class="card-text">${ner}</p>
            </div>
          </div>
    </div>`
    })
    box.innerHTML = newData.join('');

 
});
