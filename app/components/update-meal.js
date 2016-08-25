import Ember from 'ember';

export default Ember.Component.extend ({
  updateMealForm: false,
  actions: {
    showUpdateMealForm() {
      this.set("updateMealForm", true);
    },
    updateMeal(meal) {
      meal.save();
      this.set("updateMealForm", false);
      this.set("name", "");
      this.set("description", "");
      this.set("price", "");
      this.set("ingredients", "");
      this.set("spicyScale", "");
      this.set("imgURL", "");
    }
  }
});
