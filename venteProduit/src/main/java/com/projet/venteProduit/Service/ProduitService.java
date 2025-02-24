package com.projet.venteProduit.Service;

import com.projet.venteProduit.Entites.Produit;

import java.util.List;
import java.util.Optional;

public interface ProduitService {
    Produit ajouterProduit(Produit produit);
    List<Produit> afficherProduit();
    Optional<Produit> afficherProduitById(Long id);

    Produit modifierProduit(Produit produit);
}
