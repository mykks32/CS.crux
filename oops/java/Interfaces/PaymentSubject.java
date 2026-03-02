package Interfaces;

public interface PaymentSubject {
    void registerObserver(PaymentObserver observer);
    void notifyObserver(int cost);
}
