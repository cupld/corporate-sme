// Your imports...
import UseEmail from "./UseEmail";

// Example component
function SendEmail() {
  // You don't need to manage state by yourself
  // use the variables below
  const { loading, submitted, error, sendEmail } = UseEmail(
    " https://public.herotofu.com/v1/1922b2b0-b0e0-11ec-85ec-4bc9f7f36ae9"
  );

  const sendExample = () => {
    // Can be any data, static and dynamic
    sendEmail({
      example_user: "zahraa@hotmail.com",
      example_data: "HEllo Ahmed",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ margin: "1rem 0", fontSize: "2rem" }}>
          {submitted && "Done, email was sent!"}
          {error ? `Unexpected error: ${error}` : null}
          {loading && "Email is being sent now..."}
        </div>
        <div style={{ margin: "1rem 0" }}>
          <button onClick={sendExample}>Send test data</button>
        </div>
      </header>
    </div>
  );
}

export default SendEmail;
