import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { CompanyDetail } from "./features/companies/components/CompanyDetail";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { Applied } from "./features/applied/Applied";
import PageNotFound from "./pages/404";
import CompanyPage from "./pages/CompanyPage";
import { Notice } from "./features/notice/components/Notice";
import NoticeDetail from "./features/notice/components/NoticeDetail";
import { UserProfile } from "./features/user/components/UserProfile";
import User from "./features/user/components/User";
import Logout from "./features/auth/components/Logout";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminHomePage from "./pages/AdminHomePage";
import { AdminCompanyDetail } from "./features/admin/components/AdminCompanyDetail";
import CompanyForm from "./features/admin/components/CompanyForm";
import NoticeForm from "./features/admin/components/NoticeForm";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { AdminApplied } from "./features/admin/components/AdminApplied";
import UserDetail from "./pages/UserDetail";
import { checkAuthAsync, selectUserChecked } from "./features/auth/authSlice";
const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};
const App = () => {
  const dispatch = useDispatch();
  const userChecked = useSelector(selectUserChecked);
  useEffect(() => {
    dispatch(checkAuthAsync());
  }, []);
  return (
    <div>
      {userChecked && (
        <Provider template={AlertTemplate} {...options}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Protected>
                    <HomePage />
                  </Protected>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedAdmin>
                    <AdminHomePage />
                  </ProtectedAdmin>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/company-detail/:id"
                element={
                  <Protected>
                    <CompanyDetail />
                  </Protected>
                }
              />
              <Route
                path="/admin/company-detail/:id"
                element={
                  <ProtectedAdmin>
                    <AdminCompanyDetail />
                  </ProtectedAdmin>
                }
              />
              <Route
                path="/admin/company-form"
                element={
                  <ProtectedAdmin>
                    <CompanyForm />
                  </ProtectedAdmin>
                }
              />
              <Route
                path="/admin/company-form/edit/:id"
                element={
                  <ProtectedAdmin>
                    <CompanyForm />
                  </ProtectedAdmin>
                }
              />
              <Route
                path="/company-page"
                element={
                  <Protected>
                    <CompanyPage />
                  </Protected>
                }
              />
              <Route
                path="/admin/company-page"
                element={
                  <ProtectedAdmin>
                    <CompanyPage />
                  </ProtectedAdmin>
                }
              />
              <Route
                path="/applied-page"
                element={
                  <Protected>
                    <Applied />
                  </Protected>
                }
              />
              <Route
                path="/admin/applied-page"
                element={
                  <ProtectedAdmin>
                    <AdminApplied />
                  </ProtectedAdmin>
                }
              />
              <Route
                path="/admin/user-detail/:id"
                element={
                  <ProtectedAdmin>
                    <UserDetail />
                  </ProtectedAdmin>
                }
              />
              <Route
                path="/notice-detail/:id"
                element={
                  <Protected>
                    <NoticeDetail />
                  </Protected>
                }
              />
              <Route
                path="/admin/notice-detail/:id"
                element={
                  <ProtectedAdmin>
                    <NoticeDetail />
                  </ProtectedAdmin>
                }
              />
              <Route
                path="/admin/notice-form"
                element={
                  <Protected>
                    <NoticeForm />
                  </Protected>
                }
              />
              <Route
                path="/admin/notice-form/:id"
                element={
                  <ProtectedAdmin>
                    <NoticeForm />
                  </ProtectedAdmin>
                }
              />
              <Route
                path="/notice-page"
                element={
                  <Protected>
                    <Notice />
                  </Protected>
                }
              />
              <Route
                path="/admin/notice-page"
                element={
                  <ProtectedAdmin>
                    <Notice />
                  </ProtectedAdmin>
                }
              />
              <Route
                path="/profile-page"
                element={
                  <Protected>
                    <UserProfile />
                  </Protected>
                }
              />

              <Route
                path="/update-profile"
                element={
                  <Protected>
                    <User />
                  </Protected>
                }
              />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      )}
    </div>
  );
};

export default App;
