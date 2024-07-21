export class Car {
    constructor(marke, modelis, spalva, kuroBakoTalpa, kuroSanaudos) {
        this.name = marke;
        this.model = modelis;
        this.color = spalva;
        this.capacity = kuroBakoTalpa;
        this.fuelConsumption = kuroSanaudos;

        this.speed = 0;
        this.engineIsOff = true;

    }

    startEngine() {
        if (this.engineIsOff != true) {
            return 'Variklis jau ijungtas'
        }

        return '🔑 "Vrum vrum!" 🚗 ⬅️';
    }

    stopEngine() {
        if (this.engineIsOff = true) {
            return 'Variklis isjungtas'
        }
        return '🚗 ⏹️'
    }

    startMove() {
        if (this.capacity <= 3) {
            return 'Neuzteks kuro testi kelione'
        }

        return `Liko ${this.capacity - 3} l kuro`;
    }


}