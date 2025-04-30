import { useSelector } from "react-redux";
import InputBox from "../inputBox/InputBox";
import { RootState } from "@/store/store";

const ChatWindow = () => {
  const { messages } = useSelector((state: RootState) => state.auth);
  
  return (
    <div>
      {messages?.map((message) => (
        <div key={message.id}>
          <strong>{message.sender}: </strong>
          <span>{message.text}</span>
        </div>
      ))}
      <InputBox />
    </div>
  );
};

export default ChatWindow;
