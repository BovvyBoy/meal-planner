class User{

    constructor(user){
       
        const {id, name, username, email, planners} = user
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.planners = planners.map(p => new Planner(p))
    }

    get profileHTML(){
        return (`
            <h2>Welcome ${this.name}!</h2>
            <h3>Your Planners:</h3>
            <ul>
                ${this.planners.map(p => p.liAndLinkHTML).join('')}
            </ul>
        `)
    }
}