class Recipe{

    constructor(recipe){
        const { id, name, origin, instructions, image, video, category } = recipe
        this.id = id
        this.name = name
        this.origin = origin
        this.instructions = instructions
        this.image = image
        this.video = video
        this.category = category
    }

    get showHTML(){
        return (`
            <div>
                <img src=${this.image}></img>
            </div>
            <h2>${this.name}</h2>
            <h4>${this.origin}</h4>
            <h5>${this.category}</h5>
            <h5>${this.instructions}</h5>
            <h3>${this.video}</h3>

            <button id=${this.id}>Add To Planner</button>
        `)
    }

    get plannerShowHTML(){
        return (`
            <div>
                <img src=${this.image}></img>
            </div>
            <h2>${this.name}</h2>
            <h4>${this.origin}</h4>
            <h5>${this.category}</h5>
            <h5>${this.instructions}</h5>
            <h3>${this.video}</h3>
        `)
    }

    get liAndLinkHTML(){
        return `<li><a href="#" data-id="${this.id}">${this.name}</a></li>`
    }
}

{/* <div class="recipe-card">
                <div class="recipe-frame">
                    <h2 class="center-text">${this.name}</h2>
                    <div class="recipe-info">
                        
                        <h3>${this.origin}</h3>
                        <h3>${this.category}</h3>
                        <h3>${this.instructions}</h3>
                        <h3>${this.video}</h3>
                    </div>
                </div>
            </div> */}

