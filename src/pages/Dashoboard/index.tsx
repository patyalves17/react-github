import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/Logo.svg'
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type='submit'>Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/14838416?s=460&u=999e2a0912fb1451c1b9811c220896cf3637f53f&v=4"
            alt="Paty Almeida" />
          <div>
            <strong>imersaoReact/Patyflix</strong>
            <p>imersaoReact, criacao do patyflix</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/14838416?s=460&u=999e2a0912fb1451c1b9811c220896cf3637f53f&v=4"
            alt="Paty Almeida" />
          <div>
            <strong>imersaoReact/Patyflix</strong>
            <p>imersaoReact, criacao do patyflix</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/14838416?s=460&u=999e2a0912fb1451c1b9811c220896cf3637f53f&v=4"
            alt="Paty Almeida" />
          <div>
            <strong>imersaoReact/Patyflix</strong>
            <p>imersaoReact, criacao do patyflix</p>
          </div>
          <FiChevronRight size={20} />
        </a>


      </Repositories>
    </>
  );
};
export default Dashboard;
