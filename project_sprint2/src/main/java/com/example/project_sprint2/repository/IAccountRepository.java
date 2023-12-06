package com.example.project_sprint2.repository;

import com.example.project_sprint2.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRepository extends JpaRepository<Account, Integer> {
    Account findAccountByUserName(String username);


}
