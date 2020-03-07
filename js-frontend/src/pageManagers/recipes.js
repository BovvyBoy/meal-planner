class RecipesPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new RecipesAdapter(adapter)
        this.recipes = []  
        this.user = null  
    }

    initBindingsAndEventListeners(){
        return null
    }

    get recipesHTML(){
        return(`
            <h1>Recipes</h1>
            <ul>
                ${this.recipes.map(r => r.liAndLinkHTML).join('')}
            </ul>
        `)
    }

    async fetchAndRenderPageResources(){
        try{
            const recipes = await this.adapter.getRecipes()
            this.recipes = recipes.map(r => new Recipe(r))
            this.renderRecipes
        }catch(err){
            this.handleError(err)
        }
    }

    recipeBindingsAndEventListeners(){
        const recipeList = this.container.querySelector('ul')
        recipeList.addEventListener('click', this.handleRecipeClick.bind(this))
    }

    async handleRecipeClick(e){
        e.preventDefault()
        if(e.target.tagName === "A"){   
            // const user = this.getUser()     
            const recipeId = e.target.dataset.id
            const recipe = this.getRecipeById(recipeId)
            this.renderRecipe(recipe)
            console.log(recipe, "HdleRClk")
        }
    }

    getRecipeById(id){
        return this.recipes.find(r => r.id == id)
    }

    async getUser(){
        try{
            const user = await this.adapter.getUser()
            this.user = new User(user)
            console.log(this.user, "GetUser")
        }catch(err){
            this.handleError(err)
        }
    }

    async getUserPlanners(){
        try{
            const planners = await this.adapter.getPlanners()
            this.planners = planners.map(p => new Planner(p))
        }catch(err){
            this.handleError(err)
        }
    }

    renderRecipe(recipe){
        if(recipe){
            // console.log(user, "RenrRec")
            this.container.innerHTML = recipe.showHTML
            // this.container.innerHTML += user.plannerOptionsHTML
        }else{
            this.handleError({
                type: "404 Recipe Not Found",
                msg: "Recipe Not Found"
            })
        }
    }

   

    get renderRecipes(){
        this.container.innerHTML = this.recipesHTML
        this.recipeBindingsAndEventListeners()
    }

    

}