import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { ProductList } from "./styles";

export default function index() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-11-masculino/26/HZM-5208-026/HZM-5208-026_detalhe1.jpg?ts=1620698712?ims=280x280"
          alt="tenis"
        />

        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-11-masculino/26/HZM-5208-026/HZM-5208-026_detalhe1.jpg?ts=1620698712?ims=280x280"
          alt="tenis"
        />

        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-11-masculino/26/HZM-5208-026/HZM-5208-026_detalhe1.jpg?ts=1620698712?ims=280x280"
          alt="tenis"
        />

        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-11-masculino/26/HZM-5208-026/HZM-5208-026_detalhe1.jpg?ts=1620698712?ims=280x280"
          alt="tenis"
        />

        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-11-masculino/26/HZM-5208-026/HZM-5208-026_detalhe1.jpg?ts=1620698712?ims=280x280"
          alt="tenis"
        />

        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
