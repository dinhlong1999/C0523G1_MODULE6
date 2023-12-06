package com.example.project_sprint2.service;

import com.example.project_sprint2.dto.JwtResponseUserDetail;
import com.example.project_sprint2.model.Account;
import com.example.project_sprint2.model.Role;
import com.example.project_sprint2.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountService implements IAccountService{

    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepository.findAccountByUserName(username);
        if (account == null){
            throw new UsernameNotFoundException("Username or password is wrong");
        }
        List<GrantedAuthority> grantList = new ArrayList<>();
        for (Role role: account.getRoles()) {
            grantList.add(new SimpleGrantedAuthority(role.getName()));
        }
        UserDetails userDetails = new JwtResponseUserDetail(
                account.getUserName(),
                account.getPassword(),
                grantList);
        return userDetails;
    }


    @Override
    public Account getAccountByUsername(String userName) {
        return accountRepository.findAccountByUserName(userName);
    }
}
