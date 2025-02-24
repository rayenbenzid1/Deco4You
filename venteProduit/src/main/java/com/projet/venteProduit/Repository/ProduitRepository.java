package com.projet.venteProduit.Repository;

import com.projet.venteProduit.Entites.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit,Long> {
}
