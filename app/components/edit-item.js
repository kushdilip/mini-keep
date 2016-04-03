import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    Ember.Binding.from(`model.${this.get('property')}`).to('value').connect(this);
  },
  
  classNames: ['inline-block'],
  
  isEdit: false,
  actions: {
    toggleEdit(){
      this.toggleProperty('isEdit');
    },
    
    saveChange(property, value) {
      this.sendAction('saveChange', this.get('value'));
      this.send('toggleEdit');
    }
  }
});