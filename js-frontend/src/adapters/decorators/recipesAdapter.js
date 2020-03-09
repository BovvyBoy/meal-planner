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

    // async getUser(){
    //     const res = await fetch(`${this.baseURL}/api/v1/profile`,{
    //         headers: this.headers
    //     })
    //     await this.baseAdapter.checkStatus(res)
    //     return await res.json()
    // }

    async getPlannerById(id){
        const res = await fetch(`${this.baseURL}/api/v1/planners/${id}`,{
            headers: this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async addRecipeToPlanner(params){
        const recipe = params.recipe
        const planner = params.planner
        const plannerId = planner.id
        const recipes = planner.recipes
        const url = `${this.baseURL}/api/v1/planners/${plannerId}/recipes`
        const body = {
            planner_recipe: {
                planner_id: planner.id,
                recipe_id: recipe.id
            }
        }
        console.log(recipes)
        console.log(recipe)
        console.log(plannerId)
        console.log(body)

        const res = await fetch(url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
        
    }

    // async addRecipeToPlanner(params){
    //     const recipe = params.recipe
    //     const planner = params.planner
    //     const plannerId = planner.id
    //     const recipes = planner.recipes
    //     const url = `${this.baseURL}/api/v1/planners/${plannerId}`
    //     const body = {
    //         planner: {
    //             name: planner.name,
    //             duration: planner.duration,
    //             recipes: {...recipes, recipe}
    //         }
    //     }
    //     console.log(recipes)
    //     console.log(recipe)
    //     console.log(plannerId)
    //     console.log(body)

    //     const res = await fetch(url, {
    //         method: 'PATCH',
    //         headers: this.headers,
    //         body: JSON.stringify(body)
    //     })
    //     await this.baseAdapter.checkStatus(res)
    //     return await res.json()
        
    // }

}