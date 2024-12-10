const users = [
    { username: "John Doe", bio: "Traveling the world", followers: 150, following: 75 },
    { username: "Jane Smith", bio: "Lover of books and coffee", followers: 220, following: 150 }
];

function searchUsers() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredUsers = users.filter(user => user.username.toLowerCase().includes(query));
    
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";

    filteredUsers.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");

        userDiv.innerHTML = `
            <h3>${user.username}</h3>
            <p>${user.bio}</p>
            <p>${user.followers} Followers | ${user.following} Following</p>
            <button onclick="followUser('${user.username}')">Follow</button>
        `;
        
        userList.appendChild(userDiv);
    });
}

function followUser(username) {
    alert(`You followed ${username}`);
}
