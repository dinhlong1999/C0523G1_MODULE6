package com.example.project_sprint2.repository.order;

import com.example.project_sprint2.dto.IOrderDTO;
import com.example.project_sprint2.model.OrderTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

public interface IOrderRepository extends JpaRepository<OrderTable,Integer> {

    @Query(value = "select product.`name` as productName, order_table.date_buy as dateBuy,\n" +
            "(select images.file_path from images where product_id = product.id limit 1) as images,\n" +
            "order_detail.quantity as quantity, order_detail.order_detail_price as detailPrice\n" +
            "from order_table \n" +
            "join order_detail on order_detail.order_id = order_table.id\n" +
            "join `user` on `user`.id = order_table.user_id and `user`.id = :id\n" +
            "join product on product.id = order_detail.product_id " +
            "order by dateBuy desc",nativeQuery = true)
    List<IOrderDTO> getListOrderByUserId(@Param("id") Integer userId);

}
