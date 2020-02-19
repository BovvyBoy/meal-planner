class App {
    constructor(){
        this.adapter = BaseAdapter('http://localhost:3000')
        this.initBindingsAndEventListeners()
        this.renderPage(new SignupPage(this.pageContainer, this.adapter))
    }

    initBindingsAndEventListeners(){
        this.container = document.querySelector('#app-container')
        this.alertContainer = document.querySelector('#alerts-container')
        this.navbarContainer = document.querySelector('#navbar-container')
        this.pageContainer = document.querySelector('#page-container')
    }

    renderPage(page){
        page.render()
    }

}