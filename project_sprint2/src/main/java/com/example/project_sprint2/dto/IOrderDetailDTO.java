package com.example.project_sprint2.dto;

public interface IOrderDetailDTO {
    Integer getProductId();
    Integer getOrderQuantity();
    String getProductName();
    Integer getProductQuantity();
    Double getProductPrice();
    Double getProductPriceSale();
    String getBrandName();
    String getCategoryDetailName();

    String getImages();
}
