package com.example.project_sprint2.repository.order;

import com.example.project_sprint2.dto.IOrderDetailDTO;
import com.example.project_sprint2.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {

    @Transactional
    @Modifying
    @Query(value = "insert into order_detail(order_detail_price,quantity,order_id,product_id)" +
            "values(:productPrice, :quantity, :orderId, :productId)",nativeQuery = true)
    void saveOrderDetail(@Param("productPrice") double productPrice,
                         @Param("quantity") int quantity,
                         @Param("orderId") int orderId,
                         @Param("productId") int productId);

    @Query(value = "select " +
            "order_detail.product_id as productId , " +
            "sum(order_detail.quantity)  as orderQuantity ," +
            "product.`name` as productName," +
            "product.`quantity` as productQuantity," +
            "product.price as productPrice," +
            "product.price_sale as productPriceSale," +
            "brand.`name` as brandName," +
            "category_detail.`name` as categoryDetailName," +
            "(select images.file_path from images where product_id = product.id limit 1) as images " +
            "from " +
            "order_detail " +
            "join product on product.id = order_detail.product_id " +
            "join brand on brand.id = product.brand_id " +
            "join category_detail on category_detail.id = product.category_detail_id " +
            "group by order_detail.product_id " +
            "order by orderQuantity desc " +
            "limit 6",nativeQuery = true)
    List<IOrderDetailDTO> getOrderDetail();

}
