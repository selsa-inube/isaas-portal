interface IAplication {
  appId: string;
  abbreviatedName: string;
}

interface IUseCasesByStaffRoles {
  roleId: string;
  useCaseId: string;
}

interface IRoleForStaff {
  roleId: string;
  roleName: string;
  isActive?: boolean;
  publicCode?: string;
  descriptionUse?: string;
  application?: IAplication;
  useCasesByStaffRoles?: IUseCasesByStaffRoles[];
}
export type { IRoleForStaff };
