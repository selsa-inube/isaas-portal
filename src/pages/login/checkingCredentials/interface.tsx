import { Spinner } from "@inubekit/inubekit";
import { Stack } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";

const CheckingCredentialsUI = () => {
  return (
    <Stack gap="16px" direction="column">
      <Stack direction="column">
        <Text type="title" size="large" textAlign="center">
          Validando credenciales
        </Text>
        <Text type="title" size="small" textAlign="center">
          Espere un momento, por favor.
        </Text>
      </Stack>
      <Stack alignItems="center" direction="column">
        <Spinner size="large" />
      </Stack>
    </Stack>
  );
};

export { CheckingCredentialsUI };
