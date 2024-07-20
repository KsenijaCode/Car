export class Car {
    constructor(marke, modelis, spalva, kuroBakoTalpa, kuroSanaudos) {
        this.name = marke;
        this.model = modelis;
        this.color = spalva;
        this.capacity = kuroBakoTalpa;
        this.fuelConsumption = kuroSanaudos;

        this.speed = 0;

    }

    startEngine() {
        return '🔑 "Vrum vrum!" 🚗 ⬅️';
    }

    stopEngine() {

        return '🚗 ⏹️'
    }


}