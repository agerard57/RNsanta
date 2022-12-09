declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}

export type RootTabParamList = {
  Home: undefined;
  Hoods: undefined;
  Login: undefined;
  Register: undefined;
  Clock: undefined;
  HoodDetails: { id: string };
  //"todo-edit": { id: string };
};
