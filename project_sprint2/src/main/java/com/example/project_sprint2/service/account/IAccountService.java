package com.example.project_sprint2.service.account;

import com.example.project_sprint2.model.Account;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IAccountService extends UserDetailsService {

    Account getAccountByUsername(String userName);


}
