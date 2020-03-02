class PlannersAdapter{

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

    // async getUser(){
    //     const res = await fetch(`${this.baseURL}/api/v1/`, {
    //         headers: this.headers
    //     })
    // }
    


}