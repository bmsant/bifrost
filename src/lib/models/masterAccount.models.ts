export interface MasterAccountRequests {
  email?: string;
  password?: string;
  newPassword?: string;
  repeatNewPassword?: string;
  captchaReply?: string;
  code?: string;
  recoveryCode?: string;
}

export interface MasterAccountResponses {
  email?: string;
  token?: string;
  refreshToken?: string;
}