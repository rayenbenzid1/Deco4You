package com.projet.venteProduit.Service;

import com.projet.venteProduit.Entites.Produit;
import com.projet.venteProduit.Repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitServiceImpl implements ProduitService{
    @Autowired
    ProduitRepository produitRepository;

    @Override
    public Produit ajouterProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public List<Produit> afficherProduit() {
        return produitRepository.findAll();
    }

    @Override
    public Optional<Produit> afficherProduitById(Long id) {
        return produitRepository.findById(id);
    }

    @Override
    public Produit modifierProduit(Produit produit) {
        return produitRepository.save(produit);
    }
}
