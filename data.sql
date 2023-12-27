insert into `account` (user_name,`password`)
values ("dinhlong1110","$2a$12$pPinUoNvEm3NXaDsBPD0lu2JFEiCubE3/./9rs6UtMGoDgXcSdE/a"),
("nhavan0305","$2a$12$pPinUoNvEm3NXaDsBPD0lu2JFEiCubE3/./9rs6UtMGoDgXcSdE/a"),
("dinhlan0511","$2a$12$pPinUoNvEm3NXaDsBPD0lu2JFEiCubE3/./9rs6UtMGoDgXcSdE/a"),
("honghanh3110","$2a$12$pPinUoNvEm3NXaDsBPD0lu2JFEiCubE3/./9rs6UtMGoDgXcSdE/a");

insert into `role`(`name`)
values ("ROLE_ADMIN"),
("ROLE_USER");

insert into `category`(`name`)
values ("Xe đạp"),("Phụ kiện"),("Áo quần");

insert into `category_detail`(`name`,category_id)
values ("Xe đạp đua",1), ("Xe đạp địa hình",1),("Xe đạp đường phố",1),("Đèn Trước & Sau",2),("Bơm & Túi treo xe",2),("Phụ kiện fixed gear",2),("Mũ bảo hiểm",3),("Kính",3),("Áo",3),("Quần",3);


insert into `brand`(`name`,manufacturer)
values("Giant","Taiwan"),("Liv","Taiwan"),("Galaxy","Taiwan"),("Trek","Taiwan"),("Twitter","Taiwan");

