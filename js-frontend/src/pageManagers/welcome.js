class WelcomePage extends PageManager{


    initBindingsAndEventListeners(){
        this.signupLink = this.container.querySelector('a#signup')
        this.loginLink = this.container.querySelector('a#login')

        this.signupLink.addEventListener('click', this.handleSignupClick.bind(this))
        this.loginLink.addEventListener('click', this.handleLoginClick.bind(this))
    }

    handleLoginClick(e){
        e.preventDefault()
        this.redirect('login')
    }

    handleSignupClick(e){
        e.preventDefault()
        this.redirect('signup')
    }

    get staticHTML(){
        return (`
            <h1>Welcome To Your Meal Planner</h1>
            <h3>Please <a href="#" id="signup">Sign Up</a> or <a href="#" id="login">Login</a> to Continue...</h3>
        `)
    }

}