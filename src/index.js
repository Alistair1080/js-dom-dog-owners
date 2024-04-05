console.log(data);

// WRITE YOUR CODE BELOW!

const dogList = document.querySelector(".dogs-list")
const dogCard = document.querySelector(".main__dog-section")

function headerRender () {
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement("li")
        li.classList.add("dogs-list__button")
        li.innerText = `${data[i].name}`
    
        li.addEventListener("click", () => {
            console.log(1)
    
            dogCard.innerHTML = ""
    
            const h2 = document.createElement("h2")
            h2.innerText = `${data[i].name}`
            dogCard.append(h2)
    
            const img = document.createElement("img")
            img.setAttribute("src", `${data[i].image}`)
            img.setAttribute("alt", "")
            dogCard.append(img)
    
            const div = document.createElement("div")
            div.classList.add("main__dog-section__desc")
    
            const h3 = document.createElement("h3")
            h3.innerText = "Bio"
            div.append(h3)
    
            const lorem = document.createElement("p")
            lorem.innerText = data[i].bio
            div.append(lorem)
    
            dogCard.append(div)
    
            const p = document.createElement("p")
            // const em = document.createElement("em")
            // em.innerText = "Is naughty?"
            // p.innerHTML = `${em} yes!`
    
            // p.append(em)
            p.innerHTML = "<em>Is naughty?</em> yes!"
            dogCard.append(p)
    
            const button = document.createElement("button")
            button.innerText = "Good dog!"
            dogCard.append(button)
        })
    
        dogList.append(li)
    }
}

headerRender()


const plusButton = document.querySelector(".dogs-list__button", ".dogs-list__button--add")
plusButton.addEventListener("click", () => {
    console.log(8)
    
    dogCard.innerHTML = ""

    const h2 = document.createElement("h2")
    h2.innerText = "Add a new Dog"
    dogCard.append(h2)

    const form = document.createElement("form")
    form.setAttribute("class", "form")

    const nameLabel = document.createElement("label")
    nameLabel.setAttribute("for", "name")
    nameLabel.innerText = "Dog's name"
    
    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("id", "name")
    nameInput.setAttribute("name", "name")
    form.append(nameLabel, nameInput)

    const pictureLabel = document.createElement("label")
    pictureLabel.setAttribute("for", "image")
    pictureLabel.innerText = "Dog's picture"

    const pictureInput = document.createElement("input")
    pictureInput.setAttribute("type", "url")
    pictureInput.setAttribute("id", "image")
    pictureInput.setAttribute("name", "image")
    form.append(pictureLabel, pictureInput)

    const bioLabel = document.createElement("label")
    bioLabel.setAttribute("for", "bio")
    bioLabel.innerText = "Dog's bio"

    const bioTextarea = document.createElement("textarea")
    bioTextarea.setAttribute("rows", "5")
    bioTextarea.setAttribute("id", "bio")
    bioTextarea.setAttribute("name", "bio")

    const submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("id", "submit")
    submit.setAttribute("name", "submit")
    submit.setAttribute("value", "let's add a dog!")
    submit.setAttribute("class", "form__button")
    form.append(bioLabel, bioTextarea, submit)

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const dogObject = {}
        dogObject.name = nameInput.value
        dogObject.bio = bioTextarea.value
        dogObject.image = pictureInput.value

        console.log(nameInput.value)
        nameInput.value = ""
        pictureInput.value = ""
        bioTextarea.value = ""

        data.unshift(dogObject)

        const dogs = dogList.querySelectorAll(".dogs-list__button")
        for (let i = 1; i < dogs.length; i++) {
        dogs[i].remove()
        }
        

        headerRender()
    })



    dogCard.append(form)
})

