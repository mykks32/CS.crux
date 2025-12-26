import Interfaces.Car;
import Interfaces.CarFeature;
import enums.Engine;
import enums.Suspension;
import enums.Transmission;
import enums.Type;

void main() {
    // BUILDER
    IO.println("\n------- BUILDER PATTERN -------");
    CarBuilder carBuilder = new CarBuilder
            .Builder()
            .setCarType(Type.SEDAN)
            .setEngine(Engine.DIESEL)
            .setSuspension(Suspension.HIGH)
            .setTransmission(Transmission.MANUAL)
            .build();
    IO.println(carBuilder.showDetails());

    // FACTORY
    IO.println("\n------- FACTORY PATTERN -------");
    Car car = CarFactory.getCar(Type.SEDAN);
    IO.println(car.drive());

    // DECORATOR
    IO.println("\n------- DECORATOR PATTERN -------");
    CarFeature carFeature = new GPS(new Insurance(new BasicCarFeatureDecorator()));
    IO.println(carFeature.getDescription() + " & " + "Cost: " + carFeature.Cost());
//
//     SINGLETON
    IO.println("\n------- SINGLETON PATTERN -------");
    PaymentSingleton.getInstance().processPayment(carFeature.Cost());

//     OBSERVER
    IO.println("\n------- OBSERVER PATTERN -------");
    PaymentSingleton payment = PaymentSingleton.getInstance();
    
    payment.registerObserver(new EmailNotifier());
    payment.registerObserver(new SmsNotifier());
    payment.registerObserver(new AuditLogger());

    payment.notifyObserver(carFeature.Cost());

//    // STRATEGY
//    IO.println("\n------- STRATEGY PATTERN -------");
//    PaymentContext payment = new PaymentContext(new CardPayment());
//    payment.pay(feature.cost());
}
