declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}

export type RootTabParamList = {
  Home: undefined;
  Hoods: undefined;
  Clock: undefined;
  //"todo-edit": { id: string };
};
