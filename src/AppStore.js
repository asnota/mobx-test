import { observable, action, computed } from "mobx";

class AppStore {

    @observable todos =["fly Paris", "fly London"];
    
    @action addTask = (todo) => {
        this.todos.push(todo);
    }

    @computed get todosCount(){
        return this.todos.length;
    }
}


const store = new AppStore();

export default store;
