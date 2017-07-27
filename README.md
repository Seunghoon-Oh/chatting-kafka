# ``<Chatting Application>``

# Service overview
A chat application that sends and receives messages between A Client and B Client.


![Chatting](http://postfiles16.naver.net/MjAxNzA2MjhfMTc4/MDAxNDk4NjMwODY5MDY2.eSSK8vNm9ypMxMnllQAjkt3zmC77I2uG2rlVlSZWc_og.z8iwC9CaX36nPP7CrCrH430pAwHGRtPirSBnM-RxykYg.JPEG.jjiinn45/app.JPG?type=w3 "Chatting")


# Development scope
* A User and b user send and receive messages 1: 1.
* A user can send a single file to another user.
* The client uses a web browser. It is a kind of web-based chatting program.
* It has a message queue. A When a user sends a message, it pushes it to a message queue and then pulls this message and sends it to the another user.

# Requirements
* Java 1.8 or later
* Maven 3.0
* [Kafka 0.10.2](https://kafka.apache.org/0102/documentation.html)
* [Zookeeper 3.4.10](http://zookeeper.apache.org/doc/r3.4.10)

# Software Used for this application
Below software are being used to run this application. 
* [jQuery ](https://jquery.com)
* [SockJS 1.0.2](https://github.com/sockjs/sockjs-client)
* [STOMP 2.3.3](http://jmesnil.net/stomp-websocket/doc)
* [Spring-boot 1.5.3](https://spring.io/docs)
* [Apache Kafka 0.10.2](https://kafka.apache.org/0102/documentation.html)
* [Zookeeper 3.4.10](http://zookeeper.apache.org/doc/r3.4.10)
* [Maven 3.0](http://https://maven.apache.org)


# Download
Download and unzip the source repository for this guide, or clone it using Git: git clone https://github.com/Seunghoon-Oh/chatting-kafka.git

# Building & Deploying
```bash
mvn clean package
```

# Run
```bash
java -jar chatting-kafka-0.1.0.jar
```
* This will start the server on http://localhost:8080


# Demo Site
* http://54.68.110.18:8080 
* User: steve, bread
