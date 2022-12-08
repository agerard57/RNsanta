declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}

type RootTabParamList = {
  Home: undefined;
  Hoods: undefined;
  //"todo-edit": { id: string };
};

// Export all types with their generic types
export type { RootTabParamList };
