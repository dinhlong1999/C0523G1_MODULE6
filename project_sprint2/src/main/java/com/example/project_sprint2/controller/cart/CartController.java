package com.example.project_sprint2.controller.cart;

import com.example.project_sprint2.dto.CartDTO;
import com.example.project_sprint2.dto.ICartDetailDTO;
import com.example.project_sprint2.model.Cart;
import com.example.project_sprint2.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/member/cart")
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

    @GetMapping("/{productId}/{userId}")
    public ResponseEntity<Cart> getCartByProductId(@PathVariable("productId") Integer productId,
                                                   @PathVariable("userId") Integer userId){
        Cart cart = cartService.getCardByProductIdAndUserId(productId,userId);
        if (cart == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cart,HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Cart> getCartDetailById(@PathVariable int id){
        Cart cart = cartService.getCartByCartId(id);
        if (cart == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(cart,HttpStatus.OK);
    }

    @PatchMapping("/update-quantity/{id}")
    public ResponseEntity<String> updateCart(@PathVariable Integer id, @RequestBody CartDTO cartDTO){
        Cart cart = cartService.getCartByCartId(id);
        if (cart == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        cartService.updateQuantityProduct(cartDTO.getQuantity(),id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addToCart(@RequestBody CartDTO cartDTO){
        if (cartDTO == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (cartDTO.getId() == null){
            cartService.addToCart(cartDTO);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }else {
            cartService.updateQuantityProduct(cartDTO.getQuantity(), cartDTO.getId());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteToCart(@PathVariable int id){
        Cart cart = cartService.getCartByCartId(id);
        if (cart == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        cartService.deleteCartByCartId(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
