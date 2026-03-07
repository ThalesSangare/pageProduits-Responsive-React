package com.komah.ecommerce_backend.restController;

import com.komah.ecommerce_backend.Services.ProduitService;
import com.komah.ecommerce_backend.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ProduitRestController {

    @Autowired
    private ProduitService produitService;

    @GetMapping()
    public List<Produit> getAllProduits(){
        return produitService.getAllProduits();
    }
}