insert into `product`(`description`, `name`, price, quantity, category_detail_id,brand_id,import_date,price_sale,favourite,rim,saddle,tire,bicycle_fork,bicycle_frame,handle_bar)
values ("Xe đạp địa hình GIANT RINCON 2 29 phù hợp với những người mới làm quen với xe đạp địa hình MTB có nhiều tốc độ, phù hợp cho những ai có nhu cầu thể dục thể thao hằng ngày khi thường xuyên đi trên những cung đường ít gồ ghề hoặc đường phố thông thường. Xe đạp địa hình GIANT RINCON 2 29 là mẫu xe đạp MTB với phiên bản quốc tế, có mức giá tầm trung. Sở nhiều gam màu thời thượng cùng vẻ ngoài nhỏ gọn, thiết kế mạnh mẽ và chắc chắn với những linh kiện có độ bền cao.Khung sườn xe nhẹ, chịu lực tốt Khung sườn được gia công từ hợp kim nhôm, mang đến trọng lượng tổng thể của xe nhẹ nhàng và khả năng chịu tải lớn, người dùng có thể chở thêm hành lý khi tham gia các chuyến đi dài ngày. Đồng thời, khung xe được thiết kế trẻ trung cùng vẻ ngoài sáng bóng nhờ lớp sơn tĩnh điện bền màu.",
"Xe đạp địa hình GIANT RINCON 2 29",10690000,10,2,1,"2023-10-11",7790000,4,"Giant 29″, aluminum, double wall","Giant custom","29 x 2.1","SR Suntour XCE28 29","ALUXX-Grade Aluminum","Giant alloy"),
("Bạn là một người yêu thích thể thao, có niềm đam mê với môn đạp xe. Bạn đang tìm kiếm cho mình một con xe hiệu suất cao, bền và thiết kế thanh lịch thời thượng vừa có thể sử dụng để đi làm, đi chơi hay đi dạo phố...Xe đạp Touring GIANT ESCAPE 1 DISC 2022 sẽ là một lựa chọn tuyệt vời đáng để bạn cân nhắc.Xe đạp Touring GIANT ESCAPE 1 DISC 2022 gây ấn tượng với cấu hình cao cùng thiết kế mang phong cách hiện đại, cá tính, thể thao. Mẫu xe đạp được nhiều bạn ưa chuộng và lựa chọn làm phương tiện di chuyển đi làm, dạo phố hay thể dục thể thao,… vừa rèn luyện thể chất vừa thể hiện được sức trẻ năng động, khỏe khoắn.Xe đạp Touring GIANT ESCAPE 1 DISC 2022  sử dụng chất liệu nhôm Aluxx-Grade Aluminum cao cấp với ưu điểm độ bền cao, chống ăn mòn và gỉ sét nhưng vẫn sở hữu trọng lượng nhẹ ấn tượng. Thiết kế khung xe tạo tư thế ngồi thẳng đứng mang lại cảm giác thoải mái, tốt cho xương cột sống. Các mối hàn trên khung xe cũng được hàn chắc chắn, gia công tỉ mỉ. Các chi tiết lắp ráp khung cũng được trải qua quá trình kiểm nghiệm độ cứng, khả năng va đập tốt giúp bạn an tâm khi di chuyển.",
"Xe đạp đường phố GIANT ESCAPE 1",13150000,10,3,1,"2023-10-01",11990000,4,"Giant double wall aluminum","Giant Sport","Giant S-X2, puncture protect, 700x38c","Advanced-Grade Composite, composite OverDrive steerer, disc","ALUXX-Grade Aluminum, disc","Giant Sport XC, 31.8mm"),
("Xe đạp đua GIANT SCR-D 2023 có thiết kế chạy dây âm khung toàn xe, gọn gàng, sạch sẽ, mang tính thẩm mỹ cao, dễ dàng bảo dưỡng, rửa xe. Vỏ dây phanh, dây đề chất lượng cao, đảm bảo độ chuẩn khi chuyển tốc độ, tính năng vượt trội.Khung xe hợp kim nhôm GIANT ALUXX giúp hỗ trợ gia tăng khả năng thích ứng va đập, phù hợp với nhu cầu di chuyển linh động và nhiều loại hình hoạt động thể thao.Vành và bánh xe cỡ 700x23C là loại thông dụng của dòng xe road.GIANT SCR-D 2023 có yên xe mềm mại, không gây chèn ép mạch máu, giúp người lái thoải mái đạp xe đường dài mà không bị đau nhức. Bộ phận này được nâng đỡ bởi cốt yên D-Fuse cứng cáp không bị xoay ngang hay tụt xuống, thiết kế đặc biệt giúp giảm rung chấn khi di chuyển trên những đoạn đường gồ ghề.Ghi đông Giant 31.8mm được chế tạo theo dạng tay cong dáng sừng Trâu khá gọn gàng , cổ nắm bẹt giảm bớt áp lực ở cổ tay và bàn tay, tránh tình trạng ê mỏi khi đạp xe đường dài. Càng trước được làm bằng hợp kim nhôm cao cấp Aluxx hỗ trợ giảm chấn, ổn định, hỗ trợ cân bằng lái trên những đoạn đường gồ ghề. Người đạp xe thoải mái khi đi trên địa hình với lực nén hiệu quả và ít lực tác động truyền tới tay lái.",
"Xe đạp đua GIANT SCR-D 2023",18890000,10,1,1,"2023-09-01",17500000,4,"Hợp kim nhôm 2 lớp","Giant","700x23C","Phuộc Carbon","Hợp kim nhôm GIANT ALuxx","Hợp kim nhôm"),
("Bạn là một người đam mê thể thao, là một tín đồ đam mê xe đạp và môn thể thao đạp xe này. Bạn muốn lựa chọn cho mình một chiếc xe đạp bền, hiệu suất cao và có thiết kế hiện đại để vừa có thể đi chơi, đi làm, thoả sức khám phá các cung đường thì Xe đạp địa hình GIANT FATHOM 2023 là một lựa chọn đáng để bạn cân nhắc.Xe đạp địa hình GIANT FATHOM 2023 sở hữu thiết kế vô cùng ấn tượng với kiểu dáng thể thao, khỏe khoắn thích hợp với người dùng có nhu cầu đi lại hằng ngày, đi phượt, leo núi hay đạp xe thể thao rèn luyện sức khỏe. Mẫu xe ra đời cùng với cùng với bộ khung nhôm, hệ thống truyền động 10 tốc độ, chắc chắn sẽ đem đến trải nghiệm chinh phục địa hình đầy thú vị.GIANT FATHOM 2023 sở hữu bộ khung sườn được cấu tạo từ chất liệu hợp kim nhôm ALUXX-Grade Aluminum chắc chắn, bền bỉ, chống chịu lại mọi va đập trong những quãng đường dài, những cung đường gập ghềnh hiểm trở. Ngoài ra, bên ngoài khung sườn được phủ thêm lớp sơn tĩnh điện có khả năng chống ăn mòn hiệu quả, để tăng tính thẩm mỹ và độ bền cho xe.Phuộc khí CREST 34 được làm từ chất liệu hợp kim trên mẫu xe đạp địa hình Giant này cho phép hấp thụ xung lực tốt giúp bạn di chuyển ổn định trên các địa hình gồ ghề, sỏi đá.",
"Xe đạp địa hình GIANT FATHOM 2023",21290000,10,2,1,"2023-12-01",20000000,4,"Vuelta GE30","Velo VL1353","Kenda K1227 27.5x2.4","Giant CREST 34","Hợp kim nhôm GIANT","Hợp kim nhôm"),
("Đặc điểm nổi bật của Xe đạp đua GIANT SCR 2 2023
ROAD GIANT SCR 2 2023 là sản phẩm mới nhất của dòng xe đạp đua đường trường hãng xe GIANT danh tiếng. Dòng xe SCR của hãng Giant đã trở lên quá quen thuộc với người chơi xe từ nhiều năm trước, bởi đây là dòng xe thuộc phân khúc tầm trung có kiểu dáng đẹp và cấu hình đáp ứng được đại đa số người dùng.
ROAD GIANT SCR 2 2023 có Khung sườn làm từ ALUXX-Grade Aluminum siêu nhẹ, siêu bền, giúp hỗ trợ gia tăng khả năng thích ứng va đập, phù hợp với nhu cầu di chuyển linh động và nhiều loại hình hoạt động thể thao.Bánh xe của xe đạp GIANT SCR 2 nhỏ giảm ma sát bề mặt đường giúp đạt tốc độ tối đa.",
"Xe đạp đua GIANT SCR 2 2023",17250000,10,1,1,"2023-11-11",16000000,4,"Alloy","Selle Royal saddle","Giant S-R4, front and rear, 700x25c","	Alloy, OverDrive steerer","ALUXX-Grade Aluminum","Alloy drop"),
("Điểm nổi bật của Xe đạp địa hình LIV CATE 2 2022
Tại sao khi nhắc đến các dòng xe đạp leo núi thì người ta thường liên tưởng đến những người đàn ông mạnh mẽ, cơ bắp cuồn cuộn thôi nhỉ? Các cô gái cũng có xe đạp leo núi của riêng mình chứ. LIV CATE 2 2022 là một trong những mẫu xe đạp địa hình LIV thuộc hãng xe đạp thể thao GIANT mới ra mắt cuối năm 2021, được thiết kế với kiểu dáng được mô phỏng theo đường cong quyến rũ của người phụ nữ. Xe đạp LIV CATE 2 2022 là dòng xe đạp thể thao địa hình tầm trung dành cho nữ, được thiết kế hầm hố với khung sườn thấp để chị em phụ nữ có thể dễ dàng sử dụng, đồng thời xe được trang bị những linh kiện có độ bền cao cùng bộ truyền động SHIMANO ALTUS 27 tốc độ, kết hợp hệ thống phanh đĩa dầu tektro mang lại sự an toàn khi leo đèo đổ dốc.
Toàn bộ xe được thiết kế theo kiểu dáng hình trụ đứng chắc chắn, lốp xe với tiết diện lớn và nhiều gai giúp tăng cường độ bám và độ ma sát với mặt đường.
","Xe đạp địa hình LIV CATE 2",14900000,10,2,2,"2023-10-01",13000000,4,"Hợp kim nhôm 2 lớp","Liv Sport","26X1.95, 27TPI","Nhôm có khóa hành trình","Hợp kim nhôm GIANT ALUXX Liv 26","Hợp kim nhôm 31.8mm"),
("Điểm nổi bật của Xe đạp touring LIV ALIGHT 2 2023
 Liv Alight 2 2023 là dòng xe đạp đường phố tầm trung dành cho nữ giới đi trong thành phố, với thiết kế đơn giản, nữ tính, các linh kiện chất lượng sẽ mang lại trải nghiệm tốt khi đạp.
 Phiên bản LIV ALIGHT 2 2023 thiết kế gọn gàng, chắc chắn, thẩm mỹ cao với những linh kiện có độ bền cao, phù hợp với những ai có nhu cầu thể dục thể thao hằng ngày hoặc dùng để đi lại trên những con đường thành phố.
 Khung sườn được làm bằng Hợp kim nhôm Giant siêu nhẹ, bền, chắc chắn, thiết kế gióng ngang thấp giúp dễ dàng điều khiển xe trên các cung đường khác nhau.Hệ thống dây phanh đi âm sườn mang lại thẫm mỹ cao cho xe. Đặc biệt, Thương hiệu Liv đã sản xuất thêm cỡ M để đa dạng sự lựa chọn dành cho phái nữ hiện nay."
 ,"Xe đạp đường phố LIV ALIGHT 2 2023",10490000,10,3,2,"2023-10-01",8800000,4,"Hợp kim nhôm","Lady","GIANT S-X3(GI001) 700X35C","Thép","Hợp kim nhôm GIANT","Hợp kim nhôm"),
("Tại sao nên chọn xe LIV MEME 2 2023?
Bạn là một người đam mê thể thao, là một tín đồ đam mê xe đạp và môn thể thao đạp xe này. Bạn muốn lựa chọn cho mình một chiếc xe đạp bền, hiệu suất cao và có thiết kế nhẹ nhàng, hiện đại để vừa có thể đi chơi, đi làm, thoả sức khám phá các cung đường thì Xe đạp địa hình LIV MEME 2 2023 là một lựa chọn đáng để bạn cân nhắc.
Điểm nổi bật của Xe đạp địa hình LIV MEME 2 2023
Tại sao khi nhắc đến các dòng xe đạp leo núi thì người ta thường liên tưởng đến những người đàn ông mạnh mẽ, cơ bắp cuồn cuộn thôi nhỉ? Còn chị em thì sao? Xe đạp LIV MEME 2 2023 được thiết kế dành riêng cho chị em phụ nữ với khung Nhôm Liv siêu nhẹ với kiểu dáng được mô phỏng theo đường cong quyến rũ của người phụ nữ.
","Xe đạp địa hình LIV MEME 2 2023", 9190000,10,2,2,"2023-12-05",8700000,4,"Hợp kim nhôm hai lớp","	Selle Royal","Kenda 26x1.95","Phuộc lò xo hợp kim nhôm","Nhôm Liv 26","Nhôm 31.8mm"),
("Điểm nổi bật của Xe đạp Touring LIV ALIGHT 2 DD D 2022
Xe đạp Touring LIV ALIGHT 2 DD D 2022 là dòng xe đạp thể thao dành cho nữ với thiết kế năng động, trẻ trung, gam màu thời trang lôi cuốn. LIV ALIGHT 2 DD D 2022 mang những ưu điểm  như thân nhỏ, gọn gàng và dễ điều khiển, khả năng vận hành tốt trên cả cung đường thành phố hay những đường mòn, cùng nhiều công nghệ tiên tiến được áp dụng trên xe.
Khung xe được làm bằng Nhôm với công nghệ Aluxx -Grade Aluminium độc quyền của Giant, trọng lượng siệu nhẹ nhưng vẫn đảm bảo sự chắc chắn, đồ bền cao. Ngoài ra, khung được phủ một lớp sơn bóng giúp hạn chế ăn mòn, gỉ sắt bởi các tác nhân bên ngoài môi trường. 
","Xe đạp đường phố LIV ALIGHT 2",12580000,10,3,2,"2023-12-01",11000000,4,"Giant GX Disc wheelset","Liv Sport Comfort","Giant S-X2, puncture protect, 700x38c","hợp kim, đĩa","ALUXX-Lớp nhôm, đĩa","Giant Sport XC, 31.8 XS: 60cm, S: 60cm, M: 64cm"),
("Điểm nổi bật của Xe đạp Touring LIV THRIVE 2 2023
Xe đạp Touring LIV THRIVE 2 2023  là dòng xe đạp thể thao thành phố mẫu mới nhất hiện nay của LIV thuộc hãng xe đạp Giant, Liv là nhãn hiệu xe đạp thể thao trực thuộc Giant Manufacturing dành riêng cho phái nữ.
Tuy nhiên, với mẫu xe đạp Touring LIV THRIVE 2 2023 lần này lại mang đậm phong cách thể thao đường phố với màu sắc nữ tính, kiểu dáng đơn giãn, xe được trang bị bộ truyền động cao cấp SHIMANO SORA 2*9 tốc độ.
Khung sườn LIV THRIVE 2 2023 được làm bằng nhôm với công nghệ độc quyền ALUXX của Giant đảm bảo cho sản phẩm sự vững chắc và độ bền cao nhưng vẫn giữ được trọng lượng siêu nhẹ cho dòng xe này.
Bên cạnh đó hệ thống dây phanh dây đề cũng được nhà sản xuất đi âm sườn tinh tế mang lại sự gọn gàng cũng giá trị thẩm mỹ cho xe.
","Xe đạp đường phố LIV THRIVE 2 2023",22150000,10,3,2,"2023-10-31",21900000,4,"Vành xe/Rims:Giant SX-2 Disc Wheel","Yên xe Liv ErgoMax","Lốp xe/Tires:Maxxis Recepter 60tpi 700X40C","Advanced Grade Composite","ALUXX-SL Grade Aluminum","Hợp kim nhôm"),
("Điểm nổi bật xe đạp touring GALAXY LP300 - Thắng V
GALAXY LP300 2020 là mẫu xe nhẹ nhàng, thanh thoát và tiện dụng, phù hợp để đạp xe tập thể thao, đi dạo phố hay đi du lịch, đường trường đều thích hợp. Thậm chí nếu lắp thêm bộ chắn bùn và baga, bạn cũng có thể làm phương tiện đi làm hoặc đi phượt đường dài rất tiện dụng.
Xe đạp đường phố GALAXY LP300 2020 phù hợp với các bạn học sinh sinh viên, đi thể dục, dạo phố,.. bởi xe được các bạn trẻ rất yêu thích và đánh giá là khá rẻ so với chất lượng của xe.
Toàn bộ xe được thiết kế tối ưu lực cản gió với tiết diện bề mặt dẹp và mỏng hơn dòng MTB nhưng vẫn đảm bảo độ chắc chắn và cứng cáp của xe, giúp giảm thiểu tối đa lực cản của không khí khi xe di chuyển trên đường bằng phẳng.Toàn bộ xe được thiết kế tối ưu lực cản gió với tiết diện bề mặt dẹp và mỏng hơn dòng MTB nhưng vẫn đảm bảo độ chắc chắn và cứng cáp của xe, giúp giảm thiểu tối đa lực cản của không khí khi xe di chuyển trên đường bằng phẳng.",
"Xe đạp đường phố GLX LP300 phanh cơ",6149000,10,3,3,"2023-05-05",4190000,4,"Nhôm 2 lớp Galaxy 32 lỗ đinh tán cường lực đầu chân tăm","Yên da Galaxy cao cấp","CST CZAR 700*28C","Thép cường lực","Khung nhôm Galaxy LP300","Galaxy"),
("Tại sao nên chọn xe đạp GALAXY?
Bạn là một người yêu thích thể thao và có đam mê với môn đạp xe. Bạn đang muốn tìm một chiếc xe hiệu suất, bền, nhẹ, có thiết kế tinh gọn để cùng mình chinh phục những cung đường mới. Xe đạp Touring Galaxy RL200 là một lựa chọn đáng để bạn cân nhắc.
Điểm nổi bật của xe đạp Touring Galaxy RL200
Xe đạp Touring Galaxy RL200 là dòng xe đạp thành phố mới được Galaxy ra mắt tới những người tiêu dùng. Với khả năng đem lại trải nghiệm tuyệt vời đối với quãng đường dài trong cung đường thành phố. Thiết kế khung thanh mảnh nhưng vô cùng chắc chắn và khỏe khoắn giúp cho những người chơi không cảm thấy những mệt mỏi khi đi xe này. Xe thích hợp với những người có chiều cao từ 1.50m tới 1.8m. Nam nữ đều có thể đi được xe.
Khung xe được làm từ chất liệu hợp kim nhôm 6061 rất nhẹ đây là vật liệu chuyên để chế tạo các vật dụng trên máy bay cho nên khung vừa chắc chắn, bền lại vừa siêu nhẹ giúp bạn có được khả năng khí động học tốt hơn đem lại tốc độ cao cho khả năng di chuyển tốt hơn.
","Xe đạp đường phố GALAXY RL200", 6490000,10,3,3,"2023-04-05",4490000,4,"Nhôm 2 lớp ALVAS","Yên thể thao cao cấp CALIFORNIA","	650b x 50c","Phuộc nhún lò xo CALIFORNIA","Khung hợp kim nhôm 6061","Nhôm CALIFORNIA"),
("Đặc điểm nổi bật của Xe đạp địa hình Galaxy TH19T
Xe đạp địa hình Galaxy TH19T là dòng xe đạp giá rẻ, phù hợp với các bạn học sinh - sinh viên hoặc nhân viên văn phòng nhu cầu thể dục thể thao hằng ngày khi thường xuyên đi trên những cung đường xấu hoặc đường đồi núi có độ dốc cao.
Khung được làm bằng chất liệu thép chịu lực với thiết kế theo hình dạng ống trụ tròn nhằm gia tăng độ cứng cáp khi di chuyển, kích thước khung size 15 thích hợp với chiều cao khoảng từ 1m50 đến 1m70.Bánh xe sử dụng vành hợp kim nhôm, lốp Chaoyang  24 X 1.95 nhiều gai giúp tăng độ bám khi đổ đèo và độ êm ái khi di chuyển trên những cung đường xấu.
","Xe đạp địa hình GLX TH19T",5100000,10,2,3,"2023-12-03",3590000,4,"Nhôm 2 lớp Galaxy 24 inch","Yên da Galaxy","Chaoyang 24*1.95","Hợp kim thép lò so giảm chấn hấp thụ lực sốc","Hợp kim thép","Hợp kim nhôm Galaxy"),
("Đặc điểm nổi bật của Xe đạp địa hình GLX MT16
Galaxy MT16 là một mẫu xe đạp thể thao địa hình giá rẻ mới, nổi bật với cấu hình vượt trội đi kèm bộ đề Shimano Tourney 21 tốc độ. Xe dành cho người có nhu cầu thể dục, đi lại hằng ngày, người có chiều cao từ 1.5m cho tới 1.8m. 
Khung xe được làm bằng chất liệu thép hợp kim carbon với độ cứng cáp khả năng chống lại những va đập tốt khả năng chống lại những biến dạng cao, thành ống dày, sơn tĩnh điện, đề can bên ngoài tinh tế,
Phuộc được làm bằng thép hợp kim giảm xóc tốt, đi xe êm thoải mái khi gặp ngoại vật.
","Xe đạp địa hình GLX MT16",4490000,10,2,3,"2023-05-05",3690000,4,"Hợp kim nhôm 2 lớp 26","Thép hợp kim cao cấp.","GALAXY","Thép hợp kim","Hợp kim thép carbon","Thép hợp kim tăng cường công nghệ sơn tĩnh điện chống xước."),
("Điểm nổi bật của Xe đạp GẤP GALAXY HK2
Bạn thích đạp xe nhưng chỉ dùng để đạp loanh quanh dạo phố, bạn thích dòng xe nhỏ gọn, thiết kế thời trang, mẫu mã đẹp, có thể chở thêm người phía sau, bạn muốn mua dòng xe mà nam hay nữ đều có thể đi được
Bạn thích dòng xe với thiết kế tiện lợi, có thể mang mang đi bất cứ đâu mà bạn muốn, có thể dùng để đi chơi, đi mua sắm, đi chợ, đi du lịch, có thể chở xe máy, bỏ lên ô tô mà không chiếm diện tích,... Xe đạp GẤP GALAXY HK2 là sự lựa chọn tuyệt vời dành cho bạn.
GALAXY HK2 là dòng xe đạp gấp du lịch, thời trang của hãng GALAXY - Thương hiệu xe đạp thể thao đến từ Trung Quốc, nổi tiếng với các dòng xe đạp thể thao giá rẻ, mẫu mã đẹp và đa dạng, phù hợp với phân khúc khách hàng muốn đầu tư với chi phí thấp.
","Xe đạp đường phố GLX HK2 - OD",5130000,10,3,3,"2023-01-05",3490000,4,"	Hợp kim nhôm Galaxy 20 inch","Yên da Galaxy cao cấp","Lốp CST 20x1.75inch","Hợp kim thép","Khung gấp, thép cường lực","Hợp kim nhôm"),
("Có nên đội mũ bảo hiểm khi sử dụng xe đạp?
Trong tất cả các bộ môn thể thao vận động việc gặp tai nạn là nổi ám ảnh của tất cả mọi người. Đối với đạp xe là một bộ môn hoạt động ngoài trời và di chuyển thường xuyên ngoài đường việc bảo vệ bản thân bằng những món đồ bảo hộ thực sự rất cần thiết.
Có nhiều khách hàng sẵn sàng bỏ ra vài chục triệu mua 1 chiếc xe đạp hay 1 chiếc xe máy nhưng lại đắn đo bỏ ra vài trăm nghìn hoặc vài triệu đồng mua 1 cái nón bảo hiểm đây là một thói quen ăn sâu vào rất nhiều người hiện nay. Xe đạp là phương tiện giúp bạn nâng cao sức khỏe vì vậy bạn hãy bảo vệ sức khỏe một cách đúng nhất bằng việc lựa chọn cho mình những món đồ bảo hộ xe đạp phù hợp, đặt biệt là MŨ BẢO HIỂM.
Điểm nổi bật của MŨ BẢO HIỂM xe đạp GIANT HN 01
MŨ BẢO HIỂM xe đạp GIANT HN 01 là một món đồ bảo hộ trong bộ môn xe đạp của hãng GIANT dùng để bảo vệ đầu trong những lúc không may tai nạn va đập đến vùng đầu. Giúp anh em tự tin di chuyển trên mọi cung đường đặt biệt với anh em đạp xe đua ở tốc độ cao hay anh em chơi xe MTB ở những địa hình đèo dốc, gồ ghề.
","Mũ bảo hiểm xe đạp GIANT HN 01",2500000,10,7,1,"2023-08-08",2000000,4,null,null,null,null,null,null),
("Có nên đội mũ bảo hiểm khi sử dụng xe đạp?
Trong tất cả các bộ môn thể thao vận động việc gặp tai nạn là nổi ám ảnh của tất cả mọi người. Đối với đạp xe là một bộ môn hoạt động ngoài trời và di chuyển thường xuyên ngoài đường việc bảo vệ bản thân bằng những món đồ bảo hộ thực sự rất cần thiết.
Có nhiều khách hàng sẵn sàng bỏ ra vài chục triệu mua 1 chiếc xe đạp hay 1 chiếc xe máy nhưng lại đắn đo bỏ ra vài trăm nghìn hoặc vài triệu đồng mua 1 cái nón bảo hiểm đây là một thói quen ăn sâu vào rất nhiều người hiện nay. Xe đạp là phương tiện giúp bạn nâng cao sức khỏe vì vậy bạn hãy bảo vệ sức khỏe một cách đúng nhất bằng việc lựa chọn cho mình những món đồ bảo hộ xe đạp phù hợp, đặt biệt là MŨ BẢO HIỂM.
Mũ bảo hiểm xe đạp GIANT G99 là dòng mũ bảo hiểm dành cho xe đạp đường trường, với thiết kế đẹp mắt, thoáng khí. Vỏ ngoài PC cứng cáp và EPS nhập khẩu, cấu tạo liền mạch, hấp thụ lực va đập, tăng độ bền, bảo vệ chống va chạm."
,"Mũ bảo hiểm xe đạp GIANT G99",1380000,10,3,1,"2023-09-08",1000000,4,null,null,null,null,null,null),
("Có nên đội mũ bảo hiểm khi sử dụng xe đạp?
Trong tất cả các bộ môn thể thao vận động việc gặp tai nạn là nổi ám ảnh của tất cả mọi người. Đối với đạp xe là một bộ môn hoạt động ngoài trời và di chuyển thường xuyên ngoài đường việc bảo vệ bản thân bằng những món đồ bảo hộ thực sự rất cần thiết.
Có nhiều khách hàng sẵn sàng bỏ ra vài chục triệu mua 1 chiếc xe đạp hay 1 chiếc xe máy nhưng lại đắn đo bỏ ra vài trăm nghìn hoặc vài triệu đồng mua 1 cái nón bảo hiểm đây là một thói quen ăn sâu vào rất nhiều người hiện nay
","Mũ bảo hiểm xe đạp GIANT GTS",1460000,10,7,1,"2023-12-06",1200000,4,null,null,null,null,null,null),
("Có nên đội mũ bảo hiểm khi sử dụng xe đạp?
Trong tất cả các bộ môn thể thao vận động việc gặp tai nạn là nổi ám ảnh của tất cả mọi người. Đối với đạp xe là một bộ môn hoạt động ngoài trời và di chuyển thường xuyên ngoài đường, việc bảo vệ bản thân bằng những món đồ bảo hộ thực sự rất cần thiết.
Có nhiều khách hàng sẵn sàng bỏ ra vài chục triệu mua 1 chiếc xe đạp hay 1 chiếc xe máy nhưng lại đắn đo bỏ ra vài trăm nghìn hoặc vài triệu đồng mua 1 cái nón bảo hiểm đây là một thói quen ăn sâu vào rất nhiều người hiện nay.
Xe đạp là phương tiện giúp bạn nâng cao sức khỏe vì vậy bạn hãy bảo vệ sức khỏe một cách đúng nhất bằng việc lựa chọn cho mình những món đồ bảo hộ xe đạp phù hợp, đặt biệt là MŨ BẢO HIỂM.
","Mũ bảo hiểm xe đạp GIANT X7",510000,10,7,1,"2023-10-08",450000,4,null,null,null,null,null,null);

insert into `images`(file_path,product_id)
values("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dia-hinh-giant-rincon-2-29.jpg?v=1697444223005",1),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dia-hinh-giant-rincon-2-29-2-f702b890-26f0-4c7d-98e3-2e89cf8b8da7.jpg?v=1697444451402",1),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dia-hinh-giant-rincon-2-29-1-998c27a9-0122-4a90-9ff9-89915c2d3864.jpg?v=1697444358885",1),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dia-hinh-giant-rincon-2-29-7.jpg?v=1697444198755",1),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-touring-giant-escape-1-disc-2022-s-ghi.jpg?v=1695431476931",2),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-touring-giant-escape-1-disc-2022-ghi.jpg?v=1695431491622",2),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-touring-giant-escape-1-disc-2022-5.jpg?v=1695431508855",2),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-touring-giant-escape-1-disc-2022-ghi-1-ba912ffe-1dda-49d2-a8be-d7b8892cb25c.jpg?v=1695431627854",2),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dua-giant-scr-d-2023-1.jpg?v=1691113733151",3),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dua-giant-scr-d-2023.jpg?v=1691113853982",3),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dua-giant-scr-d-2023-4.jpg?v=1691113757009",3),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dua-giant-scr-d-2023-3.jpg?v=1691113809706",3),
("https://bizweb.dktcdn.net/100/066/626/files/giant-2023-fathom-5.jpg?v=1691032337706",4),
("https://bizweb.dktcdn.net/100/066/626/files/giant-2023-fathom-1.jpg?v=1691032262342",4),
("https://bizweb.dktcdn.net/100/066/626/files/giant-2023-fathom-6.jpg?v=1691032509447",4),
("https://bizweb.dktcdn.net/100/066/626/files/giant-2023-fathom-2.jpg?v=1691032282390",4),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dua-giant-scr-2-2023.jpg?v=1693447785363",5),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dua-giant-scr-2-2023-1.jpg?v=1693447823050",5),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dua-giant-scr-2-2023-4.jpg?v=1693447850987",5),
("https://bizweb.dktcdn.net/100/066/626/files/khungxedua.jpg?v=1693447990666",5),
("https://bizweb.dktcdn.net/100/066/626/files/liv-cate-2-2022-11.jpg?v=1692067340792",6),
("https://bizweb.dktcdn.net/100/066/626/files/liv-cate-2-2022-10-733373bf-295a-47dd-be71-67588229ca02.jpg?v=1692067412765",6),
("https://bizweb.dktcdn.net/100/066/626/files/liv-cate-2-2022-9-b128af29-3a0d-47fa-834c-d3781d345c29.jpg?v=1692067452003",6),
("https://bizweb.dktcdn.net/100/066/626/files/liv-cate-2-2022-8-ce273c25-9a65-4954-a336-1579588d30e6.jpg?v=1692067471754",6),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-touring-liv-alight-2-2023.jpg?v=1672044412294",7),
("https://bizweb.dktcdn.net/100/066/626/files/2-xe-dap-touring-liv-alight-2-2023.jpg?v=1672044542250",7),
("https://bizweb.dktcdn.net/100/066/626/files/6-xe-dap-touring-liv-alight-2-2023.jpg?v=1672044724618",7),
("https://bizweb.dktcdn.net/100/066/626/files/7-xe-dap-touring-liv-alight-2-2023.jpg?v=1672044818451",7),
("https://bizweb.dktcdn.net/100/066/626/files/1-liv-2023-meme-2-4.jpg?v=1692063016816",8),
("https://bizweb.dktcdn.net/100/066/626/files/1-liv-2023-meme-2-1.jpg?v=1692062718388",8),
("https://bizweb.dktcdn.net/100/066/626/files/liv-meme-2-2023-4.png?v=1692062972433",8),
("https://bizweb.dktcdn.net/100/066/626/files/liv-meme-2-2023-3.png?v=1692063035084",8),
("https://bizweb.dktcdn.net/100/066/626/products/2-xe-dap-touring-liv-alight-2-dd-d-2022.jpg?v=1666081977750",9),
("https://bizweb.dktcdn.net/100/066/626/files/3-xe-dap-touring-liv-alight-2-dd-d-2022.jpg?v=1666086144461",9),
("https://bizweb.dktcdn.net/100/066/626/files/4-xe-dap-touring-liv-alight-2-dd-d-2022.jpg?v=1666086119098",9),
("https://bizweb.dktcdn.net/100/066/626/files/9-xe-dap-touring-liv-alight-2-dd-d-2022.jpg?v=1666086499743",9),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-touring-liv-thrive-2-2023.jpg?v=1699945106006",10),
("https://bizweb.dktcdn.net/100/066/626/files/2-xe-dap-touring-liv-thrive-2-2022-dcdf57be-0135-4778-b786-c822411b73a4.jpg?v=1664940545118",10),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-touring-liv-thrive-2-2023-jpg-1.jpg?v=1699945116439",10),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-touring-liv-thrive-2-2023-jpg-3.jpg?v=1699945180350",10),
("https://bizweb.dktcdn.net/100/066/626/files/galaxy-lp300-den-xanh-duong-1-2cb67dac-f161-4032-954a-c6608d334a66.jpg?v=1597455508819",11),
("https://bizweb.dktcdn.net/100/066/626/files/galaxy-lp300-den-xanh-duong-2-cce1e461-b91b-4d15-851b-cd41c3157397.jpg?v=1597455518140",11),
("https://bizweb.dktcdn.net/100/066/626/files/galaxy-lp300-den-xanh-duong-4.jpg?v=1597288600589",11),
("https://bizweb.dktcdn.net/100/066/626/files/galaxy-lp300-den-xanh-duong-3.jpg?v=1597288613494",11),
("https://bizweb.dktcdn.net/100/066/626/files/khung-xe-dap-trek-eb7f777c-fcf0-4f6b-9500-b79718d093ca.jpg?v=1689580545061",12),
("https://bizweb.dktcdn.net/100/066/626/files/galaxy-rl200-d1c1da28-88f1-4a25-a622-6a1f013e88f1.jpg?v=1689580566334",12),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-galaxy-rl200-1-94a43408-b7cc-42b4-aea3-3ec5407b20a2.jpg?v=1689579734651",12),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-galaxy-rl200-73b55b05-12ca-4c68-ae9b-5b76b8be8ae3.jpg?v=1689579683518",12),
("https://bizweb.dktcdn.net/100/066/626/products/xe-dap-galaxy-th19t-den-do.jpg?v=1687225318720",13),
("https://bizweb.dktcdn.net/100/066/626/products/xe-dap-galaxy-th19t-den-xanh-la.jpg?v=1687225327947",13),
("https://bizweb.dktcdn.net/100/066/626/products/xe-dap-galaxy-th19t-den-do.jpg?v=1687225318720",13),
("https://bizweb.dktcdn.net/100/066/626/products/xe-dap-galaxy-th19t-xam-do-do.jpg?v=1687225333440",13),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dia-hinh-glx-mt16-1.jpg?v=1687167246085",14),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dia-hinh-glx-mt16-4.jpg?v=1687167122307",14),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dia-hinh-glx-mt16-5.jpg?v=1687167123486",14),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-dia-hinh-glx-mt16-6.jpg?v=1687167124660",14),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-gap-galaxy-hk2-3.jpg?v=1634867587875",15),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-gap-galaxy-hk2-5.jpg?v=1634867589867",15),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-gap-galaxy-hk2-6.jpg?v=1634867590975",15),
("https://bizweb.dktcdn.net/100/066/626/files/xe-dap-gap-galaxy-hk2-7.jpg?v=1634867592200",15),
("https://bizweb.dktcdn.net/100/066/626/files/co-nen-doi-mu-bao-hiem-khi-su-dung-xe-dap.png?v=1648030006338",16),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-hn-01-2-6f998038-b915-4daa-9f5e-a99ee0a8298b.jpg?v=1690343341640",16),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-hn-01-3-393487ab-6073-4d29-9b71-0018446b4612.jpg?v=1690343499403",16),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-hn-01-4-cfa5b703-ad4d-4ed5-9658-d36e3005d9b2.jpg?v=1690343286805",16),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-hn-01-5d90557f-923a-4449-8212-43a2b6ec6cfb.jpg?v=1690343690406",16),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-g99-11.jpg?v=1660358714259",17),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-g99-13.jpg?v=1660358715837",17),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-g99-14.jpg?v=1660358716642",17),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-gts-1.jpg?v=1660361700227",18),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-gts-6.jpg?v=1660362434205",18),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-gts-7.jpg?v=1660362434994",18),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-x7-7.jpg?v=1659085128552",19),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-x7-3.jpg?v=1659085125162",19),
("https://bizweb.dktcdn.net/100/066/626/files/mu-bao-hiem-xe-dap-giant-x7-4.jpg?v=1659085126249",19);

