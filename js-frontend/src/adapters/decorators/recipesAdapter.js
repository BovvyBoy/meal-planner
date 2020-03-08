class RecipesAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    get token(){
        return this.baseAdapter.token
    }

    get headers(){
        return this.baseAdapter.headers
    }

    async getRecipes(){
        const res = await fetch(`${this.baseURL}/api/v1/recipes`,{
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async getPlanners(){
        const res = await fetch(`${this.baseURL}/api/v1/planners`,{
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async getUser(){
        const res = await fetch(`${this.baseURL}/api/v1/profile`,{
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async addRecipeToPlanner(params){
        const recipe = params.recipe.recipe
        const plannerId = params.planner.planner
        const url = `${this.baseURL}/api/v1/planners/${plannerId}`
        const body = {
            planner: {
                recipes: {... recipe}
            }
        }
        console.log(recipe)
        console.log(plannerId)
        const res = await fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(body)
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
        
    }

}