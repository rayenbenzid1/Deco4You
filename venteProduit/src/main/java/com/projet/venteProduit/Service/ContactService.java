package com.projet.venteProduit.Service;

import com.projet.venteProduit.Entites.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    Contact ajouterContact(Contact contact);
    List<Contact> afficherContact();
    Optional<Contact> AfficherContactById(Long id);
    void supprimerContact(Long id);
}
