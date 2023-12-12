package com.example.project_sprint2.controller.cart;

import com.example.project_sprint2.dto.ICartDetailDTO;
import com.example.project_sprint2.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private ICartService cartService;

    @GetMapping("/{id}")
    public ResponseEntity<List<ICartDetailDTO>> getAllCartByUserId(@PathVariable int id){
        List<ICartDetailDTO> cartDetailDTOList = cartService.getAllCartByUserId(id);
        if (cartDetailDTOList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cartDetailDTOList,HttpStatus.OK);
    }
}
