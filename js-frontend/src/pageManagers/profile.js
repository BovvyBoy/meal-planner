class ProfilePage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ProfileAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        return null
    }

    async fetchAndRenderPageResources(){
        try{
            const planners = await this.adapter.getPlanners()
            this.container.innerHTML = planners.map(p => p.name).join('')
        }catch(err){
            this.handleError(err)
        }
    }

    get staticHTML(){
        return (`
            <h1>Your Profile Page!</h1>
        `)
    }
}