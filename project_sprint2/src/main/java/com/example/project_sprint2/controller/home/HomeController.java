package com.example.project_sprint2.controller.home;

import com.example.project_sprint2.dto.IProductDetailDTO;
import com.example.project_sprint2.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/home")
public class HomeController {

    @Autowired
    private IProductService productService;

    @GetMapping
    public ResponseEntity<List<IProductDetailDTO>> getProductNew(){
        List<IProductDetailDTO> productNew = productService.getNewProduct();
        if (productNew == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productNew,HttpStatus.OK);
    }

}
