import Ember from 'ember';

export default Ember.Service.extend({
  ordersList:[],

  add(mealItem) {
    this.get('ordersList').pushObject(mealItem);
  }
});
