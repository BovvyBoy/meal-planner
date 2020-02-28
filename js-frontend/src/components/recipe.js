class Recipe{

    constructor(recipe){
        const { id, name, origin, instructions, image, video, category} = recipe
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
            <h2>${this.name}</h2>
            <h3>${this.origin}</h3>
            <h3>${this.category}</h3>
            <h3>${this.instructions}</h3>
            <h3>${this.image}</h3>
            <h3>${this.video}</h3>
    
            <button data-id=${this.id} id="edit-planner">Add To Planner</button>
        `)
    }
}