insert into `user`(`address`,avatar,birthday,email,gender,id_card,`name`,phone_number,account_id)
values("Đà Nẵng","https://media-cdn-v2.laodong.vn/storage/newsportal/2022/3/4/1020247/Park-Seo-Joon-Profil.jpg?w=800&h=496&crop=auto&scale=both","1999-10-11","long1110dn@gmail.com",1,"201776552","Trương Nguyễn Đình Long","0932533481",1),
("Hồ Chí Minh","https://image.tienphong.vn/w1000/Uploaded/2023/zaugtn/2022_03_04/9-6532.jpg","2001-05-03","tsaivan569@gmail.com",0,"123356754","Tsai Nhã Văn","0783685099",2),
("Quảng Nam","https://vtv1.mediacdn.vn/zoom/640_400/2021/9/11/ea722xiaaliu1-1631377858219236780534-crop-16313778648751305120149.jpg","1969-11-05","long1110dn@gmail.com",1,"201678789","Trương Đình Lân","0905273809",3),
("Thừa Thiên Huế","https://image.tienphong.vn/w460/Uploaded/2023/zaugtn/2021_03_12/tien_phong_dienviendep24_veef.jpg","1971-10-31","honghanh2710@gmail.com",0,"201999888","Nguyễn Thị Hồng Hạnh","0905346958",4);



