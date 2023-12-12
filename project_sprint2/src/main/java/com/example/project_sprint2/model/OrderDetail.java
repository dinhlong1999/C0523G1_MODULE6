package com.example.project_sprint2.model;

import javax.persistence.*;


@Entity
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Integer quantity;

    @Column( name = "order_detail_price" ,nullable = false)
    private Double orderDetailPrice;

    @Column(name = "is_deleted", nullable = false, columnDefinition = "bit(1) default 0")
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id", nullable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "id", nullable = false)
    private OrderTable orderTable;

    public OrderDetail() {
    }

    public OrderDetail(Integer id, Integer quantity, Double orderDetailPrice, boolean isDeleted, Product product, OrderTable orderTable) {
        this.id = id;
        this.quantity = quantity;
        this.orderDetailPrice = orderDetailPrice;
        this.isDeleted = isDeleted;
        this.product = product;
        this.orderTable = orderTable;
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

    public Double getOrderDetailPrice() {
        return orderDetailPrice;
    }

    public void setOrderDetailPrice(Double orderDetailPrice) {
        this.orderDetailPrice = orderDetailPrice;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public OrderTable getOrderTable() {
        return orderTable;
    }

    public void setOrderTable(OrderTable orderTable) {
        this.orderTable = orderTable;
    }
}
