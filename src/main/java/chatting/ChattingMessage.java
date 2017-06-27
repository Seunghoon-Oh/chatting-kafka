package chatting;

public class ChattingMessage {

    private String message;
    private String user;

    public String getUser() {
        return user;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public ChattingMessage(String message, String user) {
        this.user = user;
        this.message = message;
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

    public ChattingMessage(String fileName, byte[] rawData, String user) {
        this.fileName = fileName;
        this.rawData = rawData;
        this.user = user;
    }

    public ChattingMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

}
