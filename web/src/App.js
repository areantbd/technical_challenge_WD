import { Route, Routes } from "react-router-dom";
import AllPhonesScreen from "./screens/AllPhonesScreen";
import DetailPhoneScreen from "./screens/DetailPhoneScreen";

function App() {
  return (
    <>
      <Routes >
        <Route path="/phones" element={<AllPhonesScreen />} />        
        <Route path="/phones/:id" element={<DetailPhoneScreen />} />
      </Routes>
    </>
  );
}

export default App;
