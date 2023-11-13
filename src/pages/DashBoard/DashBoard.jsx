import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortfolioSection from "./PortfolioSection";
import PriceSectioj from "./PriceSectioj";

function DashBoard() {
  return (
    <>
      <DashboardLayout title={"DashBoard"}>
        <PortfolioSection />
        <PriceSectioj />
      </DashboardLayout>
    </>
  );
}

export default DashBoard;
