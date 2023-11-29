import { Route, Routes } from "react-router-dom";
import "./App.css";
import { appRoutes } from "./navigations/route";
import { Suspense } from "react";
import Layouts from "./components/layouts/Layouts";
import Spinner from "./components/Spinner/Spinner";
import { GlobalContextWrapper } from "./context/GlobalContext";

function App() {
  return (
    <>
      <GlobalContextWrapper>
        <Routes>
          {appRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Layouts>
                  <Suspense fallback={<Spinner />}>
                    {<route.component />}
                  </Suspense>
                </Layouts>
              }
            ></Route>
          ))}
        </Routes>
      </GlobalContextWrapper>
    </>
  );
}

export default App;
