let notesHtml = document.querySelector('#notes')
let inputs = {
    title: document.querySelector('#inputTitle'),
    text: document.querySelector('#inputText'),
    getInfo(){
        return {
            title: this.title.value,
            text: this.text.value
    }
}}

let notesStore = [
    {
        id:1,
        title: 'Title 1',
        text: 'Зробити дз'
    }
]

let generateNotes = () => {
    notesHtml.innerHTML = null
    notesStore.map((el,index) => {
        noteHtml.innerHTML += `
        <div class="noteBlock">
        <h2>${el,title}</h2>
        <p>${el,text}</p>
        </div>
         `
    })
}

let btnPostClick = () => {
    console.log(inputs.getInfo() ? inputs.getInfo() : "Write input")

    }



btnPost.addEventListener('click', btnPostClick)