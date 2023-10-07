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
import { useState } from "react";
import { useStateContext } from "../Context";
import { CustomButton } from "./";

export default function Navbar() {
  const navigate = useNavigate();
  const [tokenAmount,setTokenAmount]=useState(0)
  const { connect, address } = useStateContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [quantity, setQuantity] = useState(1);
  const tokenPriceUSD = 0.1;
  const tokenPriceETH = 0.0001;

  const calculateTotalAmountUSD = () => {
    return quantity * tokenPriceUSD;
  };

  const calculateTotalAmountETH = () => {
    return quantity * tokenPriceETH;
  };

  const handleClose = () => {
    setQuantity(1);
    onOpenChange(false);
  };

  const handleBuyTokens = () => {
    setTokenAmount(quantity)
    handleClose();
  };

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
        {address && <Button onPress={onOpen}>Vites : { tokenAmount }</Button>}

        {address && (
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} classNames={{ modal: "custom-modal" }}>
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-lg font-semibold text-center">Buy Tokens</ModalHeader>
                <ModalBody>
                  <div className="modal-content space-y-2">
                    <p className="text-sm">1 Token = {tokenPriceUSD} USD</p>
                    <p className="text-sm">1 Token = {tokenPriceETH} ETH</p>
                    <label htmlFor="quantity" className="text-sm">Quantity:</label>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      min="1"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                    />
                    <p className="text-sm font-bold">Total Amount (USD): {calculateTotalAmountUSD()}</p>
                    <p className="text-sm font-bold">Total Amount (ETH): {calculateTotalAmountETH()}</p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={() => handleClose()} className="bg-red-500 hover:bg-red-600 text-white">
                    Cancel
                  </Button>
                  <Button color="primary" onPress={() => handleBuyTokens()} className="bg-blue-500 hover:bg-blue-600 text-white">
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
