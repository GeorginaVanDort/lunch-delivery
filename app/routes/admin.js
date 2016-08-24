import Ember from 'ember';

export default Ember.Route.extend ({
  actions: {
    saveMeal(params) {
      var newMeal = this.store.createRecord("meal", params);
      newMeal.save();
      this.transitionTo("admin");
    }
  }
});
