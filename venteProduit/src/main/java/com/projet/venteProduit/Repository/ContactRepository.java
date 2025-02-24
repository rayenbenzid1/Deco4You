package com.projet.venteProduit.Repository;

import com.projet.venteProduit.Entites.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.Contract;

public interface ContactRepository extends JpaRepository<Contact,Long> {
}
