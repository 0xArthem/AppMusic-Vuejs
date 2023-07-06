import { defineStore } from "pinia";
import { Howl } from "howler";

export default defineStore("player", {
  actions: {
    newSong(song) {
      this.currentSong = song;

      this.sound = new Howl({
        src: [song.url],
        html5: true,
        onloaderror: function () {
          console.log("Erreur lors du chargement du fichier audio.");
        },
      });

      this.sound.play();
    },
  },
});
