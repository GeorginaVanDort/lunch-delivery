import Ember from 'ember';

export default Ember.Component.extend ({
  updateMealForm: false,
  actions: {
    showUpdateMealForm() {
      this.set("updateMealForm", true);
    },
    updateMeal(meal) {
      var params = {
        name: this.get("name"),
        description: this.get("description"),
        price: parseInt(this.get("price")),
        ingredients: this.get("ingredients"),
        spicyScale: this.get("spicyScale"),
        imgURL: this.get("imgURL"),
        popularity: parseInt(0)
      };
      this.set("updateMealForm", false);
      this.sendAction("updateMeal", meal, params);
      this.set("name", "");
      this.set("description", "");
      this.set("price", "");
      this.set("ingredients", "");
      this.set("spicyScale", "");
      this.set("imgURL", "");
    }
  }
});
