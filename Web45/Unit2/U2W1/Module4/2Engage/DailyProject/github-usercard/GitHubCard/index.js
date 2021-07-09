import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// Used HTTPie to pull up the reques, startline, headers etc. 
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
//RICKS NOTES: The structure looks like an object of ky value pairs. 
    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cardsDiv = document.querySelector('.cards');

axios.get('https:api.github.com/users/rickmansfield', {
})
.then(function (response) {
  console.log(response);
  cardsDiv.appendChild(gitHubCardMaker(response.data));
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'KevinHock',
  'cdwieber',
  'owen800q',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  `EricGrant`
];
followersArray.forEach( str => {
  addAPerson(str);
});
function addAPerson(name){
  axios.get(`https:api.github.com/users/${name}`, {
  })
  .then(function (response) {
    console.log(response);
    cardsDiv.appendChild(gitHubCardMaker(response.data));
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitHubCardMaker(object){
const cardNode = document.createElement('div');
console.log(cardNode);
const img = document.createElement('img');
const cardInfo = document.createElement('div');
const h3 = document.createElement('h3');
const pUserName = document.createElement('p');
const pLocation = document.createElement('p');
const pProfile = document.createElement('p');
const aProfileURL = document.createElement('a');
const pFollowers = document.createElement('p');
const pFollowing = document.createElement('p');
const pBio = document.createElement('p');

cardNode.classList.add('card');
cardInfo.classList.add('card-info');
h3.classList.add('name');
pUserName.classList.add('username');

cardNode.appendChild(img);
cardNode.appendChild(cardInfo);
cardInfo.appendChild(h3);
cardInfo.appendChild(pUserName);
cardInfo.appendChild(pLocation);
cardInfo.appendChild(pProfile);
cardInfo.appendChild(aProfileURL);
cardInfo.appendChild(pFollowers);
cardInfo.appendChild(pFollowing);
cardInfo.appendChild(pBio);


img.setAttribute('src', object.avatar_url);
// img.src = object.avatar_url;
h3.textContent = object.name;
pUserName.textContent = object.login;
pLocation.textContent = object.location;
pProfile.textContent = 'Profile: ';
aProfileURL.setAttribute('href', object.html_url);
//aProfileURL.href = object.html_url;
aProfileURL.textContent = object.html_url;
pFollowers.textContent = `Followers: ${object.followers}`;
pFollowing.textContent = `Following: ${object.following}`;
pBio.textContent = `Bio: ${object.bio}`;


return cardNode;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
