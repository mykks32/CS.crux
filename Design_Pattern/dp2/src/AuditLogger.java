import Interfaces.PaymentObserver;

public class AuditLogger implements PaymentObserver {
    @Override
    public void update(int cost) {
        IO.println("Audit log: Payment recorded -> " + cost);
    }
}
