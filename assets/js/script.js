const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]


function cercaLavori(title,location){

    let results = []
    let counter = 0

    for(let job of jobs){
        //console.log(job)
        //console.log(job.title)
        //console.log(job.location)
        if(job.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) && job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())){
            
            results.push(job)
            counter++
        }
    }
    return {
        results,
        counter
    }

}

//cercaLavoro("US","dev")

//console.log(cercaLavoro("Sales","US"))

let search = document.querySelector('#cerca')

search.addEventListener('click', ()=>{
    //console.log('evento')

    function mostraRisultati(){

        let title = document.querySelector('#title').value
        //console.log(title)    
        let location = document.querySelector('#location').value
        //console.log(location)   
        let lavoriFiltrati = cercaLavori(title,location)
        //console.log(lavoriFiltrati)
        //console.log(lavoriFiltrati.results)
    
        const elencoRisultati = document.querySelector('#results')

        elencoRisultati.innerHTML = ""
        
        const h2 = document.createElement('h2')
        h2.innerHTML = 'Risultati di ricerca: <span id="counter">0</span>'
        h2.classList.add('p30')
        elencoRisultati.appendChild(h2)

        const ul = document.createElement('ul')
        elencoRisultati.appendChild(ul)

        const contatoreRisultati = document.querySelector('#counter')

        if(title === "" && location === ""){

            alert('Compila entrambi i campi prima di cercare.')
            return

        } else if(lavoriFiltrati.counter === 0){

            alert('La ricerca non ha prodotto risultati.')
            return

        } else {

            for(let lavoro of lavoriFiltrati.results){
                
                const li = document.createElement('li')
                li.innerText = lavoro.title + " | " + lavoro.location
                li.classList.add('p30')
                ul.appendChild(li)
    
                contatoreRisultati.innerText = lavoriFiltrati.counter   
            }

            elencoRisultati.classList.add('show-me')
    
            const eliminaRisultati = document.createElement('button')
            eliminaRisultati.innerText = 'Elimina i risultati'
            eliminaRisultati.setAttribute('id','clear-results')
            elencoRisultati.appendChild(eliminaRisultati)
    
            eliminaRisultati.addEventListener('click', ()=>{
                ul.remove()
                eliminaRisultati.remove()
                contatoreRisultati.innerText = 0
                elencoRisultati.classList.remove('show-me')
                
            })
        }

    }

    mostraRisultati()
}) 
    





