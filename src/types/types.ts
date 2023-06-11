export type TodoType = {
  id: string;
  title: string;
  checked: boolean;
};

export enum SortPropEnum {
  ALL = "all",
  CHECKED = "checked",
  ACTIVE = "ACTIVE",
}

export type SortType = {
  value: SortPropEnum;
};
