import './App.css';

const user = {
  firstName: "John",
  lastName: "Doe"
}
function getUserName(user) {
  if (user) {
    return user.firstName + " " + user.lastName;
  }
  return "Stranger";
}

function App() {
  return (
    <div className="App">
      <h1 className="greetings">Hello {getUserName(user)} !!</h1>
      <h1 className="greetings-stranger">Hello {getUserName()} !!</h1>
    </div>
  );
}

export default App;
