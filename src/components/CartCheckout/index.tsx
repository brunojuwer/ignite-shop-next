import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CloseButton, Content, Overlay, Title } from './styles';


export function CartCheckout() {
    return (
        <Dialog.Portal>
          <Overlay />
          <Content>
              <Dialog.Close asChild>
                <CloseButton aria-label="Close">
                  <X size={24} weight='bold'/>
                </CloseButton>
              </Dialog.Close>
              
              <Title>Sacola de Compras</Title>
          </Content>
        </Dialog.Portal>
    )
}