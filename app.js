'''js
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
  const [step, setStep] = useState("select");
  const [personality, setPersonality] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return; you 
    setMessages([...messages, { from: "user", text: input }]);

    setTimeout(() => {style={{
          height: 300,
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: 10,
          marginBottom: 10,
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.from === "user" ? "right" : "left",
              margin: 5,
            }}
          >
            <strong>{msg.from === "user" ? "You" : personality}:</strong>{" "}
            {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type a message..."
        style={{ width: "70%", marginRight: 5 }}
      />
      <button onClick={sendMessage}>Send</button>
      <button onClick={() => setStep("select")} style={{ marginLeft: 10 }}>
        Change Personality
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```
