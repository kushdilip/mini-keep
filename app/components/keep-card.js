import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp',
  isModal: false,
  
  actions: {
    delete(text){
      let shouldDelete = confirm(`Do you really want to delete: ${text}`);
      
      if (shouldDelete) {
        this.sendAction('deleteTodo');
      }
    },
    
    changeNotification(){
      this.send('toggleDate');
    },
    
    toggleDate(){
      this.toggleProperty('isModal');
    },
    
    saveChange(property, value) {
      this.sendAction('saveChange', property, value);
    }
  }
});
