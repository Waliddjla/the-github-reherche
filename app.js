//https://api.github.com/users/ 

const APICALL = "https://api.github.com/users/";

const affichage = document.querySelector('.affichage');

const form = document.querySelector('.form-github');

const inpRecherch = document.querySelector('.inp-recherche');

async function dataGihub(utilisateur) {
    const reponse = await fetch(`${APICALL}${utilisateur}`);
    if (reponse.status === 404) {
        const notFoundMessage = `
        <div class="carte">
        <p>User not found. try again !</p>
        </div>
        `;
        affichage.innerHTML = notFoundMessage;
    } else {
        const data = await reponse.json();
        creationCarte(data);
    }
}


function creationCarte(user){

    const carteHTML = `
    <div class="carte">
    <img src = "${user.avatar_url}" alt="icone avatar" class="avatar"> 
    <h2>${user.name}</h2>
    <ul class="cont-infos">
    <li class="bio">bio : ${user.bio}</li>
    <li class="location">${user.location}</li>
    <li class="followers">followers : ${user.followers}</li>
    <li class="following">following : ${user.following}</li>
    <li class="repos">repos : ${user.public_repos}</li>
    </ul>
    `;
    
    affichage.innerHTML = carteHTML;
   
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (inpRecherch.value.length > 0) {
        dataGihub(inpRecherch.value);
        inpRecherch.value = "";

    }
})