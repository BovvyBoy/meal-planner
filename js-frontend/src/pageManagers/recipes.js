class RecipesPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new RecipesAdapter(adapter)
        this.recipes = []  
        this.planners = []  
        this.recipe = null
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

    get plannersHTML(){
        return (`
            <h3>Add: ${this.recipe.name} </h3>
            <h3>Too Your Planner:</h3>
            <ul>
                ${this.planners.map(p => p.liAndLinkHTML).join('')}
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

    showRecipeBindingsAndEventListeners(){
        const addToPlannerButton = this.container.querySelector('button')
        addToPlannerButton.addEventListener('click', this.showPlanners.bind(this))
    }

    addRecipeBindingAndEventListeners(){
        const plannerList = this.container.querySelector('ul')
        plannerList.addEventListener('click', this.addRecipeToPlanner.bind(this))  
    }

    async handleRecipeClick(e){
        e.preventDefault()
        if(e.target.tagName === "A"){   
            const recipeId = e.target.dataset.id
            const recipe = this.getRecipeById(recipeId)
            this.renderRecipe(recipe)
        }
    }

    getRecipeById(id){
        return this.recipes.find(r => r.id == id)
    }

    async showPlanners(e){
        e.preventDefault()
        const recipeID = e.target.id
        const planners = await this.adapter.getPlanners()
        const userPlanners = planners.map(p => new Planner(p))
        this.recipe = this.recipes.find(r => r.id == recipeID)
        this.planners = userPlanners
        this.renderUserPlanners()
        console.log(this.recipe)
    }

    renderRecipe(recipe){
        if(recipe){
            this.container.innerHTML = recipe.showHTML
            this.showRecipeBindingsAndEventListeners()
        }else{
            this.handleError({
                type: "404 Recipe Not Found",
                msg: "Recipe Not Found"
            })
        }
    }

    async addRecipeToPlanner(e){
        e.preventDefault()
        const planner = e.target.dataset.id
        const recipe = JSON.stringify(this.recipe.id)
        const params = {
            planner: {planner},
            recipe: {recipe}
        }
        try{
            await this.adapter.addRecipeToPlanner(params)
            this.redirect('profile')
        }catch(err){
            this.handleError(err)
        }
        console.log(params)
        console.log(planner)
        console.log(recipe)

    }

    renderUserPlanners(){
        this.container.innerHTML += this.plannersHTML
        this.addRecipeBindingAndEventListeners()
    }
   
    get renderRecipes(){
        this.container.innerHTML = this.recipesHTML
        this.recipeBindingsAndEventListeners()
    }

    

}