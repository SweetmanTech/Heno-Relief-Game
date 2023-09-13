import { ConnectButton } from "@rainbow-me/rainbowkit"
import { AiFillLock } from "react-icons/ai"
import Modal from "../Modal"

const TokenGateModal = ({ title = "Loading...", description = "" }) => (
  <Modal
    id="unlock_modal"
    isVisible
    onClose={() => null}
    containerClassName="rounded-[30px] md:rounded-[56px] overflow-hidden bg-black
        drop-shadow-[2px_3px_2px_rgba(255,255,255,0.25)]"
    modalClassName="!z-[110]"
  >
    <div
      className="px-4 py-8 samsungS8:p-6 xs:p-8 xl:p-6 rounded-lg font-arcade
            flex-col flex justify-between items-center
            md:w-[692px] md:h-[528px]
            bg-black"
    >
      <div className="text-[30px] md:text-[65px] text-white uppercase">{title}</div>
      <AiFillLock size={100} color="white" />

      <ConnectButton />

      <pre
        className="text-[18px] md:text-[33px] font-arcade
              font-bold text-white
              text-center leading-[99.3%]
              w-[260px] md:w-full"
      >
        {description}
      </pre>
    </div>
  </Modal>
)

export default TokenGateModal
