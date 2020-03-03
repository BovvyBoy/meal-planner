class ProfilePage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ProfileAdapter(adapter)
        this.user = null
    }

    initBindingsAndEventListeners(){
        return null
    }

    profileBindingsAndEventListeners(){
        const plannerList = this.container.querySelector('ul')
        plannerList.addEventListener('click', this.handlePlannerClick.bind(this))
    }

    plannerBindingsAndEventListeners(){
        const editButton = this.container.querySelector('button')
        editButton.addEventListener('click', this.editPlannerClick.bind(this))
    }

    plannerFormBindingsAndEventListeners(){
        const form = this.container.querySelector('form')
        form.addEventListener('submit', this.handlePlannerUpdate.bind(this))
    }

    async handlePlannerUpdate(e){
        e.preventDefault()
        const [id, name, duration, recipes] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
        const params = { id, name, duration, recipes }
        const planner = this.getPlannerById(id)
        const oldPlanner = new Planner({id, name, duration, recipes})
        planner.name = name
        planner.duration = duration
        this.renderPlanner(planner)
        try {
            const {id, name, duration, recipes} = await this.adapter.updatePlanner(params)
           
        }catch(err){
            planner.name = oldPlanner.name
            planner.duration = oldPlanner.duration
            this.renderPlanner(oldPlanner)
            this.handleError(err)
        }
        
    }

    handlePlannerClick(e){
        e.preventDefault()
        if(e.target.tagName === "A"){
            const plannerId = e.target.dataset.id
            const planner = this.getPlannerById(plannerId)
            planner.renderPlanner(planner)
        }
    }

    editPlannerClick(e){
        e.preventDefault()
        const id = e.target.dataset.id
        const planner = this.user.planners.find(p => p.id == id)
        if(planner){
            this.container.innerHTML = planner.formHTML
            this.plannerFormBindingsAndEventListeners()
        }else{
            this.handleError({
                type: "404 Planner Not Found",
                msg: "Planner Not Found"
            })
        }
    }

    async fetchAndRenderPageResources(){
        try{
            const userObj = await this.adapter.getUser()
            this.user = new User(userObj)
            this.renderUser()
        }catch(err){
            this.handleError(err)
        }
    }

    getPlannerById(id){
        return this.user.planners.find(p => p.id == id)
    }

    get staticHTML(){
        return (`
            <div class="lds-heart"><div></div></div>
        `)
    }

    renderPlanner(planner){
        if(planner){
            this.container.innerHTML = planner.showHTML
            this.plannerBindingsAndEventListeners()
        }else{
            this.handleError({
                type: "404 Planner Not Found",
                msg: "Planner Not Found"
            })
        }
    }

    renderUser(){
        this.container.innerHTML = this.user.profileHTML
        this.profileBindingsAndEventListeners()
    }
}