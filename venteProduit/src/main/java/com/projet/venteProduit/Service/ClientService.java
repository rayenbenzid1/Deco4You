package com.projet.venteProduit.Service;

import com.projet.venteProduit.Entites.Client;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface ClientService {
    ResponseEntity<Object> ajouterClient(Client client);
    ResponseEntity<?> ConfirmeEmail(String confirmationToken);
    Client modifierClient(Client client);
    List<Client> afficherClient();
    Optional<Client> afficherClientById(Long id);
}
