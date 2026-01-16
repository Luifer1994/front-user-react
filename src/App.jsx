import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Index from "./pages/Index";
import Edit from "./pages/Edit";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
