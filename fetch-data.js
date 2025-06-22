// Initializing Async function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data display container
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create User List
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; 
            userList.appendChild(listItem);
        });
        // Append List to container
        dataContainer.appendChild(userList);

         } catch (error) {
        // Errors Handling
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}
// Call fetchUserData
    document.addEventListener('DOMContentLoaded', function () {
    fetchUserData();
});
