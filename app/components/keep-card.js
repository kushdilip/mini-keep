import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp',
  
  actions: {
    delete(text){
      let shouldDelete = confirm(`Do you really want to delete: ${text}`);
      
      if (shouldDelete) {
        this.sendAction('deleteTodo');
      }
    }
  }
});
