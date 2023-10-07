import { Input } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { SearchIcon } from "./SearchIcon";
import { useNavigate } from "react-router-dom";

import { useStateContext } from "../Context";
import { CustomButton } from "./";

export default function Navbar() {
  const navigate = useNavigate();
  const { connect, address } = useStateContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px]">
        <Input
          type="text"
          placeholder="Search for campaigns"
          startContent={<SearchIcon size={18} />}
          classNames={{
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
        />
      </div>

      <div className="sm:flex hidden flex-row items-center justify-end gap-4">
        {address && (
          <Button onPress={onOpen}>Token : 0</Button>
        )}
        
        {address && (
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Buy Tokens
                  </ModalHeader>
                  <ModalBody>
                    {/* Modal body content */}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Buy
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}

        <CustomButton
          btnType="button"
          title={address ? "Create a campaign" : "Connect"}
          styles={address ? "bg-[#0E7490]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }}
        />
      </div>
    </div>
  );
}
