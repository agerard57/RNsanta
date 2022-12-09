export type InputLoginType = {
  email: string;
  password: string;
};

export type LoginType = {
  id: string;
  name: {
    firstname: string;
    lastname: string;
  };
  profilePicNumber: number;
};
