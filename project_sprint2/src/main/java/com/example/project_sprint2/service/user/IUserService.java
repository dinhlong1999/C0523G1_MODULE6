package com.example.project_sprint2.service.user;

import com.example.project_sprint2.dto.IManagerDTO;
import com.example.project_sprint2.model.User;

import java.util.List;

public interface IUserService {
    User getUserByAccountId(Integer id);
    List<IManagerDTO> getListUserBuy(Integer yearBuy);
}
