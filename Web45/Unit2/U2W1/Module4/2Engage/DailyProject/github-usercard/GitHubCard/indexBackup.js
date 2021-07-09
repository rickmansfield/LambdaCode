axios.get('https://api.github.com/users/ashleyannlaz', {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  userDiv.appendChild(myFun(response.data) )
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});

const userDiv = document.querySelector('.cards')
function myFun(object){
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileUrl = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3.classList.add('name');
  userName.classList.add('username');

  cardImg.src = object.avatar_url;
  h3.textContent = object.name;
  userName.textContent = object.login;
  location.textContent = `Location: ${object.location}` ;
  profile.textContent = `Profile: `;
  profileUrl.textContent = object.html_url;
  profileUrl.href = object.html_url;
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`;

  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileUrl);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

const followersArray = [
  'tetondan', 
  'dustinmyers', 
  'justsml', 
  'luishrd',
  'bigknell',
];
// loops through the followersArray
followersArray.forEach(e => {
  cardArray(e);
})
// function that takes username as an argument and gets api data
function cardArray(username) {
  axios.get(`https://api.github.com/users/${username}`, {
  params: {
    ID: 12345
  }
})
.then(function (response) {
  userDiv.appendChild(myFun(response.data) )
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});
}