import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../features/companies/companySlice";
import authReducer from "../features/auth/authSlice";
import applyReducer from "../features/applied/appliedSlice";
import noticeReducer from "../features/notice/noticeSlice";
import userReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    company: companyReducer,
    auth: authReducer,
    apply: applyReducer,
    notice: noticeReducer,
    user: userReducer,
  },
});
