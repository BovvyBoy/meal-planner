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
            <select id="planner">
                ${current_user.planners.map(p => p.optAndLinkHTML).join('')}
            </select>
    
            <button data-id=${this.id} id="edit-planner">Add To Planner</button>
        `)
    }

    // get recipeHTML() {
    //     return(`
    //         <h2>${this.name}</h2>
           
    //     `)
    // }

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

