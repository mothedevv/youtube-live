const keywordEl = document.querySelector('#keyword');

export default function callApi(){
    const clientID = process.env.clientID;
    const keywordInput = keywordEl.value;
    const keyword = keywordInput.replace(" ", "-");
    console.log(keyword)


    const geekAPI = 'https://api.seatgeek.com/2/performers?slug='+ keyword +'&client_id='+ clientID 
    // this URL pulls artist search directly 
    console.log(geekAPI);


    
    fetch(geekAPI)
    .then(response => {
        return response.json();
    })
    .then(data => {
            //  for (let i = 0; i < data.performers.length ; i++) {
            //      let artistName = data.performers[i].name;
            //      let numUpcomingEvents = data.performers[i].num_upcoming_events;
            //      console.log(artistName + ' ' + numUpcomingEvents)
            //  }
             //can pull URL to get tickets for events either through performers or venue
        console.log(data)
        return data;

   })
    
}
