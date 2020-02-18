class SignupPage{

    constructor(container){
        this.container = container
    }

    get staticHTML(){
        return (`
        <h1>Sign Up</h1>
                
        <form>
            <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" class="form-control" id="name" placeholder="Please Enter Your Name">
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Please Enter a username">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Please Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="password" placeholder="And a Password">
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`)
    }

    render(){
        this.container.innerHTML = this.staticHTML
    }
}