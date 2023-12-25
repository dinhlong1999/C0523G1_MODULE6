package com.example.project_sprint2.dto;

public class OrderDetailDTO {
    private Integer productId;
    private Integer userId;
    private Integer quantity;
    private double priceSale;
    private Integer orderId;

    public OrderDetailDTO() {
    }

    public OrderDetailDTO(Integer productId, Integer userId, Integer quantity, double priceSale, Integer orderId) {
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
        this.priceSale = priceSale;
        this.orderId = orderId;
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

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public double getPriceSale() {
        return priceSale;
    }

    public void setPriceSale(double priceSale) {
        this.priceSale = priceSale;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }
}
