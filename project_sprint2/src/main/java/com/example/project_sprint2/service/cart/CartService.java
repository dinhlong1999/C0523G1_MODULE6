package com.example.project_sprint2.service.cart;

import com.example.project_sprint2.dto.CartDTO;
import com.example.project_sprint2.dto.ICartDetailDTO;
import com.example.project_sprint2.model.Cart;
import com.example.project_sprint2.repository.cart.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {

    @Autowired
    private ICartRepository cartRepository;
    @Override
    public List<ICartDetailDTO> getAllCartByUserId(int id) {
        return cartRepository.getCartByUser_Id(id);
    }

    @Override
    public Cart getCardByProductIdAndUserId(Integer productId, Integer userId) {
        return cartRepository.getCartByProduct_IdAndUser_Id(productId,userId);
    }

    @Override
    public void addToCart(CartDTO cartDTO) {
        cartRepository.addToCart(cartDTO.getQuantity(),cartDTO.getProductId(),cartDTO.getUserId());
    }

    @Override
    public void updateQuantityProduct(Integer quantity, Integer cartId) {
        cartRepository.updateQuantityProduct(quantity,cartId);
    }

    @Override
    public void deleteCartByCartId(Integer id) {
        cartRepository.deleteById(id);
    }

    @Override
    public Cart getCartByCartId(Integer id) {
        return cartRepository.getCartByCartId(id);
    }

    @Override
    public void deleteCartByUser_Id(Integer userId) {
        cartRepository.deleteCartByUser_Id(userId);
    }


}
