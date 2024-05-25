export const API_ENDPOINTS = {
  CAPTCHA: { url: "/api/v1/captchas", method: "GET" },
  MASTER_ACCOUNTS: {
    BASE: { url: "/api/v1/master-accounts", method: "POST" }, // Create new account
    LOGIN: { url: "/api/v1/master-accounts/login", method: "POST" },
    CHANGE_PASSWORD: { url: "/api/v1/master-accounts/change-password", method: "PATCH" },
    VERIFY_EMAIL_REQUEST_CODE: { url: "/api/v1/master-accounts/verify-email-request-code", method: "POST" },
    VERIFY_EMAIL_VALIDATE_CODE: { url: "/api/v1/master-accounts/verify-email-request-code", method: "POST" },
    RECOVERY_REQUEST_CODE: { url: "/api/v1/master-accounts/recovery-request-code", method: "POST" },
    RECOVERY_CHANGE_PASSWORD: { url: "/api/v1/master-accounts/recovery-change-password", method: "PATCH" },
  },
  ACCOUNTS: {
    BASE: { url: "/api/v1/accounts", method: "GET" }, // Load accounts
    CREATE: { url: "/api/v1/accounts", method: "POST" }, // Create new account
    CHANGE_PASSWORD: { url: "/api/v1/accounts", method: "PATCH" }, // Change password
    LOGIN: { url: "/api/v1/accounts/login", method: "POST" },
  }
};