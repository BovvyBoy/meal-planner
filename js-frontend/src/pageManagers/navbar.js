class Navbar extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = adapter
    }

    get is_authenticated(){
        return !!this.adapter.token
    }

    initBindingsAndEventListeners(){

        if(this.is_authenticated){
            this.signupLink = this.container.querySelector('a#signup-link')
            this.loginLink = this.container.querySelector('a#login-link')
            this.plannersLink = this.container.querySelector('a#planners-link')
            this.recipesLink = this.container.querySelector('a#recipes-link')
            this.aboutLink = this.container.querySelector('a#about-link')
        }else{

        }
    }

    get staticHTML(){
        if(this.is_authenticated){
            return (`
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Meal Planner</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" id="planners-link" href="#">Planners <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" id="recipes-link" href="#">Recipes</a>
                        <a class="nav-item nav-link" id="about-link" href="#">About</a>
                    </div>
                    </div>
                </nav>
            `)
        }else{
            return (`
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Meal Planner</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" id="login-link" href="#">Login</a>
                        <a class="nav-item nav-link" id="signup-link" href="#">Sign Up</a>
                    </div>
                    </div>
                </nav>
            `)
        }
    }

}