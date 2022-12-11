document.addEventListener("DOMContentLoaded",() =>{
    console.log("detailsOfUser")
})



function userDetails(){
    document.querySelector('form').addEventListener('submit',(e) =>{
        e.preventDefault()

        const search = document.getElementById('search').value 
        const details = search.replace("","")
        console.log(details)
    


    fetch('`https://api.github.com/users/${searchInput}`')
    .then(resp => resp.json())
    .then(data =>{displayUser(data) user Repo(data)})


})
}


function displayUser(user){
    const one=document.createElement('one')

    one.innerHTML=` <img src="${user.avatar_url}"/>
    <h1>${user.login}</h2>
    <a href="${user.html_url}">Check Profile</a>`
    document.getElementById('user_list').appendChild(one)
}

function userRepo(rep){
    fetch(rep.rep_url)
   .then(res => res.json())
   .then(repoData => repoData.forEach(repo => renderRepo(repo)))
}
function displayRepo(repos){
    const relink=document.createElement('two')
    relink.innerHTML=`${repos.name}`
    document.getElementById('repo_list').appendChild(relink)
}