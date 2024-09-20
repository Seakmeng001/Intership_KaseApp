import React, { useState } from 'react';
import UserContext from './UserContext';

interface UserInfo {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  password: string,
  verifiedRequestId: string
}

interface UserContextValue {
  user: UserInfo,
  updateUserInformation: (info: any) => void
}

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserInformation] = useState<UserInfo>();

  const updateUserInformation = (info: UserInfo) => {
    setUserInformation(info)
  };

  return (
    <UserContext.Provider value={{ user, updateUserInformation } as UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;