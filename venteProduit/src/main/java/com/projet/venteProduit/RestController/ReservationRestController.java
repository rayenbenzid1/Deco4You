package com.projet.venteProduit.RestController;

import com.projet.venteProduit.Entites.Reservation;
import com.projet.venteProduit.Entites.ReservationRq;
import com.projet.venteProduit.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;
import java.util.Map;
import java.util.HashMap;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/reservation")
public class ReservationRestController {
    @Autowired
    ReservationService reservationService;
    @RequestMapping(method = RequestMethod.POST)
    public Reservation ajouterReservation(@RequestBody ReservationRq reservationRq){
        System.out.println("reserverRq"+reservationRq);
        return reservationService.ajouterReservation(reservationRq);
    }
    @RequestMapping("get-all-by-id-Client/{id}")
    public List<Reservation> listReservationByClient(@PathVariable Long id){
        return reservationService.GetProduitByClient(id);
    }
    @RequestMapping("get-all-reservation")
    public List<Reservation> listReservation(){
        return reservationService.listeReservation();
    }

    //Les statistiques
    @RequestMapping("get-reservations-by-product")
    public List<Map<String, Object>> getReservationsByProduct() {
        List<Reservation> reservations = reservationService.listeReservation();

        // Regrouper par produit et compter les réservations
        Map<String, Long> reservationsCount = reservations.stream()
                .collect(Collectors.groupingBy(res -> res.getProduit().getNom(), Collectors.counting()));

        // Convertir en liste pour l'API
        return reservationsCount.entrySet().stream()
                .map(entry -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("product", entry.getKey());
                    map.put("reservations", entry.getValue());
                    return map;
                }).collect(Collectors.toList());
    }

}