insert into `product`(`description`, `name`, price, quantity, category_detail_id,brand_id,import_date,price_sale,favourite,rim,saddle,tire,bicycle_fork,bicycle_frame,handle_bar)
values("Điểm nổi bật của Áo xe đạp dài tay GIANT NỈ
Áo xe đạp dài tay GIANT NỈ GHI được sản xuất bằng chất liệu Nỉ, chống gió tốt, giữ thân nhiệt cho người sử dụng. Giữ ấm tốt, các đường nét bo viền sắc nét.Đáy túi có có miếng phản quang, an toàn khi đạp về đêm.
Phù hợp mặc ở nhiệt độ 10-18℃ (Thích hợp cho khách hàng đạp xe vào mùa thu và mùa đông)","Áo xe đạp dài tay GIANT NỈ ấm mùa đông",2250000,10,9,1,"2023-12-20",1499000,4,null,null,null,null,null,null),
("Áo đạp xe Monton 10PM là dòng áo xe đạp cao cấp với thiết kế tay áo dài để chống nắng, thoáng khí.  Áo đua xe đạp hạng nhẹ này được thiết kế để cưỡi trong điều kiện nóng và ẩm ướt. Sử dụng vải UltraDeanSilk cao cấp đặc trưng phía trước mềm mại, đàn hồi cao và phù hợp với vóc dáng của bạn. Vải DeanDot kỹ thuật kéo dài trên mặt sau và tay áo phía trên, giúp tự do di chuyển và thông gió. 
Lưới hình quạt dưới mặt sau phía dưới thúc đẩy luồng không khí cho phép điều chỉnh nhiệt độ tối ưu. Dây thắt lưng MARC của Ý giữ cố định áo thi đấu.
Đặc trưng:
- Cổ áo cắt thấp
- Hems tay áo liền mạch
- Tay áo định hình cổ điển có khớp nối để vừa vặn hoàn hảo trên xe đạp
- Băng thắt lưng MARC của Ý
- Dây kéo vislon YKK với bộ kéo biểu tượng MONTON
- 3 túi sau được gia cố với một túi bảo mật có khóa kéo bổ sung
- Trang trí phản quang giúp tăng khả năng hiển thị trong điều kiện ánh sáng yếu.","Áo xe đạp dài tay MONTON 10PM",780000,10,9,2,"2023-12-10",720000,4,null,null,null,null,null,null),
("Áo xe đạp MONTON là dòng xe đạp cao cấp với tay áo dài để chống nắng, được thiết kế để thoáng khí, áo đua xe đạp hạng nhẹ này được thiết kế để cưỡi trong điều kiện nóng và ẩm ướt. Vải UltraDeanSilk cao cấp đặc trưng phía trước mềm mại, đàn hồi cao và phù hợp với vóc dáng của bạn. Vải DeanDot kỹ thuật kéo dài trên mặt sau và tay áo phía trên, giúp tự do di chuyển và thông gió. 
Lưới hình quạt dưới mặt sau phía dưới thúc đẩy luồng không khí cho phép điều chỉnh nhiệt độ tối ưu. Dây thắt lưng MARC của Ý giữ cố định áo thi đấu.
Đặc trưng:
- Cổ áo cắt thấp
- Đường viền tay áo liền mạch
- Tay áo cài cổ điển có khớp nối để vừa vặn hoàn hảo khi đi xe đạp
- Dây thắt lưng MARC của Ý
- Dây kéo vislon YKK với tay kéo biểu tượng MONTON
- 3 túi sau được gia cố với một túi bảo mật có khóa kéo
bổ sung - Trang trí phản quang bổ sung khả năng hiển thị trong điều kiện ánh sáng yếu
- 22 ° -40 ° C / 72 ° -104 ° F
- DeanSilk: 88% polyester / 12% Elastane, 120-130GSM
- Lưới hình quạt: 82% polyester / 18% Elastane, 100GSM
- DeanDot : 85% polyester / 15% Elastane, 130GSM","Áo xe đạp dài tay MONTON",780000,10,9,3,"2023-10-10",700000,4,null,null,null,null,null,null),
("Điểm nổi bật của  Quần ngắn xe đạp GIANT FAITHE
Quần ngắn xe đạp GIANT FAITHE là quần chuyên dụng cho vận động viên đạp xe có lót đệm giảm đau mông trong quá trình đạp xe, được sản xuất bằng chất liệu có độ đàn hồi tốt, vải thoáng mát, nhanh khô và không để lại mùi hôi.
Quần ngắn xe đạp GIANT FAITHE hiện đang có sẵn tại ONEBIKE với số lượng chỉ còn vài cái và size quần giới hạn, bạn có thể đặt mua nhanh SP qua các kênh online của Cty (Website, Facebook, Zalo,..) hoặc GỌI NGAY 0916 790 059 - 0912 190 059 để đặt mua sản phẩm này ngay bây giờ nhé.",
"Quần ngắn xe đạp GIANT FAITHE",890000,10,10,1,"2023-12-12",850000,4,null,null,null,null,null,null),
("Điểm nổi bật của Quần ngắn đạp xe Nam NENK BEINO III
Quần ngắn đạp xe Nam NENK BEINO III là quần chuyên dụng cho vận động viên đạp xe có lót đệm giảm đau mông trong quá trình đạp xe, được sản xuất bằng chất liệu OCEAN EFPE giúp vật liệu có độ đàn hồi tốt, vải thoáng mát,
 nhanh khô và không để lại mùi hôi.
 Quần xe đạp NENK BEINO III sử dụng loại mực in chất lượng cao nhập khẩu từ Ý Manoukian-Argon an toàn và thân thiện với môi trường, chống phai màu khi giặt.",
"Quần ngắn đạp xe Nam NENK BEINO III",360000,10,10,3,"2023-09-09",320000,4,null,null,null,null,null,null),
("Điểm nổi bật của Quần ngắn đạp xe NENK GLADITOR II
Quần bỉm đạp xe NENK GLADITOR II được thiết kế với kiểu dáng thời trang thể thao, chất vải thun cao cấp co giãn 4 chiều có khả năng hút mồ hôi mạnh, thoáng khí, tạo cảm giác thoải mái dễ chịu khi mặc trên hành trình
Vải có cấu trúc 2 lớp, mềm mại, công nghệ cao, ôm sát cơ thể. Yếm cao cấp có khả năng hút ẩm, thoải mái, là trang phục không thể thiếu của nguời đi xe đạp thể thao. Quần sử dụng được cho cả nam và nữ. "
,"Quần ngắn đạp xe Nam NENK GLADITOR II",700000,10,10,2,"2023-10-12",650000,4,null,null,null,null,null,null),
("Điểm nổi bật của Kính xe đạp Liv LDAC1 VERTEX
Kính xe đạp Liv LDAC1 VERTEX kết hợp công nghệ tiên tiến quốc tế và chất liệu TR90 để tạo ra sản phẩm nhẹ và tiện dụng phù hợp với các môn thể thao chuyên nghiệp. Đặc biệt, sản phẩm này mang lại sự an toàn tốt nhất cho người sử dụng khi tham gia hoạt động đạp xe.
Thiết kế và sản xuất của Kính Liv LDAC1 VERTEX được thực hiện bằng công nghệ cao, bao gồm góc nhìn, cỡ, độ chéo, đệm mũi, đeo lên rất thoải mái và đảm bảo không cho ánh sáng xâm nhập vào mắt. Sản phẩm còn được trang bị tính năng điều chỉnh sống mũi, giúp người sử dụng tránh trơn trượt khi vận động và giảm chấn.
","Kính xe đạp LIV LDAC1 VERTEX",670000,10,8,2,"2023-12-12",620000,4,null,null,null,null,null,null),
("Tại sao nên đeo kính khi đạp xe?
Trong quá trình đi xe đạp leo núi hay chạy xe đường trường, bạn không thể nào kiểm soát hay đoán trước được sẽ có vật lạ gì bay vào mắt. Khi đạp xe với tốc độ nhanh, sẽ có rất nhiều bụi bẩn, côn trùng, thậm chí là đất đá, nhánh cây nhỏ bay vào. Nếu không có kính bảo vệ khỏi các tác nhân trên, mắt sẽ có nguy cơ bị xước giác mạc.
Bên cạnh đó, tia cực tím từ ánh nắng mặt trời có thể làm đục thuỷ tinh thể hay nặng hơn là viêm giác mạc do bỏng nắng vì không đeo mắt kính chống tia UV. 
Vì vậy, việc trang bị một chiếc mắt kính khi đạp xe là một điều vô cùng cần thiết, không chỉ giúp bạn tránh được những rủi ro từ môi trường, mà còn an tâm, thoải mái hơn khi chinh phục những cung đường dài.
Kính xe đạp LIV LD533 VERTEX là dòng kính đạp xe thể thao cao cấp của thương hiệu LIV được thiết kế với form kính to, áp sát với mặt và ôm trọn đôi mắt có tác dụng chống tia UV tốt, giúp bảo vệ mắt người đạp xe khi đạp dưới thời tiết nắng nóng.
","Kính xe đạp LIV LD533 VERTEX",820000,10,8,2,"2023-09-09",800000,4,null,null,null,null,null,null),
("Điểm nổi bật của Kính xe đạp GIANT GDADC1 VERTEX:
Kính Giant&Liv kết hợp công nghệ tiên tiến quốc tế, chất liệu TR90. Trọng lượng nhẹ, công năng tiên tiến, phù hợp với các môn thể thao chuyên nghiệp.
Đem lại sự an toàn tốt nhất khi đạp xe, thiết kế và sản xuất công nghệ cao: góc nhìn, cỡ, độ chéo, đệm mũi, đeo lên rất thoải mái, đảm bảo không lọt ánh sang vào mắt.
Có thế điều chỉnh sống mũi, chống trơn trượt khi vận động và giảm chấn, thiết kế kiểu mới chống bị sương làm mờ mắt kính, thiết kế 1 mắt kinh thời thượng, tai kính tiếp xúc với da không gây dị ứng.
Thiết kế kính Giant&Liv theo bản Châu Á công nghệ 3DWRAP, cản gió tốt, chống cát văng vào mắt, thời thượng, dễ sử dụng, gọng kinh ngoài trọng lượng nhẹ, vẫn đảm bảo được độ cứng tuyệt đối. Chất liệu TR90 hiện đang hot trong giới thể thao,  chất liệu hạn chế nứt-gãy.
Xử lý bề mặt, do gọng tiếp xúc trực tiếp với da, vì vậy lớp sơn phải được xử lý chuẩn, tránh sự ăn mòn của mồ hôi muối."
,"Kính xe đạp GIANT GDADC1 VERTEX",6700000,10,8,1,"2023-12-08",600000,4,null,null,null,null,null,null),
("Đặc điểm nổi bật của Đèn pha xe đạp siêu sáng MAGICSHINE CBL1600
Đèn pha xe đạp siêu sáng MAGICSHINE CBL1600 với công nghệ ánh sáng tiên tiến đảm bảo độ sáng tối đa và hiệu suất ổn định.
Dung lượng pin 4000mAh, 3,6V giúp bạn thoải mái sử dụng trong thời gian dài mà không lo hết pin giữa đường.
Đèn pha xe đạp siêu sáng MAGICSHINE CBL1600 sử dụng sạc đầu vào 5V 1A, chỉ cần mất 5 tiếng để đèn sạc đầy pin và sẵn sàng cho hành trình tiếp theo",
"Đèn pha xe đạp siêu sáng MAGICSHINE CBL1600",1200000,10,4,3,"2023-12-19",1000000,4,null,null,null,null,null,null),
("Đặc điểm nổi bật của Đèn LED xe đạp chống nước K1000-3000mAh
Vỏ Đèn LED xe đạp chống nước K1000-3000mAh làm từ hợp kim nhôm, có đi kèm lớp chống nước, không lo mưa bão bị hư hỏng.
Đèn LED xe đạp chống nước K1000-3000mAh có 5 chế độ chiếu sáng: sáng yếu, trung bình, cao, điểm tập trung, chớp nháy. Người lái xe chỉ cần giữ nút nguồn và chạm là có thể chuyển chế độ.
Trong những chuyến phượt, chiếc đèn này còn có thể biến thành một chiếc đèn pin hữu dụng nữa đấy.","Đèn pha xe đạp chống nước K1000-3000mAh",300000,10,4,3,"2023-05-03",250000,4,null,null,null,null,null,null),
("Điểm nổi bật của Đèn hậu xe đạp GIANT FAITHE
Đèn hậu xe đạp GIANT FAITHE là đèn hậu chất lượng của thương hiệu Giant, có chức năng cảnh báo và chiếu sáng phía sau. Đèn này thường sử dụng công nghệ LED để tiết kiệm năng lượng và có độ sáng cao, giúp tăng khả năng an toàn khi di chuyển trên đường đêm hoặc trong điều kiện ánh sáng yếu.
Đèn hậu xe đạp GIANT FAITHE được thiết kế chắc chắn và độ bền cao, đảm bảo đáp ứng được các yêu cầu sử dụng trong thời gian dài. Ngoài ra, đèn hậu của xe đạp GIANT FAITHE còn có kiểu dáng đẹp mắt, tinh tế, phù hợp với nhiều phong cách thời trang của người sử dụng.
","Đèn hậu xe đạp GIANT FAITHE",160000,10,4,4,"2023-04-04",120000,4,null,null,null,null,null,null),
("Đặc điểm nổi bật của Bơm mini gắn xe đạp GIYO GP-781
Bơm mini gắn xe đạp GIYO GP-781 với công nghệ CNC Machining, sản phẩm đảm bảo chất lượng và hiệu suất cao nhất trong mọi chuyến đi xe đạp.
Bơm có thiết kế độc đáo giúp bạn linh hoạt chuyển đổi giữa 2 đầu van AV/FV một cách thuận tiện. Thân bơm được làm từ hợp kim chất lượng cao, giúp bảo vệ bơm khỏi va đập và đồng thời tạo nên vẻ cứng cáp và sáng bóng. Ngoài ra, nó cũng dễ lắp đặt và sử dụng.
","Bơm mini gắn xe đạp GIYO GP-781",280000,10,5,2,"2023-12-09",200000,4,null,null,null,null,null,null),
("Tại sao nên mua 1 cái bơm sàn để dùng tại nhà?
Sẽ như thế nào nếu vào một ngày đẹp trời, sáng thức dậy bỗng dưng chiếc xe đạp, xe máy hoặc xe ô tô của bạn bị non hơi hoặc lốp hết sạch hơi do bị lủng lốp mà bạn không biết hoặc xe non hơi do lâu ngày không sử dụng, nhưng bạn lại cần sử dụng gấp, nhà thì không có sẵn bơm để bơm, dắt xe ra tiệm thì cực kì bất tiện, tốn thời gian,...
Giá như bây giờ mà có 1 cái bơm trong nhà thì tốt biết bao nhiêu, mọi vấn đề sẽ được giải quyết ngay tức khắc. Lúc này bạn mới nhận ra tầm quan trọng của bơm khi sử dụng tại nhà, có thể ít khi bạn sử dụng tới nhưng đôi lúc nó thực sự rất rất cần thiết.
Bơm sàn là loại bơm phổ biến thích hợp cho việc sử dụng tại nhà.
Ưu điểm của bơm sàn là vì có ống bơm dài nên có buồng khí nén lớn, hành trình pít-tông dài tạo áp suất lớn nhanh chóng đưa không khí vào bên trong lốp xe. Tư thế đứng thuận tiện giúp bạn dễ dàng thực hiện thao tác bơm tốt nhất. Ngoài ra, với những loại bơm tốt thường sẽ có đồng hồ đo áp suất rất tiện theo dõi khi bơm tránh việc bơm quá tay gây ảnh hưởng tới tuổi thọ của săm, lốp.
Nhược điểm của bơm sàn là thiết kế khá dài và cồng kềnh, vì vậy khó mang theo khi đi ra ngoài, đặc biệt là khi đạp xe hoặc đi xe máy. Nếu bạn cần mang theo khi đạp xe thì các dòng bơm xe đạp mini là sự lựa phù hợp nhất dành cho bạn ngay lúc này.
","Bơm sàn xe đạp BONTRANGER-MINI CHARGER",1150000,10,5,3,"2023-08-08",1000000,4,null,null,null,null,null,null),
("Điểm nổi bật Túi treo khung xe đạp 2 ngăn GIANT FAITHE
Túi Khung Treo xe đạp 2 ngăn GIANT FAITHE thiết kế hai bên ngăn túi rộng với khóa kéo kiểu mới, dễ dàng sử dụng, ngăn nắp với dây treo cố định chắc chắn trên khung xe. Túi được thiết kế để có thể lắp đặt phù hợp với tất cả các dòng xe đạp đường trường, thể thao, địa hình. Kiểu dáng thiết kế gọn gàng, tiện lợi cho người dùng. Chất liệu vải không thấm nước, dễ dàng sử dụng dưới mọi thời tiết.
Túi Khung Xe Đạp GIANT phù hợp cho mọi nhu cầu của người sử dụng. Từ người dùng để đựng một vài đồ vật cá nhân như chìa khóa, điện thoại… tiện lợi cho việc di chuyển quãng đường ngắn, đi lại trong thành phố. Cho đến những phụ kiện sửa chữa, dự phòng cho những chuyến đi xa, đường trường.
Thông số kỹ thuật:
-  Kích Thước: 16cm x 18xm
- Chất Liệu: chống thấm nước, sử dụng bền lâu
- Tem Phản Quang: Logo GIANT","Túi treo khung xe đạp 2 ngăn GIANT FAITHE",170000,10,5,1,"2023-11-11",150000,4,null,null,null,null,null,null),
("Tại sao nên sử dụng túi treo khung xe đạp thể thao?
Các loại túi treo xe đạp là 1 trong những loại phụ kiện mà nhiều khách hàng mua xe đạp thường hay bỏ qua vì nghĩ rằng nó chưa cần thiết. Nhưng khi đạp xe thực tế thì nhiều khách hàng lại muốn mang theo rất nhiều đồ dùng cá nhân bên mình như ví tiền, điện thoại, chìa khoá, tai nghe, sạc dự phòng, áo mưa,..
Hơn thế nữa, sau vài buổi đạp bạn gặp vài trục trặc nhỏ như xe bị thủng săm, con ốc nào đó bỉ lỏng,... nhưng bạn lại không có đồ nghề để fix lỗi khiến bạn phải dắt bộ quảng đường dài để về nhà. Điều đó buộc bạn phải sắm ngay cho mình 1 cái túi treo phù hợp để giải quyết các vấn đề trên.
Bên cạnh các loại túi treo sau yên, túi treo baga,.. dùng để đựng đồ dùng cá nhân hoặc dụng cụ sửa xe cơ bản thì các loại TÚI TREO KHUNG cũng là một trong những ưu tiên hàng đầu mà khách hàng mua xe đạp thường xuyên lựa chọn.
Túi WILD MAN XT2 là một trong những dòng túi treo khung xe đạp cao cấp được rất nhiều khách hàng yêu thích và lựa chọn sử dụng bởi thiết kế thời thượng, gam màu đen cá tính, dây cột chắc chắn, dễ dàng lắp đặt và sử dụng.
Điểm nổi bật của Túi điện thoại treo KHUNG xe đạp chống nước WILD MAN XT2
Túi treo xe đạp chống nước WILD MAN XT2 có ngăn đựng điện thoại tiện lợi,  ngăn đựng đồ thiết kế thông minh để giúp người sử dụng chứa được nhiều đồ đạc hơn khi đi xe.
Túi đựng điện thoại treo khung xe đạp chống nước WILD MAN XT2 được thiết kế với bề mặt cứng không bị biến dạng, không gian chứa lớn, chất liệu nhựa và vải kết hợp với nhau cho chiếc túi form dáng chuẩn, cứng cáp. Phù hợp với mọi loại xe đạp thể thao hiện nay.
","Túi điện thoại treo khung xe đạp chống nước WILD MAN XT2",240000,10,5,4,"2023-06-09",200000,4,null,null,null,null,null,null);



insert into images(file_path,product_id)
values("https://bizweb.dktcdn.net/100/066/626/products/1-ao-xe-dap-dai-tay-giant-ni-ghi.jpg?v=1665542075463",36),
("https://bizweb.dktcdn.net/100/066/626/products/ao-xe-dap-dai-tay-giant-ni-ghi.jpg?v=1665542079427",36),
("https://bizweb.dktcdn.net/100/066/626/files/1-ao-xe-dap-dai-tay-monton-10pm.jpg?v=1667791594080",37),
("https://bizweb.dktcdn.net/100/066/626/files/2-ao-xe-dap-dai-tay-monton-10pm.jpg?v=1667792073851",37),
("https://bizweb.dktcdn.net/100/066/626/files/7-ao-xe-dap-dai-tay-monton-10pm.jpg?v=1667791699429",37),
("https://bizweb.dktcdn.net/100/066/626/files/3-ao-xe-dap-dai-tay-monton.jpg?v=1667792827833",38),
("https://bizweb.dktcdn.net/100/066/626/files/4-ao-xe-dap-dai-tay-monton-537dac43-a0d6-430d-935a-465b0725cf80.jpg?v=1667792968659",38),
("https://bizweb.dktcdn.net/100/066/626/files/6-ao-xe-dap-dai-tay-monton.jpg?v=1667556105015",38),
("https://bizweb.dktcdn.net/100/066/626/files/quan-ngan-xe-dap-giant-faithe.jpg?v=1690341121750",39),
("https://bizweb.dktcdn.net/100/066/626/files/02d4ed10b8c38036436f684d485f3cb6-jpg-1200x1200q80.jpg?v=1690341119722",39),
("https://bizweb.dktcdn.net/100/066/626/files/huong-dan-cach-chay-xe-dap-dua-cho-nguoi-moi-bat-d-15.jpg?v=1690341121037",39),
("https://bizweb.dktcdn.net/100/066/626/products/quan-ngan-dap-xe-nam-nenk-beino-iii-1.jpg?v=1635210677737",40),
("https://bizweb.dktcdn.net/100/066/626/products/quan-ngan-dap-xe-nam-nenk-beino-iii-2.jpg?v=1635210681427",40),
("https://bizweb.dktcdn.net/100/066/626/products/quan-ngan-dap-xe-nam-nenk-beino-iii-3.jpg?v=1635210684773",40),
("https://bizweb.dktcdn.net/100/066/626/files/quan-ngan-dap-xe-nam-nenk-gladitor-ii-6.jpg?v=1635215980493",41),
("https://bizweb.dktcdn.net/100/066/626/files/quan-ngan-dap-xe-nam-nenk-gladitor-ii-5.jpg?v=1635215979771",41),
("https://bizweb.dktcdn.net/100/066/626/products/quan-ngan-dap-xe-nam-nenk-gladitor-ii-7.jpg?v=1635215913253",41),
("https://bizweb.dktcdn.net/100/066/626/products/kinh-xe-dap-liv-gdac1-vertex-2.jpg?v=1678868856517",42),
("https://bizweb.dktcdn.net/100/066/626/files/kinh-xe-dap-liv-gdac1-vertex7-a621a299-a2bd-4b0c-8bf9-6ace0dde0ade.jpg?v=1678869566715",42),
("https://bizweb.dktcdn.net/100/066/626/files/kinh-xe-dap-liv-gdac1-vertex8.jpg?v=1678869084206",42),
("https://bizweb.dktcdn.net/100/066/626/files/kinh-xe-dap-liv-ld533-vertex-3.jpg?v=1660011827765",43),
("https://bizweb.dktcdn.net/100/066/626/files/kinh-xe-dap-liv-ld533-vertex-4.jpg?v=1660011828873",43),
("https://bizweb.dktcdn.net/100/066/626/files/kinh-xe-dap-liv-ld533-vertex-5.jpg?v=1660011829724",43),
("https://bizweb.dktcdn.net/100/066/626/files/kinh-xe-dap-giant-gdadc1-vertex-1.jpg?v=1660296186884",44),
("https://bizweb.dktcdn.net/100/066/626/files/kinh-xe-dap-giant-gdadc1-vertex-2.jpg?v=1660296187685",44),
("https://bizweb.dktcdn.net/100/066/626/files/1-1-kinh-xe-dap-giant-gdac1-vertex-1.jpg?v=1661396805489",44),
("https://bizweb.dktcdn.net/100/066/626/files/den-pha-xe-dap-sieu-sang-magicshine-cbl1600-1.jpg?v=1700619430877",45),
("https://bizweb.dktcdn.net/100/066/626/products/den-pha-xe-dap-sieu-sang-magicshine-cbl1600-2.jpg?v=1700619377480",45),
("https://bizweb.dktcdn.net/100/066/626/files/den-pha-xe-dap-sieu-sang-magicshine-cbl1600-3.jpg?v=1700619466430",45),
("https://bizweb.dktcdn.net/100/066/626/files/den-led-xe-dap-chong-nuoc-k1000-3000mah-1.jpg?v=1692691577354",46),
("https://bizweb.dktcdn.net/100/066/626/files/den-led-xe-dap-chong-nuoc-k1000-3000mah-3.jpg?v=1692691594737",46),
("https://bizweb.dktcdn.net/100/066/626/files/den-led-xe-dap-chong-nuoc-k1000-3000mah-5.jpg?v=1692691650216",46),
("https://bizweb.dktcdn.net/100/066/626/products/4-den-hau-xe-dap-faithe.jpg?v=1676966295697",47),
("https://bizweb.dktcdn.net/100/066/626/files/1-den-hau-xe-dap-faithe.jpg?v=1676967189665",47),
("https://bizweb.dktcdn.net/100/066/626/files/9-den-hau-xe-dap-faithe.jpg?v=1676967228655",47),
("https://bizweb.dktcdn.net/100/066/626/files/bom-mini-gan-xe-dap-giyo-gp-781.jpg?v=1700014853319",48),
("https://bizweb.dktcdn.net/100/066/626/files/bom-mini-gan-xe-dap-giyo-gp-781-3.jpg?v=1700014855216",48),
("https://bizweb.dktcdn.net/100/066/626/files/bom-xe-dap-cover-faff77b5-8859-44ea-97df-98b2fe3b9034.jpg?v=1691997493803",49),
("https://bizweb.dktcdn.net/100/066/626/files/bom-san-xe-dap.jpg?v=1691997390157",49),
("https://bizweb.dktcdn.net/100/066/626/files/bom-san-xe-dap-bontranger-mini-charger-1.jpg?v=1691997586147",49),
("https://bizweb.dktcdn.net/100/066/626/files/tui-treo-khung-xe-dap-2-ngan-giant-faithe.jpg?v=1676971571065",50),
("https://bizweb.dktcdn.net/100/066/626/files/2-tui-treo-khung-xe-dap-2-ngan-giant-faithe.jpg?v=1676971448269",50),
("https://bizweb.dktcdn.net/100/066/626/files/3-tui-dien-thoai-treo-khung-xe-dap-chong-nuoc-wild-man-xt2.jpg?v=1665042401322",51),
("https://bizweb.dktcdn.net/100/066/626/products/5-tui-dien-thoai-treo-khung-xe-dap-chong-nuoc-wild-man-xt2.jpg?v=1665041533337",51),
("https://bizweb.dktcdn.net/100/066/626/products/2-tui-dien-thoai-treo-khung-xe-dap-chong-nuoc-wild-man-xt2.jpg?v=1665041525407",51);




















