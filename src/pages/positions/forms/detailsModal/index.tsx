import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon } from "@inubekit/inubekit";
import { InteractiveModal } from "@design/feedback/InteractiveModal";
import { IPosition } from "@pages/positions/outlets/addPosition/types";

interface IField {
  id: string;
  labelName: string;
}

interface IDetailsModalProps {
  data?: IPosition;
  labelsOptions: IField[];
}

const DetailsModal = (props: IDetailsModalProps) => {
  const { data, labelsOptions } = props;

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    handleToggleModal;
  };

  return (
    <>
      <Icon
        icon={<MdOutlineRemoveRedEye />}
        size="16px"
        appearance="dark"
        onClick={handleToggleModal}
        cursorHover
      />
      {showModal && data && (
        <InteractiveModal
          portalId="portal"
          title="Detalles de cargo"
          infoData={data}
          infoTitle=""
          labels={labelsOptions}
          closeModal={handleToggleModal}
        />
      )}
    </>
  );
};

export { DetailsModal };
