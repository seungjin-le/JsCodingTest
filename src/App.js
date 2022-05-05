import "./App.scss";
import NumStrEn from "./components/numStrEn";
import UndefinedNum from "./components/undefinedNum";
import FailureRate from "./components/failureRate";
import String from "./components/string";
import SecretMap from "./components/secretMap";
import FunctionDevelopment from "./components/functionDevelopment";

function App() {
  return (
    <div className="App">
      {/*
      신고한 유저와 당한유저
      <UserReports />
      */}
      {/*<FizzBuzz />*/}
      {/*
      부족한돈 계산
      <Insufficient />
      */}
      {/*<SamNumber />*/}
      {/*
      문자열안 문자를 숫자로 치환
      <NumStrEn />*/}
      {/*
      <UndefinedNum />*/}
      {/*
      <FailureRate />*/}
      {/*<String />*/}
      {/*<SecretMap />*/}
      <FunctionDevelopment />
    </div>
  );
}

export default App;
