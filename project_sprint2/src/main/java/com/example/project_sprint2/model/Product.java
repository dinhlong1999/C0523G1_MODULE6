package com.example.project_sprint2.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private double price;

    @Column(nullable = false)
    private double priceSale;

    @Column(nullable = false)
    private int favourite;

    @Column(nullable = false,name = "import_date")
    private LocalDate  importDate;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Integer quantity;

    @Column(name = "is_deleted", nullable = false,columnDefinition = "bit(1) default 0")
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "category_detail_id", referencedColumnName = "id")
    private  CategoryDetail categoryDetail;

    @ManyToOne
    @JoinColumn(name = "brand_id",referencedColumnName = "id")
    private Brand brand;

    @OneToMany(mappedBy = "product")
    @JsonBackReference
    private List<Images> images;

    private String bicycleFrame; //khung

    private String bicycleFork; //phuộc

    private String handleBar;// Ghi đông


    private String saddle;// Yên


    private String rim; //vành


    private String tire; // lốp

    public Product() {
    }

    public Product(Integer id, String name, double price, double priceSale, int favourite, LocalDate importDate,
                   String description, Integer quantity, boolean isDeleted, CategoryDetail categoryDetail,
                   Brand brand, List<Images> images, String bicycleFrame, String bicycleFork, String handleBar,
                   String saddle, String rim, String tire) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.priceSale = priceSale;
        this.favourite = favourite;
        this.importDate = importDate;
        this.description = description;
        this.quantity = quantity;
        this.isDeleted = isDeleted;
        this.categoryDetail = categoryDetail;
        this.brand = brand;
        this.images = images;
        this.bicycleFrame = bicycleFrame;
        this.bicycleFork = bicycleFork;
        this.handleBar = handleBar;
        this.saddle = saddle;
        this.rim = rim;
        this.tire = tire;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public LocalDate getImportDate() {
        return importDate;
    }

    public void setImportDate(LocalDate importDate) {
        this.importDate = importDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public CategoryDetail getCategoryDetail() {
        return categoryDetail;
    }

    public void setCategoryDetail(CategoryDetail categoryDetail) {
        this.categoryDetail = categoryDetail;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public List<Images> getImages() {
        return images;
    }

    public void setImages(List<Images> images) {
        this.images = images;
    }

    public double getPriceSale() {
        return priceSale;
    }

    public void setPriceSale(double priceSale) {
        this.priceSale = priceSale;
    }

    public int getFavourite() {
        return favourite;
    }

    public void setFavourite(int favourite) {
        this.favourite = favourite;
    }

    public String getBicycleFrame() {
        return bicycleFrame;
    }

    public void setBicycleFrame(String bicycleFrame) {
        this.bicycleFrame = bicycleFrame;
    }

    public String getBicycleFork() {
        return bicycleFork;
    }

    public void setBicycleFork(String bicycleFork) {
        this.bicycleFork = bicycleFork;
    }

    public String getHandleBar() {
        return handleBar;
    }

    public void setHandleBar(String handleBar) {
        this.handleBar = handleBar;
    }

    public String getSaddle() {
        return saddle;
    }

    public void setSaddle(String saddle) {
        this.saddle = saddle;
    }

    public String getRim() {
        return rim;
    }

    public void setRim(String rim) {
        this.rim = rim;
    }

    public String getTire() {
        return tire;
    }

    public void setTire(String tire) {
        this.tire = tire;
    }
}
