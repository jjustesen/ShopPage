import React from "react";
import RstBannerXL from "./components/molecules/Banner/BannerXL";
import RstBannerL from "./components/molecules/Banner/BannerL";

import RstHeader from "./components/molecules/Header/Header";
import RstNotificationBar from "./components/molecules/NotificationBar/NotificationBar";
import GlobalStyle from "./providers/GlobalStyles";
import RstBannerM from "./components/molecules/Banner/BannerM";
import RstBannerS from "./components/molecules/Banner/BannerS";
import RstChart from "./components/molecules/Chart/Chart";
import RstFooter from "./components/molecules/Footer/Footer";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <RstNotificationBar></RstNotificationBar>

      <RstHeader></RstHeader>
      <RstChart></RstChart>

      <RstBannerS></RstBannerS>
      <RstBannerM></RstBannerM>
      <RstBannerL></RstBannerL>
      <RstBannerXL></RstBannerXL>
      <RstFooter></RstFooter>
    </div>
  );
};

export default App;
