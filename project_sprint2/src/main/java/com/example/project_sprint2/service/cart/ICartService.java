package com.example.project_sprint2.service.cart;

import com.example.project_sprint2.dto.ICartDetailDTO;

import java.util.List;

public interface ICartService {
    List<ICartDetailDTO> getAllCartByUserId(int id);
}
