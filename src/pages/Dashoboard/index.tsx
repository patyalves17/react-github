import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';


import logoImg from '../../assets/Logo.svg'
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;

  }
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddREpository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();


    console.log(newRepo);
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositorio');
      return;
    }


    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      console.log(repository);

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por esse repositorio');
    }



  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddREpository} >
        <input placeholder="Digite o nome do repositório" value={newRepo} onChange={e => setNewRepo(e.target.value)} />
        <button type='submit'>Pesquisar</button>
      </Form>

      {InputEvent && <Error>{inputError} </Error>}

      <Repositories>
        {
          repositories.map(repository => (
            <a href="teste" key={repository.full_name}>
              <img src={repository.owner.avatar_url}
                alt={repository.owner.login} />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}

      </Repositories>
    </>
  );
};
export default Dashboard;
