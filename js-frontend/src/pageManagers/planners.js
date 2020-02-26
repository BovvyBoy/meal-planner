class PlannersPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new PlannersAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        return null
    }

   

    get staticHTML(){
        return(`
           
        
        `)
    }

}