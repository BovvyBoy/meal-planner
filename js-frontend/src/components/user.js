class User{
    
    constructor(user){
       
        const {id, name, username, email, planners} = user
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.planners = planners.map(p => new Planner(p))
    }

    get plannerOptionsHTML(){
        return (`
        <h3>Your Planners:</h3>
        <select id="planner">
            ${this.planners.map(p => p.optAndLinkHTML).join('')}
        </select>

        <button data-id=${this.id} id="edit-planner">Add To Planner</button>
        `)
    }

    get profileHTML(){
        return (`
            <h2>Welcome ${this.name}!</h2>
            <h3>Your Planners:</h3>
            <ul>
                ${this.planners.map(p => p.liAndLinkHTML).join('')}
            </ul>

            <button id="create-planner">Create Planner</button>
        `)
    }

   

}