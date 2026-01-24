package com.micro.product.repository;

import com.micro.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 商品数据访问接口
 */
public interface ProductRepository extends JpaRepository<Product, Long> {
}