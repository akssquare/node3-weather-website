console.log('Client side javascript file is loaded.');

// fetch('http://puzzle.mead.io/puzzle').then(
//     (response) => {
//         response.json().then((data) => {
//             console.log(data)
//         })
//     }
// )

console.log('New Change for git');
const weatherform = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');


weatherform.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    console.log(location);

    if(location.length==0) return;
    console.log('/weather?address=' +encodeURI(location))

    fetch('/weather?address=' +encodeURI(location) ).then(
        (response) => {
            if(response.error){
                console.log('There is some error')
            } else{
                response.json().then((data) => {
                    if(data.error){
                        console.log('->' + data.error);
                        message1.textContent=data.error;
                    } else { 
                        message1.textContent=data.location;
                        message2.textContent=data.forecast;
                        console.log(data.location);
                        console.log(data.forecast);
                    }
                })
            }
            
        }
    )

    
})

function getWeatherInfo(location) {
    
}

