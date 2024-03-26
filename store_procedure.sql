select id,quantity_book from order_detail where product_id = 1 and status_id = 1 order by date_start;

delimiter // 
create procedure import_product(id_product int, quantity int)
begin
declare done int default false;
declare order_id int;
declare book int;
declare update_quantity int ;
-- Mở 1 con trỏ source_cursor để lưu kết quả của mổi record
declare source_cursor cursor for select id, quantity_book from order_detail where product_id = id_product and status_id = 1 order by date_start;
declare continue handler for not found set done = true;
-- Lấy tồn kho của sản phẩm
select inventory into update_quantity from product where id = id_product;
-- Cập nhật vào biến update_quantity
set update_quantity = update_quantity + quantity;


open source_cursor;
read_loop: LOOP
fetch source_cursor into order_id, book;
IF done then 
	leave read_loop;
    end IF;
    
	if book <= update_quantity then
	update order_detail set status_id = 2, date_allocation = now() where id = order_id;
    set update_quantity = update_quantity - book;
else 
iterate read_loop;
end if;
  IF update_quantity <= 0 THEN
            LEAVE read_loop;
        END IF;
end loop;
update product set inventory = update_quantity where id = id_product;
close source_cursor;
end//
delimiter ;

call import_product(1,4);

select inventory from product where id = 1;
call countProduct(@total);
select @total;



 
    
    
    
    