import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onChange, title, description }) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutal-900/90 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vh] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none">
          <Dialog.Title className="text-xl text-center font-bold mb-4">{title}</Dialog.Title>
          <Dialog.Description className="text-center text-sm mb-5 leading-normal">{description}</Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none ">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
