import { FormikProps } from "formik";
import { Stack } from "@inubekit/inubekit";
import { Textarea } from "@inubekit/inubekit";
import { Input } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { getFieldState } from "@utils/forms";
import { IGeneralInformationEntry } from "@pages/positions/outlets/addPosition/types";
import { StyledContainer, StyledContainerFields } from "./styles";

interface IGeneralInformationFormUI {
  formik: FormikProps<IGeneralInformationEntry>;
  onNextStep: () => void;
  loading?: boolean;
  isMobile: boolean;
}

const GeneralInformationFormUI = (props: IGeneralInformationFormUI) => {
  const { formik, loading, isMobile } = props;

  return (
    <StyledContainer>
      <form>
        <Stack direction="column" gap={basic.spacing.s300}>
          <StyledContainerFields $isMobile={isMobile}>
            <Stack direction="column" width="100%" gap={basic.spacing.s250}>
              <Stack
                direction={isMobile ? "column" : "row"}
                gap={basic.spacing.s250}
              >
                <Stack width={isMobile ? "100%" : "350px"}>
                  <Input
                    name="namePosition"
                    id="namePosition"
                    label="Descripción Funcional"
                    placeholder="Nombre del cargo"
                    type="text"
                    size="compact"
                    value={formik.values.namePosition}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={getFieldState(formik, "namePosition")}
                    message={formik.errors.namePosition}
                    fullwidth
                  />
                </Stack>
              </Stack>

              <Textarea
                label="Descripción Funcional"
                placeholder="Agregue una breve descripción"
                name="descriptionPosition"
                id="descriptionPosition"
                value={formik.values.descriptionPosition}
                maxLength={1000}
                disabled={loading}
                status={getFieldState(formik, "descriptionPosition")}
                message={formik.errors.descriptionPosition}
                fullwidth
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Stack>
          </StyledContainerFields>
        </Stack>
      </form>
    </StyledContainer>
  );
};

export { GeneralInformationFormUI };
