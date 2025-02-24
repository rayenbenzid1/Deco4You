package com.projet.venteProduit.RestController;

import com.projet.venteProduit.Entites.Admin;
import com.projet.venteProduit.Entites.Contact;
import com.projet.venteProduit.Service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/contact")
public class ContactRestController {
    @Autowired
    ContactService contactService;


    @RequestMapping(method = RequestMethod.POST )
    public Contact AjouterContact (@RequestBody Contact contact){
        return contactService.ajouterContact(contact);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Contact> AfficherContact(){
        return contactService.afficherContact();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
    public void SupprimerContact(@PathVariable("id") Long id){
        contactService.supprimerContact(id);
    }

    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Contact> getContactById(@PathVariable("id") Long id){
        Optional<Contact> contact = contactService.AfficherContactById(id);
        return contact;
    }

}
