import Interfaces.PaymentObserver;

public class EmailNotifier implements PaymentObserver {
    @Override
    public void update(int cost) {
        IO.println("Email: Payment of " + cost + " processed");
    }
}
