class SignupPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new SignupAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.form = this.container.querySelector('#signup-form')

        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    async handleSubmit(e){
        e.preventDefault()
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const [name, username, email, password] = inputs.map(input => input.value)
        const params = {
            user: {
                name, username, email, password
            }
        }
        try{
            await this.adapter.signup(params)
            this.redirect('planners')
        }catch(err){
            this.hanleError(err)
        }

    }

    get staticHTML(){
        return (`
        <h1>Sign Up</h1>
                
        <form id="signup-form">
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
        </form>
        `)
    }

}