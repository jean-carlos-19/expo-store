// navigation.d.ts

import { RootStackParamList } from "@/global/routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}