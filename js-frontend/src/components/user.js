class User{

    constructor(user){
        const [id, name, username, email, planners] = user
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.planners = planners.map(p => new Planner(p))
    }
}