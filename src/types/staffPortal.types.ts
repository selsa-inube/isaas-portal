interface IOptionsByStaffPortalBusinessManager {
  optionStaffId: string;
  staffPortalCatalogId: string;
  staffPortalId: string;
}

interface IStaffPortalByBusinessManager {
  abbreviatedName: string;
  businessManagerId: string;
  descriptionUse: string;
  publicCode: string;
  staffPortalCatalogId: string;
  staffPortalId: string;
  url: string;
  optionsByStaffPortalBusinessManager?: IOptionsByStaffPortalBusinessManager[];
  [key: string]: string | IOptionsByStaffPortalBusinessManager[] | undefined;
}

interface IBusinessManagers {
  id: string;
  publicCode: string;
  language: string;
  abbreviatedName: string;
  description: string;
  urlBrand: string;
  urlLogo: string;
  customerId: string;
  [key: string]: string;
}

export type {
  IStaffPortalByBusinessManager,
  IBusinessManagers,
  IOptionsByStaffPortalBusinessManager,
};
