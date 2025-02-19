import listener from "./listeners.js";
import initialRender from "./initialRender.js";
import observer from "./observer.js";

class Todo{
    constructor(){}
    init() {
        console.log("Todo starts");
        observer();
        initialRender();
        listener();
        
    }
}
export default Todo;