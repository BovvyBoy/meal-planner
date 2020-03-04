class PlannersPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new PlannersAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        return null
    }
   

    // get staticHTML(){
    //     return(`
    //        <h1>Welcome</h1>
           
    //     `)
    // }

    // ${planners.map(p => p.liAndLinkHTML).join('')}

    // renderPlanner(planner){
    //     if(planner){
    //         this.container.innerHTML = this.showHTML
    //         this.plannerBindingsAndEventListeners()
    //     }else{
    //         this.handleError({
    //             type: "404 Planner Not Found",
    //             msg: "Planner Not Found"
    //         })
    //     }
    // }

}