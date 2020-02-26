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

    editPlannerClick(e){
        e.preventDefault()

    }

    handlePlannerClick(e){
        e.preventDefault()
        if(e.target.tagName === "A"){
            const plannerId = e.target.dataset.id
            this.renderPlanner(plannerId)
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

    get staticHTML(){
        return (`
            <div class="lds-heart"><div></div></div>
        `)
    }

    renderPlanner(id){
        const planner = this.user.planners.find(p => p.id == id)
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