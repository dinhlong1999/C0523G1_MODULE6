package com.example.project_sprint2.repository;

import java.util.HashMap;
import java.util.Map;

public class Test {
    public static void main(String[] args) {
        int [] arrayFirst = {1,4,4,8,9,2};
        int [] arrSecond = {1,7,8,2};
        Map<Integer,Integer> map = new HashMap<>();
        Map<Integer,Integer> resultMap = new HashMap<>();

        for (int i = 0; i <arrayFirst.length ; i++) {
            map.put(arrayFirst[i],1);
        }
        for (int i = 0; i < arrSecond.length; i++) {
            if (map.containsKey(arrSecond[i])) {
                resultMap.put(arrSecond[i],1);
            }
        }
        for (Integer key: resultMap.keySet()) {
            System.out.print(key);
        }
    }



}
