
function fetchWithTimeOut(url, timeout = 3000){
  const fetchPromise = fetch(url)
  const timeOutPromise = new Promise ((_,reject)=> 
  setTimeout(() => reject (new Error ("Request timed out")),timeout))

  return Promise.race([fetchPromise,timeOutPromise])

}



async function fetchRandomDog() {
  try {
    console.log("Fetching random dog....");
    const response = await fetchWithTimeOut("https://dog.ceo/api/breeds/image/random",3000);


    const data = await response.json();
    console.log(data.message);
    console.log(data.status);
  } catch (error) {
    console.error("Error fetching data.", error);
  }
}

fetchRandomDog();

async function fetchRandomJoke() {

    try {
        console.log("Fetching joke data....")
        const response = await fetchWithTimeOut(
          "https://official-joke-api.appspot.com/random_joke",3000
        );

        const data = await response.json()
        console.log(data.setup)
        console.log(data.punchline)


    } catch (error) {
        console.log("Error fetching data.",error.message)
    }
    
}

fetchRandomJoke()


