package com.projet.venteProduit.Service;

import com.projet.venteProduit.Entites.Reservation;
import com.projet.venteProduit.Entites.ReservationRq;

import java.util.List;

public interface ReservationService {
    Reservation ajouterReservation(ReservationRq reservationRq);
    List<Reservation> listeReservation();
    List<Reservation>GetProduitByClient(Long id);
}
