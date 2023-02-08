import { Handbag } from "phosphor-react";
import { CartContainer } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';


interface CartProps {
    color?: string,
}

export function Cart({ color }: CartProps) {
  return (
  
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartContainer color={color}> 
          <Handbag size={24} weight="bold"/>
          <div>1</div>
        </CartContainer>
      </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title />
            <Dialog.Description />
            <Dialog.Close />
          </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}