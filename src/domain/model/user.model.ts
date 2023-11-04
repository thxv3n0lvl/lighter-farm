export interface User {
  userId?: string;
  email: string;
  password: string;
  languagePreference: string;
  gender: string;
  birthYear: number;
  firstName?: string;
  lastName?: string;
  profilePicture?: URL;
  phoneNumber?: string;
  address?: string;
  notificationSetting?: JSON;
}

export function createUser(
  email: string,
  password: string,
  languagePreference: string,
  gender: string,
  birthYear: number,
  userId?: string,
  firstName?: string,
  lastName?: string,
  profilePicture?: URL,
  phoneNumber?: string,
  address?: string,
  notificationSetting?: JSON,
): User {
  return {
    userId,
    email,
    password,
    languagePreference,
    gender,
    birthYear,
    firstName,
    lastName,
    profilePicture,
    phoneNumber,
    address,
    notificationSetting,
  };
}
