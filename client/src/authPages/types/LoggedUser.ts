export type LoggedUser = {
  id: string;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
  profilePicNumber: number;
};
