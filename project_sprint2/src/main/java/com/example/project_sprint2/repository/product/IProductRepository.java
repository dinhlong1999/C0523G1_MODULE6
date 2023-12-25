package com.example.project_sprint2.repository.product;

import com.example.project_sprint2.dto.IProductDetailDTO;
import com.example.project_sprint2.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select product.id as productId, product.`name` as productName,product.price as productPrice," +
            "product.import_date as productImportDate, product.`description` as productDescription," +
            "product.quantity as productQuantity, product.price_sale as priceSale," +
            "category_detail.`name` as categoryDetailName, brand.`name` as brandName, product.favourite as favourite," +
            "max(images.file_path) as images from product " +
            "join category_detail on category_detail.id = product.category_detail_id " +
            "join category on category.id = category_detail.category_id and category.id = :id  " +
            "join brand on brand.id = product.brand_id " +
            "join images on images.product_id = product.id " +
            "where category_detail.`name` like :categoryDetailName and product.`name` like :productName " +
            "group by product_id order by product.import_date desc",nativeQuery = true)
    Page<IProductDetailDTO> findAllProduct(Pageable pageable, @Param("id") Integer id,
                                           @Param("categoryDetailName") String categoryDetailName,
                                           @Param("productName") String productName);

    @Query(value = "select product.id as productId, product.`name` as productName,product.price as productPrice," +
            "                        product.import_date as productImportDate," +
            "                        product.quantity as productQuantity, product.price_sale as priceSale," +
            "                       category_detail.`name` as categoryDetailName, brand.`name` as brandName,product.favourite as favourite," +
            "                      max(images.file_path) as images from product " +
            "                       join category_detail on category_detail.id = product.category_detail_id" +
            "                       join brand on brand.id = product.brand_id" +
            "                       join images on images.product_id = product.id" +
            "                       where datediff(CURDATE(),product.import_date) < 45" +
            "                       group by product_id" +
            "                       order by product.import_date desc ",nativeQuery = true)
    List<IProductDetailDTO> findAllNewProduct();

    @Query(value = "select product.id as productId, product.`name` as productName,product.price as productPrice," +
            "product.import_date as productImportDate, product.`description` as productDescription," +
            "product.quantity as productQuantity, product.price_sale as priceSale," +
            "category_detail.`name` as categoryDetailName, brand.`name` as brandName, product.favourite as favourite," +
            "max(images.file_path) as images from product " +
            "join category_detail on category_detail.id = product.category_detail_id " +
            "join category on category.id = category_detail.category_id   " +
            "join brand on brand.id = product.brand_id and brand.id = :id " +
            "join images on images.product_id = product.id  " +
            "where category_detail.`name` like :categoryDetailName and product.`name` like :productName " +
            "group by product_id order by product.import_date desc",nativeQuery = true)
    Page<IProductDetailDTO> findAllProductByBrand(Pageable pageable,@Param("id") int id,
                                                                    @Param("categoryDetailName") String categoryDetailName,
                                                                    @Param("productName") String productName);





}
