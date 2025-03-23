function submitData(name, email) {
    // Create the data object to send
    const data = {
      name: name,
      email: email
    };
  
    // Perform the POST request
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json()) // Parse the JSON from the response
      .then(object => {
        // Append the new user ID to the DOM
        const responseContainer = document.getElementById("response-container");
        responseContainer.textContent = `New user ID: ${object.id}`;
      })
      .catch(error => {
        // Handle errors and append the error message to the DOM
        const responseContainer = document.getElementById("response-container");
        responseContainer.textContent = `Error: ${error.message}`;
      });
  }
  
  
  