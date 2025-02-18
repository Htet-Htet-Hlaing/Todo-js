import { addList, tasks } from "./list.js";

const initialRender = () => {
    //console.log("I'm render if Todo starts")
    tasks.forEach((task) => addList(task));
}

export default initialRender;