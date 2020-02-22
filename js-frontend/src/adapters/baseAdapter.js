class BaseAdapter{

    constructor(baseURL = 'http://localhost:3000'){
        this.baseURL = baseURL
        this.token = null
    }

    get headers(){
        const baseHeaders = {
         'Accept': 'application/json',
         'Content-Type' : 'application/json'
        }
        if(this.token){
            baseHeaders = { ...baseHeaders, 'Authorization' : `Bearer ${this.token}`}
        }
        return baseHeaders
    }

    async checkStatus(res){
        if(res.status == 401){
            this.token = null
            throw {
                type: "Authorization Error",
                msg: "You Are No Longer Authenticated"
            }
        }else if(res.status < 200 || res.status > 299){
            const msg = await res.json()
            let errorMsg = msg.error.detail
            if(!errorMsg) {errorMsg = msg.error}
            throw {
                type: "Fetch Error",
                msg: errorMsg
            }
        }
    }
}