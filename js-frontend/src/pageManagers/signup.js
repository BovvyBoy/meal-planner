class SignupPage{

    constructor(container, adapter){
        this.container = container
        this.adapter = new SignupAdapter(adapter)
    }

    get staticHTML(){
        return (`
        <h1>Sign Up</h1>
                
        <form>
            <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" class="form-control" id="name" placeholder="Please Enter Your Name" required>
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Please Enter a username" required>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Please Enter email" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="password" placeholder="And a Password" required>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`)
    }

    render(){
        this.container.innerHTML = this.staticHTML
    }
}