const keywordEl = document.querySelector('#keyword');
const searchbtn = document.querySelector('.btn');


function callApi(){
    const clientID = process.env.clientID;
    const keywordInput = keywordEl.value;
    const keyword = keywordInput.replace(" ", "-");
    console.log(keyword)


    const geekAPI = 'https://api.seatgeek.com/2/performers?slug='+ keyword +'&client_id='+ clientID 
    // this URL pulls artist search directly 
    //const geekAPI = 'https://api.seatgeek.com/2/venues?city='+ keyword +'&client_id='+ clientID 
    //this URL pulls venues 
    //if you want to pull state venues just change city to state and have the user enter it 
    console.log(geekAPI);


    
    fetch(geekAPI)
    .then(response => {
        return response.json();
    })
    .then(data => {

         console.log(data)
             for (let i = 0; i < data.performers.length ; i++) {
                 let artistName = data.performers[i].name;
                 let numUpcomingEvents = data.performers[i].num_upcoming_events;
                 console.log(artistName + ' ' + numUpcomingEvents)
             }
             //can pull URL to get tickets for events either through performers or venue
            // for (let i = 0; i < data.venues.length ; i++) {
            //     let venues = data.venues[i].name;
            //     let address = data.venues[i].address;
            //     console.log(venues + ' ' + address);
            // }
            // this loop for example pulls names of venues 
    })
    
}

searchbtn.addEventListener('click', () => {
    callApi();
});