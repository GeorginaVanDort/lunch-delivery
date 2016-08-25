import Ember from 'ember';

export default Ember.Component.extend ({
  addNewMealForm: false,
  actions: {
    showNewMealForm() {
      this.set("addNewMealForm", true);
    },
    saveMeal() {
      var params = {
        name: this.get("name"),
        description: this.get("description"),
        price: parseInt(this.get("price")),
        ingredients: this.get("ingredients"),
        spicyScale: this.get("spicyScale"),
        imgURL: this.get("imgURL"),
        popularity: 0
      };
      this.set("addNewMealForm", false);
      this.sendAction("saveMeal", params);
      this.set("name", "");
      this.set("description", "");
      this.set("price", "");
      this.set("ingredients", "");
      this.set("spicyScale", "");
      this.set("imgURL", "");
    }
  }
});
