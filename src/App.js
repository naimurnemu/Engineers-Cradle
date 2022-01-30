import "./App.css";
import Navigation from "./pages/Header/Navigation";
import Success from "./pages/Success/Success";
// import Login from "./pages/Login/Login";

function App() {
    return (
        <div className="App bg-white">
            {/* <Login /> */}
            <Navigation />
            <Success />
        </div>
    );
}

export default App;
