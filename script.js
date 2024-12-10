// Handle Create Post Form Submission
document.getElementById('createPostForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const postImage = document.getElementById('postImage').files[0];
    const caption = document.getElementById('caption').value;
    const location = document.getElementById('location').value;
    const tags = document.getElementById('tags').value;

    // Simulate posting data
    alert(`Post created with caption: ${caption}, Location: ${location}, Tags: ${tags}`);
});

// Handle Search User
function searchUser() {
    const searchQuery = document.getElementById('searchUser').value;
    const searchResults = document.getElementById('searchResults');

    // Simulate searching for users
    if (searchQuery) {
        searchResults.innerHTML = `<div>User: ${searchQuery} <button onclick="followUser()">Follow</button></div>`;
    } else {
        searchResults.innerHTML = '';
    }
}

// Follow/Unfollow User
function followUser() {
    alert('User followed!');
}

// Handle Profile Changes
document.getElementById('changeProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bio = document.getElementById('bio').value;
    const profilePicture = document.getElementById('profilePicture').files[0];

    // Simulate updating profile
    alert('Profile updated successfully!');
});

// Handle Like and Comment actions
function likePost() {
    alert('Post liked!');
}

function commentPost() {
    alert('Commented on post!');
}
// Sign-up form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Simulate a sign-up request to the backend
    alert('User Signed Up with email: ' + email);
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Simulate a login request to the backend
    alert('User Logged In with email: ' + email);
});

// Profile picture and bio update
document.getElementById('changeProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const bio = document.getElementById('bio').value;
    const profilePicture = document.getElementById('profilePicture').files[0];
    // Simulate profile update
    alert('Profile Updated');
});

