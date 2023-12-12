package com.example.project_sprint2.service.user;

import com.example.project_sprint2.model.User;
import com.example.project_sprint2.repository.user.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public User getUserByAccountId(Integer id) {
        return userRepository.getUserByAccount_Id(id);
    }
}
