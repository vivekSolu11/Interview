import { setMessage } from "@/store/slices/authSlice";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

const InputBox = () => {
  const [textMessage, setTextMessage] = useState<string>("");
  const dispatch = useDispatch();

  const handleSend = () => {
    if (textMessage.length > 0) {
      dispatch(
        setMessage([
          {
            id: Date.now().toString(),
            sender: "vivek",
            text: textMessage,
            timestamp: new Date().toISOString(),
            isSystem: false,
          },
        ])
      );
      setTextMessage("");
    }
  };

  return (
    <div>
      <TextField
        type="text"
        placeholder="Enter message"
        value={textMessage}
        onChange={(e) => setTextMessage(e.target.value)}
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
};

export default InputBox;
