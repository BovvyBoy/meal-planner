class Router{

    constructor(kvpairs){
        this.routes = kvpairs
    }

    setRootPage(rootPageKey){
        this.rootPage = this.routes[rootPageKey]
    }

    render(page){
        this.router[page].render()
    }
}