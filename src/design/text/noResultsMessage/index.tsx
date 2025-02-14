import { StyledNoResults } from "@design/select/SelectbusinessUnit/styles";
import { Text } from "@inubekit/inubekit";

interface INoResultsMessage {
  search: string;
}

const NoResultsMessage = ({ search }: INoResultsMessage) => {
  return (
    <StyledNoResults>
      <Text size="medium">
        No se encontraron resultados para &quot;{search}&quot;.
      </Text>
      <Text size="medium">
        Por favor, intenta modificando los parámetros de búsqueda.
      </Text>
    </StyledNoResults>
  );
};

export { NoResultsMessage };
