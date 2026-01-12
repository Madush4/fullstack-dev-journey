async function fetchRandomUser(){

    try {
        console.log("Fetching random user....")
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json()
        const user = data.results[4]

        console.log("User fetched successfully!")
        console.log("Name:",user.name.first, user.name.last)
        console.log("Email:",user.email)
        console.log("Country:",user.location.country)

    } catch (error){
        console.error("Error fetching user data",error)
    }
}

fetchRandomUser()

