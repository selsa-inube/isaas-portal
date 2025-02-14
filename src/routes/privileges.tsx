import { Route, Routes } from "react-router-dom";
import { PositionsProvider } from "@context/positionsContext";
import { ErrorPage } from "@design/layout/ErrorPage";
import { PositionsOptions } from "@pages/positions/outlets/options";
import { Positions } from "@pages/positions";
import { AddPosition } from "@pages/positions/outlets/addPosition";

const PositionsRoutes = () => {
  return (
    <PositionsProvider>
      <Routes>
        <Route path="/" element={<PositionsOptions />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="positions/add-position" element={<AddPosition />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </PositionsProvider>
  );
};

export { PositionsRoutes };
