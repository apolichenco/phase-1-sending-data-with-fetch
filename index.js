function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body:JSON.stringify({
            name: userName, 
            email: userEmail,
        })
    })
    .then((res) => res.json())
    .then((object) => {
        document.querySelector('body').innerHTML += object.id
    })
    .catch(function (error) {
    const message = "Unauthorized Access"
    document.querySelector('body').innerHTML += message
    });
}





submitData("Steve", "steve@steve.com");



// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application-json:",
//     },
//     body: JSON.stringify({    
//         dogName: "Byron",
//         dogBreed: "Poodle",})})
//     .then((response) => response.json())
//     .then((object) => console.log(object))
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });