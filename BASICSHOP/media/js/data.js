const productData = [
    {   
        id: 1,
        category: `Thơ tự do`,
                // + shoes 
                // + accessories
        name: `Đồng Chí`,
        brand: `1948`,
        size: [`Bài thơ viết về tình đồng chí, đồng đội của những người lính dựa trên cơ sở cùng chung cảnh ngộ và lý tưởng chiến đấu được thể hiện tự nhiên, bình dị mà sâu sắc trong mọi hoàn cảnh
        Bài thơ sử dụng những chi tiết,hình ảnh, ngôn ngữ hết sức giản dị, gần gũi, chân thực nhưng rất cô đọng và giàu sức biểu cảm`],
        
                // female
        price: `Chính Hữu`,
        img: [`./media/img/book/dongchi1.jpeg`, `./media/img/book/dongchi2.jpg`],
description:`Quê hương anh nước mặn đồng chua
Làng tôi nghèo đất cày lên sỏi đá
Anh với tôi đôi người xa lạ
Tự phương trời chẳng hẹn quen nhau
Súng bên súng, đầu sát bên đầu 
Đêm rét chung chăn, thành đôi tri kỉ
Đồng chí!
Ruộng nương anh gửi bạn thân cày
Gian nhà không mặc kệ gió lung lay
Giếng nước gốc đa nhớ người ra lính
Anh với tôi biết từng cơn ớn lạnh
Sốt run người vừng trán ướt mồ hôi
Áo anh rách vai
Quần tôi có vài mảnh vá
Miệng cười buốt giá
Chân không giày 
Thương nhau tay nắm lấy bàn tay.
           
Đêm nay rừng hoang sương muối
Đứng cạnh bên nhau chờ giặc tới
Đầu súng trăng treo`,
        
            // t-shirt, pants , suits ,trousers ,...
    },
    {   
        id: 2,
        category : `Thơ tự do`,
        name : `Bài thơ về tiểu đội xe không kính`,
        brand : `1969`,
        size : [`Bài thơ đã miêu tả một hình ảnh độc đáo: những chiếc xe không kính; qua đó, khắc họa nổi bật hình ảnh những người lính lái xe ở Trường Sơn trong thời kháng chiến chống Mĩ với tư thế hiên ngang, tinh thần lạc quan, dũng cảm, bất khuất khó khăn nguy hiểm
        Tác giả đã đưa vào bài thơ chất liệu hiện thực sinh động của cuộc sống ở chiến trường, ngôn ngữ và giọng điệu giàu tính khấu ngữ, tự nhiên, khỏe khoắn.`],
        
        price : `Phạm Tiến Duật`,
        img : [`./media/img/book/xekhongkinh1.jpg`,`./media/img/book/khongkinh2.png`],
        description :
`Không có kính không phải vì xe không có kính
Bom giật, bom rung kính vỡ đi rồi
Ung dung buồng lái ta ngồi,
Nhìn đất, nhìn trời, nhìn thẳng.
        
Nhìn thấy gió vào xoa mắt đắng
Nhìn thấy con đường chạy thẳng vào tim
Thấy sao trời và đột ngột cánh chim
Như sa, như ùa vào buồng lái
        
Không có kính, ừ thì có bụi,
Bụi phun tóc trắng như người già
Chưa cần rửa, phì phèo châm điếu thuốc
Nhìn nhau mặt lấm cười ha ha.
        
Không có kính, ừ thì ướt áo
Mưa tuôn, mưa xối như ngoài trời
Chưa cần thay, lái trăm cây số nữa
Mưa ngừng, gió lùa khô mau thôi.
        
Những chiếc xe từ trong bom rơi
Ðã về đây họp thành tiểu đội
Gặp bè bạn suốt dọc đường đi tới
Bắt tay qua cửa kính vỡ rồi.
        
Bếp Hoàng Cầm ta dựng giữa trời
Chung bát đũa nghĩa là gia đình đấy
Võng mắc chông chênh đường xe chạy
Lại đi, lại đi trời xanh thêm.
        
Không có kính, rồi xe không có đèn,
Không có mui xe, thùng xe có xước,
Xe vẫn chạy vì miền Nam phía trước:
Chỉ cần trong xe có một trái tim.`,
        
    },
    {   
        id: 3,
        category : `Thơ bảy chữ`,
        name : `Đoàn thuyền đánh cá`,
        brand : `1958`,
        size : [`Bài thơ đã khắc họa được nhiều hình ảnh tráng lệ về đoàn thuyền đánh cá và người dân vùng biến; thể hiện sử hồ hỏi, phấn chấn của con người trước đất nước và cuộc sống.
        Bài thơ có nhiều sáng tạo trong việc xây dựng hình ảnh bằng liên tưownrg, phong phú, độc đáo, có âm hưởng khỏe khoắn, hào hùng, lạc quan,`],
       
        price : `Huy Cận`,
        img : [`./media/img/book/danhca1.jpg`,`./media/img/book/danhca2.jpg`],
        description :
`Mặt trời xuống biển như hòn lửa
 Sóng đã cài then, đêm sập cửa.
Đoàn thuyền đánh cá lại ra khơi,
Câu hát căng buồm cùng gió khơi.
        
Hát rằng: cá bạc biển Đông lặng,
Cá thu biển Đông như đoàn thoi
Đêm ngày dệt biển muôn luồng sáng.
Đến dệt lưới ta, đoàn cá ơi!
        
Thuyền ta lái gió với buồm trăng
Lướt giữa mây cao với biển bằng,
Ra đậu dặm xa dò bụng biển,
Dàn đan thế trận lưới vây giăng.
        
Cá nhụ cá chim cùng cá đé,
Cá song lấp lánh đuốc đen hồng,
Cái đuôi em quẫy trăng vàng choé,
Đêm thở: sao lùa nước Hạ Long.
        
Ta hát bài ca gọi cá vào,
Gõ thuyền đã có nhịp trăng cao,
Biển cho ta cá như lòng mẹ,
Nuôi lớn đời ta tự buổi nào.
        
Sao mờ, kéo lưới kịp trời sáng,
Ta kéo xoăn tay chùm cá nặng,
Vảy bạc đuôi vàng loé rạng đông,
Lưới xếp buồm lên đón nắng hồng.
        
Câu hát căng buồm với gió khơi,
Đoàn thuyền chạy đua cùng mặt trời.
Mặt trời đội biển nhô màu mới
Mắt cá huy hoàng muôn dặm phơi.`,
        
    },
    {   
        id: 4,
        category : `Thơ năm chữ`,
        name : `Sang thu`,
        brand : `1963`,
        size : [`Bài thơ ghi lại những cảm nhận tinh tế của tác giả về sự chuyển biến nhẹ nhàng của đất trời vào thời khắc cuối hạ sang thu.
        Bài thơ thành công trong việc sáng tạo những hình ảnh giàu sức gợi cảm tiêu biểu cho thời khắc giao mùa.`],
        
        
        price : `Hữu Thỉnh`,
        img : [`./media/img/book/sangthu1.jpg`,`./media/img/book/sangthu2.jpg`],
        description :
`Bỗng nhận ra hương ổi
Phả vào trong gió se
Sương chùng chình qua ngõ
Hình như thu đã về
        
Sông được lúc dềnh dàng
Chim bắt đầu vội vã
Có đám mây mùa hạ
Vắt nửa mình sang thu
        
Vẫn còn bao nhiêu nắng
Đã vơi dần cơn mưa
Sấm cũng bớt bất ngờ
Trên hàng cây đứng tuổi.`,
        
    },
    {   
        id: 5,
        category : `Thơ tự do`,
        name : `Khúc hát ru những em bé trên lưng mẹ`,
        brand : `1971`,
        size : [`Bài thơ nói về tình cảm người mẹ dành cho con, dù trong gian nan, vất vả người mẹ vẫn dàng cho con tình yêu thương thắm thiết, càng ước mong con mau lớn khôn, khỏe mạnh, trở thành công dân của một đất nước tự do.
        Tình yêu thương của người mẹ đã được thể hiện thành công bằng thể thơ tự do và giọng điệu ngọt ngào, trìu mến. Nhà thơ đã thành công trong việc sáng tạo hình ảnh"mặt trời" cho thất hết được kì vọng, ước mong của người mẹ về đứa con thân yêu.`],
        
        
        price : `Nguyễn Khoa Điềm`,
        img : [`./media/img/book/hatru1.jpg`,`./media/img/book/hatru2.jpg`],
        description :
`Em cu Tai ngủ trên lưng mẹ ơi,
Em ngủ cho ngoan đừng rời lưng mẹ.
Mẹ giã gạo mẹ nuôi bộ đội,
Nhịp chày nghiêng, giấc ngủ em nghiêng.
Mồ hôi mẹ rơi má em nóng hổi,
Vai mẹ gầy nhấp nhô làm gối,
Lưng đưa nôi và tim hát thành lời:
        
- Ngủ ngoan a kay ơi, ngủ ngoan a kay hỡi,
Mẹ thương a kay, mẹ thương bộ đội
Con mơ cho mẹ hạt gạo trắng ngần,
Mai sau con lớn vung chày lún sân...
        
Em cu Tai ngủ trên lưng mẹ ơi,
Em ngủ cho ngoan đừng rời lưng mẹ.
Mẹ đang trỉa bắp trên núi Ka–lưi
Lưng núi thì to, mà lưng mẹ nhỏ,
Em ngủ ngoan em, đừng làm mẹ mỏi.
Mặt trời của bắp thì nằm trên đồi,
Mặt trời của mẹ, em nằm trên lưng.
        
- Ngủ ngoan a kay ơi, ngủ ngoan a kay hỡi,
Mẹ thương a kay, mẹ thương làng đói.
Con mơ cho mẹ hạt bắp lên đều
Mai sau con lớn phát mười Ka–lưi...
        
Em cu Tai ngủ trên lưng mẹ ơi,
Em ngủ cho ngoan đừng rời lưng mẹ.
Mẹ đang chuyển lán, mẹ đi đạp rừng.
Thằng Mỹ đuổi ta phải rời con suối
Anh trai cầm súng, chị gái cầm chông,
Mẹ địu em đi để dành trận cuối.
Từ trên lưng mẹ em đến chiến trường,
Từ trong đói khổ em vào Trường Sơn.
        
- Ngủ ngoan a kay ơi, ngủ ngoan a kay hỡi,
Mẹ thương a kay, mẹ thương đất nước.
Con mơ cho mẹ được thấy Bác Hồ,
Mai sau con lớn làm người Tự Do..`,
        
    },
    {   
        id: 6,
        category : `Thơ năm chữ`,
        name : `Ánh trăng`,
        brand : `1978`,
        size : [`Bằng hình ảnh ánh trăng, bài thơ nwh một lời tự nhắc nhở về những năm tháng gian lao đã qua của cuộc đời người lính gắn bó với thiên nhiên, đất nước bình dị, hiền hậu; cũng là nhắc nhở về thái độ sống"uống nước nhớ nguồn".
        Nguyễn Duy đã thành công trong việc thể hiện quan niệm sống đó bằng những câu thơ với giọng điệu tâm tình, tự nhiên, hình ảnh giàu tính biểu cảm.`],
        
        
        price : `Nguyễn Duy`,
        img : [`./media/img/book/anhtrang1.jpg`,`./media/img/book/anhtrang2.jpg`],
        description :
`Hồi nhỏ sống với đồng
với sông rồi với biển
hồi chiến tranh ở rừng
vầng trăng thành tri kỷ
        
Trần trụi với thiên nhiên
hồn nhiên như cây cỏ
ngỡ không bao giờ quên
cái vầng trăng tình nghĩa
        
Từ hồi về thành phố
quen ánh điện cửa gương
vầng trăng đi qua ngõ
như người dưng qua đường
        
Thình lình đèn điện tắt
phòng buyn-đinh tối om
vội bật tung cửa sổ
đột ngột vầng trăng tròn
        
Ngửa mặt lên nhìn mặt
có cái gì rưng rưng
như là đồng là bể
như là sông là rừng
        
Trăng cứ tròn vành vạnh
kể chi người vô tình
ánh trăng im phăng phắc
đủ cho ta giật mình`,
        
    },
],
// tk user + admin
userData =[
    {
        email : 'admin123@gmail.com',
        userName : 'admin dep trai',
        password : '123',
        role: 'admin'
    },
    {
        userName : 'duyet tran',
        name : 'Trần Quang Duyệt',
        age : 20,
        address : '20 Đồng Me , Mễ Trì , Nam Từ Liêm , Hà Nội',
        phoneNumber : `0969907663`,
        email : 'hieuminhtran050300@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {   
        userName : 'hieuthuba',
        name : 'Đỗ Duy Hiếu',
        age : 21,
        address : '1207C kdt Linh Đàm , Hà Nội',
        phoneNumber : `0123456789`,
        email : 'duyhieu99@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {
        userName : 'long bot',
        name : 'Nguyễn bảo Long',
        age : 20,
        address : '14 ngõ 32/47 Đỗ Đức Dục , Mễ Trì , Nam Từ Liêm , Hà Nội',
        phoneNumber : `0969567890`,
        email : 'longbot00@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {
        userName : 'vietbatkhuat',
        name : 'Khuất Quang Việt',
        age : 20,
        address : '79 Lê Trọng Tấn, Hà Đông , Hà Nội',
        phoneNumber : `0382512348`,
        email : 'vietkhuat00@gmail.com',
        password : '123456789',
        role : 'client',
    },
]

