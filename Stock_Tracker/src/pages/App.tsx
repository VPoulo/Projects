import "../styles/App.css";
import AboutApp from "../pageComponents/aboutApp";
import SubOrUnsub from "src/pageComponents/subOrUnsub";
import AnimateTx from "src/util/animateTx";

function App() {
  return (
    <div className="container mx-auto">
      <AnimateTx>
        <div className="App">
          <AboutApp />
          <SubOrUnsub />
        </div>
      </AnimateTx>
    </div>
  );
}

export default App;
