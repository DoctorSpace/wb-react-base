// Задание 2

interface Engine {
  status: "on" | "off";
  temperature: number;
  start: () => void;
  stop: () => void;
}

interface Transmission {
  gear: number;
  changeGear: (gear: number) => void;
}

interface FuelSystem {
  fuelLevel: number;
  refuel: (amount: number) => void;
}

interface Car {
  engine: Engine;
  transmission: Transmission;
  fuelSystem: FuelSystem;
  getCarInfo: () => void;
}

const myCar: Car = {
  engine: {
    status: "off",
    temperature: 20,
    start() {
      this.status = "on";
      console.log("Двигатель запущен.");
    },
    stop() {
      this.status = "off";
      console.log("Двигатель остановлен.");
    },
  },
  transmission: {
    gear: 0,
    changeGear(newGear: number) {
      this.gear = newGear;
      console.log(`Передача переключена на ${newGear}`);
    },
  },
  fuelSystem: {
    fuelLevel: 50,
    refuel(amount: number) {
      this.fuelLevel = Math.min(this.fuelLevel + amount, 100);
      console.log(
        `Заправлено ${amount}%. Текущий уровень топлива: ${this.fuelLevel}%`
      );
    },
  },
  getCarInfo() {
    console.log("Информация о машине:");
    console.log(`Двигатель: ${this.engine.status}`);
    console.log(`Температура двигателя: ${this.engine.temperature}°C`);
    console.log(`Текущая передача: ${this.transmission.gear}`);
    console.log(`Уровень топлива: ${this.fuelSystem.fuelLevel}%`);
    console.log("\n");
  },
};

console.log("\nНачальная информация об автомобиле:");
myCar.getCarInfo();

console.log("Запускаем двигатель");
myCar.engine.start();
myCar.getCarInfo();

console.log("Переключаем передачу");
myCar.transmission.changeGear(2);
myCar.getCarInfo();

console.log("Заправляем машину");
myCar.fuelSystem.refuel(30);
myCar.getCarInfo();

console.log("Останавливаем двигатель");
myCar.engine.stop();
myCar.getCarInfo();

// tsc -t es6 app.ts
