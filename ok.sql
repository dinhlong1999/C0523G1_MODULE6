SELECT * FROM m6_project_sprint2.order_table;

select product.*, order_detail.quantity as so_luong
from product 
join order_detail on order_detail.product_id = product.id
order by so_luong desc
limit 10;

select product.id as productId, product.`name` as productName,product.price as productPrice,
                                  product.import_date as productImportDate,
                                  product.quantity as productQuantity, product.price_sale as priceSale,
								  category_detail.`name` as categoryDetailName, brand.`name` as brandName,product.favourite as favourite,
                                  order_detail.quantity as orderQuantity,
                                  max(images.file_path) as images from product 
                                  join order_detail on order_detail.product_id = product.id
                                  join category_detail on category_detail.id = product.category_detail_id
                                  join brand on brand.id = product.brand_id
                                  join images on images.product_id = product.id
								  group by images.product_id, order_detail.product_id
                                  order by order_detail.quantity  desc
                                  limit 10;
	SELECT
    product.id AS productId,
    product.`name` AS productName,
    product.price AS productPrice,
    product.import_date AS productImportDate,
    product.quantity AS productQuantity,
    product.price_sale AS priceSale,
    category_detail.`name` AS categoryDetailName,
    brand.`name` AS brandName,
    product.favourite AS favourite,
   order_detail.quantity AS orderQuantity,
   count(order_detail.quantity) ,
    MAX(images.file_path) AS images
FROM
    product
JOIN
    order_detail ON order_detail.product_id = product.id
JOIN
    category_detail ON category_detail.id = product.category_detail_id
JOIN
    brand ON brand.id = product.brand_id
JOIN
    images ON images.product_id = product.id
GROUP BY
    order_detail.quantity, images.product_id
ORDER BY
    orderQuantity DESC
LIMIT 10;



