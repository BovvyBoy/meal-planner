class Planner{

    static formHTML(planner){
        return (`
        <form id="${planner ? 'edit' : 'new'}-planner-form">
            ${planner ? '<input type="hidden" value="' + planner    .id + '">' : ''}
            <div class="form-group">
                <label for="name">Planner Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name" value=${planner ? planner.name : '' } required>
            </div>
            <div class="form-group">
                <label for="duration">Number of Days</label>
                <input type="number" class="form-control" id="duration" placeholder="Duration" value=${planner ? planner.duration : '' }  required>
            </div>
            
            <button type="submit" class="btn btn-primary">${planner ? 'SAVE' : 'CREATE'}</button>
        </form>
        `)
    }

    constructor(planner){
        const {id, name, duration, recipes} = planner
        this.id = id
        this.name = name
        this.duration = duration
        this.recipes = []
    }

    get formHTML(){
        return Planner.formHTML(this)
    }

    get showHTML(){
        return (`
            <h2>${this.name}</h2>
            <h3>Recipes:</h3>
            <ul>${this.recipes.map(r => r.liAndLinkHTML).join('')} </ul>
            <h3>${this.duration} Meals</h3>
            <button data-id=${this.id} id="edit-planner">Edit</button>
        `)
    }

    async fetchAndRenderPageResources(){
        try{
            const planner = await this.adapter.getPlannerById(this.id)
            this.recipes = planner.recipes.map(r => new Recipe(r))
            this.renderPlanner(planner)
        }catch(err){
            this.handleError(err)
        }
    }

    renderPlanner(planner){
        if(planner){
            this.container.innerHTML = this.showHTML
            this.plannerBindingsAndEventListeners()
        }else{
            this.handleError({
                type: "404 Planner Not Found",
                msg: "Planner Not Found"
            })
        }
    }

    // this.recipes = this.planner.recipes.map(r => new Recipe(r))

    get liAndLinkHTML(){
        return `<li><a href="#" data-id="${this.id}">${this.name}</a></li>`
    }
}