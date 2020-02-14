class PlannersAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/planners'
    }

    getplanners() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}