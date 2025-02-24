package com.projet.venteProduit.Service;

import com.projet.venteProduit.Entites.Client;
import com.projet.venteProduit.Entites.Produit;
import com.projet.venteProduit.Entites.Reservation;
import com.projet.venteProduit.Entites.ReservationRq;
import com.projet.venteProduit.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService{
    @Autowired
    ProduitService produitService;
    @Autowired
    ClientService clientService;
    @Autowired
    ReservationRepository reservationRepository;

    @Override
    public Reservation ajouterReservation(ReservationRq reservationRq) {
        Optional<Produit> produit = produitService.afficherProduitById(reservationRq.getIdProduit());
        Optional<Client> client = clientService.afficherClientById(reservationRq.getIdClient());

        if (produit.isPresent() && client.isPresent()) {
            Reservation reservation = new Reservation();
            reservation.setProduit(produit.get());
            reservation.setClient(client.get());

            return reservationRepository.save(reservation);
        }
        else
        {
            return null;
        }
    }

    @Override
    public List<Reservation> listeReservation() {
        return reservationRepository.findAll();
    }

    @Override
    public List<Reservation> GetProduitByClient(Long id) {
        return reservationRepository.findByClientId(id);
    }
}
