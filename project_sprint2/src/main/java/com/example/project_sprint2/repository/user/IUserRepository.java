package com.example.project_sprint2.repository.user;

import com.example.project_sprint2.dto.IManagerDTO;
import com.example.project_sprint2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IUserRepository extends JpaRepository<User,Integer> {
    User getUserByAccount_Id(Integer id);

    @Query(value = "select distinct `user`.`name` as userName, `user`.phone_number as phoneNumber, order_table.date_buy as dateBuy from `user` " +
            "join order_table on order_table.user_id = `user`.id " +
            "where year(date_buy) = :yearBuy", nativeQuery = true)
    List<IManagerDTO> getListUserBought(@Param("yearBuy") Integer yearBuy);
}
