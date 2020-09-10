let button = document.querySelector('#getTracks') // Button on the index.html page
let song = document.querySelector('#song'); // Input to select a song based on the text given
let songDiv = document.querySelector('#showsongs') // Show the songs -- (Still in progress)


/**
 * 
 * @param {*} e 
 * @param {*} song 
 * 
 * handleClick will take in an event (e) and a song (song)
 * running a fetch request to the locally hosted API 
 */
function handleClick(e, song){

    console.log(song.value)

    e.preventDefault()
    fetch(`http://localhost:3001/song/${song.value}`)
        .then(result => result.json())
        .then(rawData => {
            console.log(rawData)
            let data = rawData.body
            for(let i = 0; i < data.length; i++){
                document.body.append(songDiv.innerHTML=`<p> ${data[i]} </p>`)
            }
            console.log(data)
        })
}

button.addEventListener('click', e => handleClick(e, song))