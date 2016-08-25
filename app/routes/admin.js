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
    destroyMeal(meal) {
      if (confirm("Are you sure you want to delete this meal?")) {
        meal.destroyRecord(); //Call destroyRecord method on inputted object
      }
    }
  }
});
