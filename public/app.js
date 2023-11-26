document.addEventListener('DOMContentLoaded', function () {






    // Function to fetch data from the server and update the webpage
    // async function fetchData() {
    //     try {
    //         const response = await fetch('/users');
            
    //         // Check if the response is ok (status 200-299)
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    
    //         const data = await response.json();
    
    //         const contentElement = document.getElementById('content');
    //         if (data.results) {
    //             const formattedData = data.results.map(test => `<li>${test.t1}, t2: ${test.t2}</li>`).join('');
    //             contentElement.innerHTML = `<ul>${formattedData}</ul>`;
    //         } else {
    //             contentElement.innerHTML = 'No data available';
    //         }
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         // Handle errors or display an error message on the webpage
    //     }
    // }

    // // Call the fetchData function when the page loads
    // fetchData();

});


function submitForm() {
    const form = document.getElementById('signup-form');

    // Create FormData object from the form
    const formData = new FormData(form);

    // Make a POST request to the server
    fetch('/signup', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
     })
     .then(data =>{
        // Handle success
        console.log('Success:', data);
     })
     .catch(error => {
        // Handle error
        console.error('Error', error);
     })
}