import "./styles.css";
import { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "❤️": "Heart",
    "😀": "Grining Face",
    "🙂": "slight smiling face",
    "😂": "Laughing",
    "😊": "smiling face with smiling Eyes",
    "🥰 ": "Smiling Face with Hearts",
    "🙈": "See-No-Evil Monkey",
    "🙉": "Hear-No-Evil Monkey",
    "🙊 ": "Speak-No-Evil Monkey",
    "🎌 ": "Crossed FLag",
    "🍇 ": "Grapes",
    "🍌 ": "Banana"
  };

  const userEmoji = Object.keys(emojiDictionary);

  const [emoji, setEmoji] = useState("translation will appear hear...");

  function emojiDescription(event) {
    const userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setEmoji(emojiDictionary[userInput]);
    } else {
      setEmoji("Not Available in dictionary");
    }
  }

  function emojisClicked(item) {
    setEmoji(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1>inside Outtt </h1>
      <input onChange={emojiDescription} />
      <p> {emoji} </p>

      {userEmoji.map((item) => {
        return (
          <span onClick={() => emojisClicked(item)} className="emotiocons">
            {item}
          </span>
        );
      })}
    </div>
  );
}
