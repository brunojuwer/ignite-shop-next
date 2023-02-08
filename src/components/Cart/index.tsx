import { Handbag } from "phosphor-react";
import { CartContainer } from "./styles";

export function Cart() {
    return (
        <CartContainer>
            <Handbag size={24} weight="bold" color="#8D8D99"/>
            <div>1</div>
        </CartContainer>
    )
}