import { AxiosRequestConfig } from "axios";
import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isaas";
import { mapStaffPortalByBusinessManagerApiToEntities } from "./mappers";

const staffPortalByBusinessManager = async (
  portalCode: string
): Promise<IStaffPortalByBusinessManager[]> => {
  const queryParams = new URLSearchParams({
    staffPortalId: portalCode,
  });
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllStaffPortalsByBusinessManager",
    },
  };
  const data: IStaffPortalByBusinessManager[] = await getWithRetries<
    IStaffPortalByBusinessManager[]
  >(
    axiosInstance,
    `/staff-portals-by-business-manager?${queryParams.toString()}`,
    config
  );

  return mapStaffPortalByBusinessManagerApiToEntities(data);
};

export { staffPortalByBusinessManager };
