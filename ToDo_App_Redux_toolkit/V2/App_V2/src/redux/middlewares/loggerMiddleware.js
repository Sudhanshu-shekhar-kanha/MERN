
// store , next ,action

export const loggerMiddleware =(store) =>{
    return function (next){
        return function (action){
            // log actions
            console.log("[Log]:" + action.type +  " " + new Date().toString())
            // call next middleware in pipeline
            next(action)
            // log the modified state of app
            console.log(store.getState())
        }
    }
}