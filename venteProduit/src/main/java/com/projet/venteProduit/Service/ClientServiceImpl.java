package com.projet.venteProduit.Service;

import com.projet.venteProduit.Entites.Client;
import com.projet.venteProduit.Entites.ConfirmationToken;
import com.projet.venteProduit.Repository.ClientRepository;
import com.projet.venteProduit.Repository.ConfirmationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements ClientService{
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Autowired
    EmailService emailService;
    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    ClientRepository clientRepository;
    @Override
    public ResponseEntity<Object> ajouterClient(Client client) {
        Client existingUser = clientRepository.findByEmail(client.getEmail());
        if (existingUser!=null) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        client.setMp(this.bCryptPasswordEncoder.encode(client.getMp()));
        clientRepository.save(client);
        ConfirmationToken confirmationToken = new ConfirmationToken(client);

        confirmationTokenRepository.save(confirmationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(client.getEmail());
        mailMessage.setSubject("Complete Registration!");
        mailMessage.setText("To confirm your account, please click here : "
                +"http://localhost:8081/api/client/confirm-account?token="+confirmationToken.getConfirmationToken());
        emailService.sendEmail(mailMessage);

        System.out.println("Confirmation Token: " + confirmationToken.getConfirmationToken());

        return ResponseEntity.ok("Verify email by the link sent on your email address");
    }



    @Override
    public ResponseEntity<?> ConfirmeEmail(String confirmationToken) {

        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        if(token != null)
        {
            Client client = clientRepository.findByEmail(token.getClient().getEmail());
            System.out.println("email from token " +token.getClient().getEmail());
            client.setEtat(true);
            clientRepository.save(client);
            return ResponseEntity.ok("Email verified successfully! "+"http://localhost:4200/login");
        }else {
            return ResponseEntity.badRequest().body("Error: Couldn't verify email");}
    }

    @Override
    public Client modifierClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public List<Client> afficherClient() {
        return clientRepository.findAll();
    }

    @Override
    public Optional<Client> afficherClientById(Long id) {
        return clientRepository.findById(id);
    }
}
