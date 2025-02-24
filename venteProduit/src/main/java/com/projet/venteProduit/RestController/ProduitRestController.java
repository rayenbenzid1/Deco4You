package com.projet.venteProduit.RestController;

import com.projet.venteProduit.Entites.Admin;
import com.projet.venteProduit.Entites.Produit;
import com.projet.venteProduit.Service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/produit")
public class ProduitRestController {
    @Autowired
    ProduitService produitService;


    @RequestMapping(method = RequestMethod.POST )
    public Produit AjouterProduit (@RequestBody Produit produit){
        return produitService.ajouterProduit(produit);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Produit> AfficherProduit(){
        return produitService.afficherProduit();
    }

    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Produit> getProduitById(@PathVariable("id") Long id){

        Optional<Produit> produit = produitService.afficherProduitById(id);
        return produit;
    }
    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Produit ModifierProduit(@PathVariable("id")Long id, @RequestBody Produit produit){



        Produit newProduit = produitService.modifierProduit(produit);
        return newProduit;
    }
}
