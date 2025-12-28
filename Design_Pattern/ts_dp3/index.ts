import {CarRegistry} from "./src/car-singleton";
import {CarFactory} from "./src/car-factory";
import {CarTypesEnum} from "./src/enums/car-types-enum";
import {CarProductBuilder} from "./src/car-product-builder";
import {CarStatusNotifier, InsuranceSystem, ServiceCenter} from "./src/CarObserver";
import {CarController, EcoMode, SportMode} from "./src/driving-strategy";
import {IBasicCar} from "./src/interfaces/IBasicCar"
import {BaseCar, GPSDecorator, MusicDecorator} from "./src/car-decorator";

class Main {
    public start(): void {
        // Singleton Pattern
        console.log("----- Singleton Pattern ------");
        CarRegistry.getInstance().register(CarTypesEnum.SUV);

        // Car Factory Pattern
        console.log("\n----- Factory Pattern ------");
        CarFactory.createCar(CarTypesEnum.SEDAN).drive();
        CarFactory.createCar(CarTypesEnum.SUV).drive();

        // Car Builder Pattern
        console.log("\n----- Builder Pattern ------");
        const myCar = new CarProductBuilder
            .Builder()
            .setEngine("V8")
            .setColor("Red")
            .setSunroof(true)
            .build()
        console.log(myCar);

        // Observer Pattern
        console.log("\n----- Observer Pattern ------");
        const carStatusNotifier = new CarStatusNotifier();
        carStatusNotifier.addObserver(new InsuranceSystem);
        carStatusNotifier.addObserver(new ServiceCenter());
        carStatusNotifier.notifyAll("Completed");

        // Strategy Pattern
        console.log("\n----- Strategy Pattern ------");
        const carController = new CarController();

        carController.setDrivingStrategy(new EcoMode());
        carController.drive()

        carController.setDrivingStrategy(new SportMode());
        carController.drive()

        // Decorator Pattern
        console.log("\n----- Decorator Pattern ------");
        const car: IBasicCar = new GPSDecorator(new BaseCar());
        car.feature()
    }
}

(() => new Main().start())();
