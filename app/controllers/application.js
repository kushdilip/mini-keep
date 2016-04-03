import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
    todos: storageFor('todos'),
    
    actions: {
      addTodo(text){
        let [title, ...desc] = text.split(':');
        if(desc) {
          desc = desc.join(' ');
        }
        
        let todo = {
          id: 1,
          title,
          text: desc,
          due_date: moment().format(),
          due_time: moment().format(),
          deleted: false
        };
        
        let todos = this.get('todos');
        let todosLength = todos.get('length') || 0;
        
        if (todosLength) {
          let lastTodo = todos.objectAtContent(todosLength - 1);
          todo.id = lastTodo.id + 1;
        }
        
        this.get('todos').addObject(todo);
        console.log(arguments);
        this.send('clearTodo');
      },
      
      deleteTodo(id){
        if (!id) {
          console.log('todo item doesn\'t have id');
          return;
        }
        
        let [todo] = this.get('todos').filter(todo => todo.id === id);
        Ember.set(todo, 'deleted', true);
        this.get('todos').arrayContentDidChange();
        // window.location.reload(true);
      },
      
      saveChange(id, property, value) {
        let [todo] = this.get('todos').filter(todo => todo.id === id);
        Ember.set(todo, property, value);
      },
      
      changeNotification(){
        
      },
      
      clearTodo(){
        this.set('newNote', null);
      }
    }
})