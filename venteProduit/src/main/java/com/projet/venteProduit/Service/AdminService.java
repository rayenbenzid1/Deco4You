package com.projet.venteProduit.Service;

import com.projet.venteProduit.Entites.Admin;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    Admin ajouterAdmin(Admin admin);
    Admin modifierAdmin(Admin admin);
    List<Admin> AfficherAdmin();
    Optional<Admin> AfficherAdminById(Long id);
    void SupprimerAdmin(Long id);
}
