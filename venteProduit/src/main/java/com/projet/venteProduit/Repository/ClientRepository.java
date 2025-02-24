package com.projet.venteProduit.Repository;

import com.projet.venteProduit.Entites.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
    Client findClientByEmail(String email);

    boolean existsByEmail(String email);

    Client findByEmail(String email);
}
