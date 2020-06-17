package chatting.kafka;

import java.security.Principal;

public class StompPrincipal implements Principal {
    String name;

    public StompPrincipal(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }
}
