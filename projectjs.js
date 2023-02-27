const getNewUser = (username, email) => {
  const li = document.createElement('li');

   const usernameDiv = document.createElement('div');
   usernameDiv.classList.add('username');
   usernameDiv.innerText = username;

   li.append(usernameDiv);

   const emailDiv = document.createElement('div');
   emailDiv.classList.add('email');
   emailDiv.innerText = email;

   li.append(emailDiv);
 
   return li;
}

const usernameNode = document.getElementById('username');
const emailNode = document.getElementById('email');

const form = document.getElementById('add-user');
const ul = document.getElementById('user-list');

form.addEventListener('submit', (event) => {
   event.preventDefault();
   const username = usernameNode.value;
   const email = emailNode.value;
   
   const newUser = getNewUser(username, email);
   console.log('data',  {
     username,
     email,
     newUser,
   });
   ul.append(newUser);
   usernameNode.value = '';
   emailNode.value = '';
})