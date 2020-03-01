class RecipesPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new RecipesAdapter(adapter)
        this.recipes = []
    }

    initBindingsAndEventListeners(){
        return null
    }

    get recipesHTML(){
        return(`
            <h1>Recipes</h1>
        
        `)
    }

    // ${recipes.map(r => r.liAndLinkHTML).join('')}

    get recipesHTML() {
       
    }

    async fetchAndRenderPageResources(){
        try{
            const recipes = await this.adapter.getRecipes()
            const recJson = JSON.stringify(recipes)
            // const recipeObj = recJson.map(r => r.liAndLinkHTML).join('')
            // this.renderRecipes()
           
            // console.log(recJson)
        }catch(err){
            this.handleError(err)
        }
    }

    renderRecipes(){
        this.container.innerHTML = this.recipesHTML
    }

}