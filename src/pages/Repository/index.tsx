import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/Logo.svg'

interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {

  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/"><FiChevronLeft size={20} />Voltar</Link>
        {/* Repository {params.repository} */}
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/14838416?s=460&u=999e2a0912fb1451c1b9811c220896cf3637f53f&v=4" />
          <div>
            <strong> Titulo</strong>
            <p>descricao</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`/repository`} >
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
};
export default Repository;
