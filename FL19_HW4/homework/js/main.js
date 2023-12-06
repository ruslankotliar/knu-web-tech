/* eslint-disable quotes */
/* eslint-disable no-magic-numbers */
// Write your code here

const dataJs = document.getElementById('data-js')
const btnJs = document.getElementById('btn-js')
const dataFetch = document.getElementById('data-fetch')
const btnFetch = document.getElementById('btn-fetch')
const loading = document.getElementById('loading')
const loadingFetch = document.getElementById('loading-fetch')



btnJs.onclick = () => {
    dataJs.classList.toggle('hidden')
    if (dataJs.childNodes.length < 10) {
        const xml = new XMLHttpRequest();
        
        loading.style.display='block'
        xml.onreadystatechange = function() {
            
            if (this.readyState === 4 && this.status === 200) {
                loading.style.display= 'none'
                for (let user of JSON.parse(xml.responseText)) {
                    const userDiv = document.createElement('div')
                    const userName = document.createElement('h3')
                    
                    userName.textContent = user.name
                    userDiv.appendChild(userName)
                    dataJs.appendChild(userDiv)
                }
                // dataJs.innerHTML = xml.responseText;
            } 
        }

        xml.open("GET", "https://jsonplaceholder.typicode.com/users");
        xml.send();
    } else {
        console.log('Enough!')
    }
    
}

btnFetch.onclick = () => {
    dataFetch.classList.toggle('hidden')
    if (dataFetch.childNodes.length < 10) {
        loadingFetch.style.display='block'
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        loadingFetch.style.display='none'
        console.log(data)
        for (let user of data) {
            let changedName
            const userDiv = document.createElement('div')
            const userName = document.createElement('h3')
            const editBtn = document.createElement('button')
            editBtn.id = 'edit-btn'
            editBtn.textContent = 'Edit'
            
            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'
            deleteBtn.id = 'delete-btn'
            deleteBtn.addEventListener('click', (e) => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
                        method: 'DELETE'
                        })
                        .then(() => { 
                            e.target.parentNode.style.display = 'none'
                        });
            })
            const saveBtn = document.createElement('button')
            saveBtn.textContent = 'Save'
            saveBtn.id = 'save-btn'
            const changeInput = document.createElement('input')
            changeInput.onchange = (e) => {
                changedName = e.target.value
            }
            const editDiv = document.createElement('div')
            editDiv.className = 'hidden'
            
            editDiv.appendChild(changeInput)
            editDiv.appendChild(saveBtn)
            editBtn.onclick = () => {
                editDiv.classList.toggle('hidden')
                saveBtn.onclick = (e) => {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({
                            name: changedName
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8'
                        }
                        })
                        .then((response) => response.json())
                        .then((json) => {
                            console.log(json)   
                            e.target.parentNode.parentNode.childNodes[0].textContent = json.name
                        });
                }
            
                        }
            
            userName.textContent = user.name
            userDiv.appendChild(userName)
            userDiv.appendChild(editBtn)
            userDiv.appendChild(deleteBtn)
            userDiv.appendChild(editDiv)
            dataFetch.appendChild(userDiv)
        }
    })
    } else {
        console.log('Sorry')
    }
    
}
