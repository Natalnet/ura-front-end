import React from 'react';

import { CompanyWrapper } from './styles';

export const Company = () => (
  <CompanyWrapper>
    <ul className="primary">
      <li>
        <span />
        Minhas informações
      </li>
      <li>
        <span />
        Cadastrar currículo
      </li>
      <li>
        <span />
        Vagas em interesse
      </li>
      <li>
        <span />
        Parceiros
      </li>
      <li>
        <span />
        Empregos
      </li>
      <li>
        <span />
        Meio ambiente
      </li>
      <li>
        <span />
        Notícias
      </li>
    </ul>
    <ul className="secondary">
      <li className="title">
        <span className="title-icon" />
        Do blog
      </li>
      <li>
        Payouts with no code required
        <span className="new-tag">Novo</span>
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Introducing the Billing customer portal
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Online bank transfers through FPX are now...
        <span className="arrow">{'>'}</span>
      </li>
    </ul>
  </CompanyWrapper>
);
