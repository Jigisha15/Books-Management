import {
  Refine,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";


import {dataProvider} from "./providers";
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { App as AntdApp } from "antd";
import { BrowserRouter, Route, Routes } from "react-router";

//Pages Import
import {AllBooks , IssuedBooks, Header, Modal , Navbar}  from './pages'


function App() {

  return (
    <BrowserRouter>
      <RefineKbarProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                // liveProvider={liveProvider(wsClient)}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                // authProvider={authProvider}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "lSo8Sj-4q4ebO-E8c1yt",
                  liveMode: "auto",
                }}
              >
                <Routes>
                  {/*  */}
                  <Route path="/header" element={<Header/>}/>
                  <Route path="/allbooks" element={<AllBooks/>}/>
                  <Route path="/issuedbooks" element={<IssuedBooks/>}/>
                  <Route path="/modal" element={<Modal/>}/>
                  <Route path="/navbar" element={<Navbar/>}/>
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
