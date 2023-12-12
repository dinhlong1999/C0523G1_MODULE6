package com.example.project_sprint2.repository.user;

import com.example.project_sprint2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User,Integer> {
    User getUserByAccount_Id(Integer id);
}
