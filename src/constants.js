export const API_ENDPOINTS = {
  CAPTCHA: "/api/v1/captchas",
  MASTER_ACCOUNTS: {
    BASE: "/api/v1/master-accounts", // POST: Create new account
    LOGIN: "/api/v1/master-accounts/login",
    CHANGE_PASSWORD: "/api/v1/master-accounts/change-password",
    VERIFY_EMAIL_REQUEST_CODE: "/api/v1/master-accounts/verify-email-request-code",
    VERIFY_EMAIL_VALIDATE_CODE: "/api/v1/master-accounts/verify-email-request-code",
    RECOVERY_REQUEST_CODE: "/api/v1/master-accounts/recovery-request-code",
    RECOVERY_CHANGE_PASSWORD: "/api/v1/master-accounts/recovery-change-password",
  },
  ACCOUNTS: {
    BASE: "/api/v1/accounts", // GET: Load accounts, POST: Create new account, PATCH: Change password
    LOGIN: "/api/v1/accounts/login",
  }
};