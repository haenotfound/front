import React from "react";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import SafetySearchModal from "../../components/modals/SafetySearchModal";
import { useLocationContext } from "../../context/LocationContext";

const Layout = () => {
  const { isLocationModalOpen, closeLocationModal } = useLocationContext();

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* 전역 지역 선택 모달 - 어떤 페이지에서든 띄울 수 있음 */}
      <SafetySearchModal
        isOpen={isLocationModalOpen}
        onClose={closeLocationModal}
      />
    </div>
  );
};

export default Layout;
