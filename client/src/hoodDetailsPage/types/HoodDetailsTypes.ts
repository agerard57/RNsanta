type User = {
  name: {
    firstName: string;
    lastName: string;
  };
  profilePicNumber: number;
  id: string;
};

export type Gift = {
  id: string;
  name: string;
  price: number;
  url: string;
};

export type UserList = {
  userId: User;
  gift: [Gift];
};

export type Hood = {
  name: string;
  hexColor: string;
  gifts: [UserList];
  id: string;
};
