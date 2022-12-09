declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}

export type RootTabParamList = {
  Home: undefined;
  Hoods: undefined;
  //"todo-edit": { id: string };
};
