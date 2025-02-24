package com.projet.venteProduit.Service;

import com.projet.venteProduit.Entites.Contact;
import com.projet.venteProduit.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService{
    @Autowired
    ContactRepository contactRepository;

    @Override
    public Contact ajouterContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public List<Contact> afficherContact() {
        return contactRepository.findAll();
    }

    @Override
    public Optional<Contact> AfficherContactById(Long id) {
        return contactRepository.findById(id);
    }

    @Override
    public void supprimerContact(Long id) {
        contactRepository.deleteById(id);
    }
}
