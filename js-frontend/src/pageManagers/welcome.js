class WelcomePage extends PageManager{


    initBindingsAndEventListeners(){
        
    }

    get staticHTML(){
        return (`
            <h1>Welcome To Your Meal Planner</h1>
            <h3>Please <a id="signup">Sign Up</a> or <a id="login">Login</a> to Continue...</h3>
        `)
    }

}