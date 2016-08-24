import Ember from 'ember';

export default Ember.Route.extend ({
  model() {
    return this.store.findAll("meal");
  },
  actions: {
    saveMeal(params) {
      var newMeal = this.store.createRecord("meal", params);
      newMeal.save();
      this.transitionTo("admin");
    },
    updateMeal(meal, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          meal.set(key, params[key]);
        }
      });
      meal.save();
      this.transitionTo("admin");
    }
  }
});
