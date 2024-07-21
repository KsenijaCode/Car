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
            return 'Variklis jau ijungtas';
        }

        return '🔑 "Vrum vrum!" 🚗 ⬅️';
    }

    stopEngine() {
        if (this.engineIsOff = true) {
            return 'Variklis jau isjungtas';
        }
        return '🚗 ⏹️'
    }

    startMove() {
        if (this.capacity < 20) {
            return 'Neuzteks kuro pradeti kelione';
        }

        return `Liko ${this.capacity - (this.fuelConsumption * 2)} l kuro`;
    }

    onARoad() {
        if (this.capacity = 0) {
            return 'Reikia papildyti kuro atsargas!';
        }

        this.speed = 10;
        return `Tu vaziuoji ${this.speed} km/h greiciu`;
    }

    fuelLeft() {
        return `Liko ${this.capacity - this.fuelConsumption} l kuro`;
    }

    tripFinished() {
        this.speed = 0;
        return 'Buvo smagi kelione!';
    }


}