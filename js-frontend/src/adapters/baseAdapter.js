class BaseAdapter{

    constructor(baseURL){
        this.baseURL = baseURL
        this.token = null
    }

    get headers(){
        const baseHeaders = {
         'Accept': 'application/json',
         'Content-Type' : 'application/json'
        }
        if(this.token){
            baseHeaders = { ... baseHeaders, 'Authorization' : `Bearer ${this.token}`
        }
        return baseHeaders
    }
}