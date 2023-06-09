abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string

    ){}

    abstract getSepia(): void

    getRealTime(): number {
        //Some calculation
        return 5
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter)
    }


    getSepia(): void {
        console.log("sepia")
    }
}

const cameraAction = new Instagram("test","grey",3)

cameraAction.getRealTime()