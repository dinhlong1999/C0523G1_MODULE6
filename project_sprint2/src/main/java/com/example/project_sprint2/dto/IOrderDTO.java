package com.example.project_sprint2.dto;

import java.time.LocalDateTime;

public interface IOrderDTO {
    String getProductName();
    LocalDateTime getDateBuy();
    String getImages();
    Integer getQuantity();
    Double getDetailPrice();
}
