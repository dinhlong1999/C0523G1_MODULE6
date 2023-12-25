package com.example.project_sprint2.dto;

public class CartDTO {
    private Integer id;
    private Integer quantity;
    private Integer productId;
    private Integer userId;

    public CartDTO(Integer id, Integer quantity, Integer productId, Integer userId) {
        this.id = id;
        this.quantity = quantity;
        this.productId = productId;
        this.userId = userId;
    }

    public CartDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
