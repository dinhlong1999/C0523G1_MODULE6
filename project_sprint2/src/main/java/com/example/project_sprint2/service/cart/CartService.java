package com.example.project_sprint2.service.cart;

import com.example.project_sprint2.dto.ICartDetailDTO;
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
}
