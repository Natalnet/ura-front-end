import React from 'react';

import { ProductsWrapper } from './styles';

export const Products = () => (
  <ProductsWrapper>
    <ul className="primary">
      <li>
        <span className="payments" />

        <div>
          <h3>Arduino</h3>
          <p>Aprenda Arduino nessa série completa de vídeos </p>
        </div>
      </li>
      <li>
        <span className="billing" />

        <div>
          <h3>Python</h3>
          <p>Aprenda Python nessa série completa de vídeos </p>
        </div>
      </li>
      <li>
        <span className="connect" />

        <div>
          <h3>P5JS</h3>
          <p>Aprenda P5JS nessa série completa de vídeos </p>
        </div>
      </li>
    </ul>

    <ul className="secondary">
      <li>
        <span className="sigma" />

        <h3>Webinar 1</h3>
        <p>Robótica Educacional - Aspectos Técnicos e Pedagógicos</p>
      </li>
      <li>
        <span className="atlas" />

        <h3>Webinar 2</h3>
        <p>Robótica Educacional Sustentavel - Todos os seus Aspectos Técnicos</p>
      </li>
      <li>
        <span className="radar" />

        <h3>Webinar 3</h3>
        <p>Robótica Educacional - Aplicações no Ensino a Deficientes Auditivos</p>
      </li>
      <li>
        <span className="issuing" />

        <h3>Webinar 4</h3>
        <p>Robótica Educacional - xesquedele do dale</p>
      </li>
      <li>
        <span className="terminal" />

        <h3>Webinar 5</h3>
        <p>Robótica Educacional - Como o pub squad vai dominar o mundo</p>
      </li>
    </ul>
  </ProductsWrapper>
);
