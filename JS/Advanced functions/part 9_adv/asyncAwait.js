function fetchUserData(){
    return new Promise((resolve,reject) => {
        
        setTimeout(() => {
            resolve({name: "Madush", url: "https://google.com"})
        }, 4000);
    })

        
}

// fetchUserData()
// .then()
// .catch()

async function getUserData() {
    try {
        console.log("Fetchinng User Data ....")
        const userData = await fetchUserData()

            console.log("User data fetched successfully")
            console.log("User data: ",userData)
        
    } catch (error) {
        console.log("Error fetching data.",error)
    }
}

 getUserData()

 