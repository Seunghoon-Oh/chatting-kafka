package chatting.kafka.consumer;

import chatting.ChattingMessage;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.concurrent.CountDownLatch;

@Service
public class Receiver {
    private static final Logger LOGGER = LoggerFactory.getLogger(Receiver.class);

    private CountDownLatch latch = new CountDownLatch(1);

    public CountDownLatch getLatch() {
        return latch;
    }

    @Autowired
    private SimpMessagingTemplate template;

    @KafkaListener(topics = "${topic.boot}")
    public void receive(ConsumerRecord<?, ?> consumerRecord) throws Exception {
        LOGGER.info("received data='{}'", consumerRecord.toString());
        String[] message = consumerRecord.value().toString().split("\\|");
        LOGGER.info("message='{}'", Arrays.toString(message));
        this.template.convertAndSend("/topic/chatting", new ChattingMessage(message[0], message[1]));
        latch.countDown();
    }
}