import Interfaces.PaymentObserver;
import Interfaces.PaymentSubject;

import java.util.ArrayList;
import java.util.List;

public class PaymentSingleton implements PaymentSubject {
    private final static PaymentSingleton INSTANCE = new PaymentSingleton();
    private final List<PaymentObserver> observers = new ArrayList<>();

    private PaymentSingleton() {}

    public static PaymentSingleton getInstance() {
        return INSTANCE;
    }

    @Override
    public void registerObserver(PaymentObserver observer) {
        observers.add(observer);
    }

    @Override
    public void notifyObserver(int cost) {
        for (PaymentObserver observer: observers) {
            observer.update(cost);
        }
    }

    public void processPayment(int cost) {
        System.out.println("Total Payment: " + cost);
    }
}
