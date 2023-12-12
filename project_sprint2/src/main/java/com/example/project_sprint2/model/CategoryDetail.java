package com.example.project_sprint2.model;

import javax.persistence.*;

@Entity
public class CategoryDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(name = "is_deleted", columnDefinition = "bit(1) default 0",nullable = false)
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "category_id",referencedColumnName = "id")
    private Category category;

    public CategoryDetail() {
    }

    public CategoryDetail(Integer id, String name, boolean isDeleted, Category category) {
        this.id = id;
        this.name = name;
        this.isDeleted = isDeleted;
        this.category = category;
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

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
