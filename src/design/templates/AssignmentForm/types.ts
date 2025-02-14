import { IOption } from "@design/navigation/types";
import { IOptionItemChecked } from "@design/select/OptionItem";
import { IOptionInitialiceEntryApp } from "@pages/positions/outlets/addPosition/types";

interface IEntry {
  id: string;
  value: string;
  abbreviatedName?: string;
  isActive: boolean;
  rolesStaff?: string;
  applicationStaff?: string;
}

interface IOptions {
  id: string;
  label: string;
  checked?: boolean;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IAssignmentForm {
  handleChange: (entries: IEntry[]) => void;
  entries: IEntry[];
  title: string;
  setSelectedToggle: React.Dispatch<React.SetStateAction<IEntry[] | undefined>>;
  readOnly?: boolean;
  setChangedData?: (changeData: IEntry[]) => void;
  changeData?: IEntry[];
  valueSelect: IOptionInitialiceEntryApp[];
}

interface IAssignmentFormUI {
  entries: IEntry[];
  filter: string;
  filteredRows: IEntry[];
  filterValue: string;
  isAssignAll: boolean;
  menuOptions: IOption[];
  options: IOptions[];
  showMenu: boolean;
  dataValidations: boolean;
  title: string;
  handleCloseMenuInvitation: () => void;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (options: IOptionItemChecked[]) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleToggleAllEntries: (allocate: boolean) => void;
  handleToggleMenuInvitation: () => void;
  onHandleSelectCheckChange: (id: string) => void;
  handleFilterInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const titlesOptions = [
  {
    id: "id",
    titleName: "",
    priority: 0,
    value: "isActive",
    type: "toggle",
  },
  {
    id: "abbreviatedName",
    titleName: "Rol",
    priority: 1,
    value: "abbreviatedName",
  },
  {
    id: "value",
    titleName: "Aplicación",
    priority: 2,
    value: "value",
  },
];
export { titlesOptions };
export type { IEntry, IOptions, IAssignmentFormUI, IAssignmentForm };
