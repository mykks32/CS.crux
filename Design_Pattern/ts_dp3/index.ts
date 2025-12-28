import {CarRegistry} from "./src/car-singleton";
import {CarFactory} from "./src/car-factory";
import {CarTypesEnum} from "./src/enums/car-types-enum";
import {CarProductBuilder} from "./src/car-product-builder";
import {CarStatusNotifier, InsuranceSystem, ServiceCenter} from "./src/CarObserver";

class Main {
    public start(): void {
        // Singleton Pattern
        CarRegistry.getInstance().register(CarTypesEnum.SUV);

        // Car Factory Pattern
        CarFactory.createCar(CarTypesEnum.SEDAN).drive();
        CarFactory.createCar(CarTypesEnum.SUV).drive();

        // Car Builder Pattern
        const myCar = new CarProductBuilder
            .Builder()
            .setEngine("V8")
            .setColor("Red")
            .setSunroof(true)
            .build()
        console.log(myCar);

        // Observer Pattern
        const carStatusNotifier = new CarStatusNotifier();
        carStatusNotifier.addObserver(new InsuranceSystem);
        carStatusNotifier.addObserver(new ServiceCenter());
        carStatusNotifier.notifyAll("Completed");
    }
}

(() => new Main().start())();
