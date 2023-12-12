package com.example.project_sprint2.dto;

import com.example.project_sprint2.model.Images;

import java.time.LocalDate;
import java.util.List;

public interface IProductDetailDTO {
    Integer getProductId();
    String getProductName();
    double getProductPrice();
    LocalDate getProductImportDate();
    String getProductDescription();
    Integer getProductQuantity();
    String getCategoryDetailName();
    String getBrandName();
    String getImages();
    double getPriceSale();
    int getFavourite();

}
