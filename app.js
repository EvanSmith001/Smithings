```js
const e = React.createElement;

const personalities = [
  "Funny",
  "Romantic",
  "Savage",
  "Therapist",
  "Motivational",
  "Nonchalant",
  "Bold",
  "Stubborn"
];

function App() {
  const [step, setStep] = React.useState("select");
  const [personality, setPersonality] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);

    setTimeout(() => {
      const botReply = `personality You said "{input}"`;
      setMessages(msgs => [...msgs, { from: "bot", text: botReply }]);
    }, 1000);

    setInput("");
  };

  if (step === "select") {
    return e(
      "div",
      { style: { padding: 20 } },
      e("h2", null, "Choose Personality"),
      personalities.map(p =>
        e(
          "button",
          {
            key: p,
            onClick: () => {
              setPersonality(p);
              setStep("chat");
            },
            style: { margin: 5, padding: 10 }
          },
          p
        )
      )
      );
  }

  return e(
    "div",
    { style: { padding: 20 } },
    e("h2", null, `Chat: personality`),
    e(
      "div",
      
        style: 
          height: 300,
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: 10,
          marginBottom: 10
        ,
      messages.map((msg, i) =>
        e(
          "div",
          
            key: i,
            style: 
              textAlign: msg.from === "user" ? "right" : "left",
              margin: 5
            ,
          e(
            "strong",
            null,
            msg.from === "user" ? "You: " : `{personality}: `
          ),
          msg.text
        )
      )
    ),
    e("input", {
      value: input,
      onChange: e => setInput(e.target.value),
      onKeyDown: e => {
        if (e.key === "Enter") sendMessage();
      },
      style: { width: "80%", padding: 8 }
    }),
    e(
      "button",
      { onClick: sendMessage, style: { padding: 8, marginLeft: 5 } },
      "Send"
    ),
    e(
      "button",
      {
        onClick: () => setStep("select"),
        style: { padding: 8, marginLeft: 10 }
      },
      "Change Personality"
    )
  );
}

ReactDOM.render(e(App), document.getElementById("root"));
```
