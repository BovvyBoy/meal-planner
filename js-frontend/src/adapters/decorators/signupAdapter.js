class SignupAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
    }

    get token(){
        return this.baseAdapter.token
    }

    get headers(){
        return this.baseAdapter.headers
    }
}