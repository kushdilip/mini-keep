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
          text: desc
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
        
        let todosContent = this.get('todos.content').filter(todo => todo.id !== id);
        this.get('todo').replaceContent(todosContent);
      },
      
      clearTodo(){
        this.set('newNote', null);
      }
    }
})