package model;

public class ChattingMessage {

    private String message;
    private String from;
    private String to;

    public String getFrom() {
        return from;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public ChattingMessage(String from, String to, String message) {
        this.from = from;
        this.message = message;
        this.to = to;
    }

    private String fileName;
    private byte[] rawData;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public byte[] getRawData() {
        return rawData;
    }

    public void setRawData(byte[] rawData) {
        this.rawData = rawData;
    }

    public ChattingMessage() {
    }

    public ChattingMessage(String fileName, byte[] rawData) {
        this.fileName = fileName;
        this.rawData = rawData;
    }

    public ChattingMessage(String fileName, byte[] rawData, String from) {
        this.fileName = fileName;
        this.rawData = rawData;
        this.from = from;
    }

    public ChattingMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }
}
