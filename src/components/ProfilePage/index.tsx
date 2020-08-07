import React from 'react';

import Feed from '../Feed';

import { Container, Banner,Avatar,ProfileData, LocationIcon, CakeIcon, Followage, EditButton} from './styles';


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Diego Araujo</h1>
        <h2>@diegoaraujo</h2>

        <p>
          Developer at <a href="#">Home</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, SP - Brasil
          </li>
          <li>
            <CakeIcon />
            28 de Maio
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>25</strong>
          </span>
          <span>
            <strong>89</strong> seguidores
          </span>
        </Followage>

      </ProfileData>

      <Feed />

    </Container>
  );
}

export default ProfilePage;
