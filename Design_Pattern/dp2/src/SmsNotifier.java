import Interfaces.PaymentObserver;

public class SmsNotifier implements PaymentObserver {
    @Override
    public void update(int cost) {
        IO.println("Sms: Payment of " + cost + " processed");
    }
}

