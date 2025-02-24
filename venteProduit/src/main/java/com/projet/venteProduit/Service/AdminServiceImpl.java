package com.projet.venteProduit.Service;

import com.projet.venteProduit.Entites.Admin;
import com.projet.venteProduit.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    AdminRepository adminRepository;
    @Override
    public Admin ajouterAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public Admin modifierAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public List<Admin> AfficherAdmin() {
        return adminRepository.findAll();
    }

    @Override
    public Optional<Admin> AfficherAdminById(Long id) {
        return adminRepository.findById(id);
    }

    @Override
    public void SupprimerAdmin(Long id) {
        adminRepository.deleteById(id);
    }
}
