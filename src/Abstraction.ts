interface MediaPlayer {
    Play(): void;
    Pause(): void;
    Stop(): void;
}

class Music implements MediaPlayer {

    Play(): void {
        console.log("Play Music")
    };
    Pause(): void {
        console.log("Pause Music");
    };
    Stop(): void {
        console.log("Stop Music");
    };

};

const player = new Music();
player.Pause()