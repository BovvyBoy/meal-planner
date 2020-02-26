class Planner{

    static get formHTML(planner){
        return (`
        <form id="${planner ? 'edit' : 'new'}-planner-form">
            <div class="form-group">
                <label for="name">Planner Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name" value=${planner ? planner.name : '' } required>
            </div>
            <div class="form-group">
                <label for="duration">Number of Days/label>
                <input type="number" class="form-control" id="duration" placeholder="Duration" value=${planner ? planner.duration : '' }  required>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        `)
    }

    constructor(planner){
        const {id, name, duration} = planner
        this.id = id
        this.name = name
        this.duration = duration
    }

    get formHTML(){
        return Planner.formHTML(this)
    }

    get showHTML(){
        return (`
            <h2>${this.name}</h2>
            <h3>Recipes:</h3>
            <h3>Coming Soon...</h3>
            <h3>${this.duration} Meals</h3>
            <button id="edit-planner">Edit</button>
        `)
    }

    get liAndLinkHTML(){
        return `<li><a href="#" data-id="${this.id}">${this.name}</a></li>`
    }
}