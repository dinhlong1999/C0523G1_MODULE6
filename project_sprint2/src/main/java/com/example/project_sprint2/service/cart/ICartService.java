package com.example.project_sprint2.service.cart;

import com.example.project_sprint2.dto.CartDTO;
import com.example.project_sprint2.dto.ICartDetailDTO;
import com.example.project_sprint2.model.Cart;

import java.util.List;

public interface ICartService {
    List<ICartDetailDTO> getAllCartByUserId(int id);
    Cart  getCardByProductIdAndUserId(Integer productId, Integer userId);

    void addToCart(CartDTO cartDTO);
    void updateQuantityProduct(Integer quantity, Integer cartId);

    void deleteCartByCartId(Integer id);

    Cart getCartByCartId(Integer id);
    void deleteCartByUser_Id(Integer userId);

}
