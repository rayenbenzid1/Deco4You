package com.projet.venteProduit.Repository;

import com.projet.venteProduit.Entites.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {

    boolean existsByEmail(String email);

    Admin findAdminByEmail(String email);
}
