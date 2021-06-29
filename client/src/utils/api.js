const searchbtn = document.querySelector('.btn');

function callApi(){
    const cbus = 9480
    const apiKey = ''

    const songAPI = 'https://api.songkick.com/api/3.0/metro_areas/'+ cbus +'/calendar.json?apikey=' + apiKey

    console.log(songAPI);


    
    fetch(songAPI)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
            for (let i = 0; i < data.resultsPage.results.event.length ; i++) {
                let eventName = data.resultsPage.results.event[i].displayName
                console.log(eventName)
            }
    })
    
}

searchbtn.addEventListener('click', () => {
    callApi();
});