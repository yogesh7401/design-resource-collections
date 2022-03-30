import { defineStore, acceptHMRUpdate } from "pinia";

export const useStore = defineStore("globalStore", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      author: {
        github: "https://bit.ly/anburocky3",
      },
      // all these properties will have their type inferred automatically
      counter: 10,
      name: "Eduardo",
      isAdmin: true,
    };
  },
  actions: {
    hit() {
      this.counter++;
    },
  },

  getters: {
    getCount: (state) => state.counter,
    getUser: (state) => {
      state.name;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
