import { defineStore } from "pinia";

export default defineStore("player", {
  actions: {
    state: () => ({
      currentSong: {},
    }),
    actions: {
      async newSong(song) {
        this.current_song = song;
      },
    },
  },
});
