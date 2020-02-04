const fs = require('fs');
let users = [
  /* 1 */
  {
    email: 'hangminh64@gmail.com'
  },

  /* 2 */
  {
    email: 'anhquan_nguyen@bvishanoi.com'
  },

  /* 3 */
  {
    email: 'hoangquynhk36clnq@gmail.com'
  },

  /* 4 */
  {
    email: 'khanhhuyen2008@gmail.com'
  },

  /* 5 */
  {
    email: 'minhth@gmali.com'
  },

  /* 6 */
  {
    email: 'lienhuong@gmali.com'
  },

  /* 7 */
  {
    email: 'trandinhmanh70@gmail.com'
  },

  /* 8 */
  {
    email: 'danghuyenbonglinh123@gmail.com'
  },

  /* 9 */
  {
    email: 'huonggiangdongson@gmail.com'
  },

  /* 10 */
  {
    email: 'chungchung@gmail.com'
  },

  /* 11 */
  {
    email: 'ime.kaly@gmail.com'
  },

  /* 12 */
  {
    email: 'hainx@gmail.com'
  },

  /* 13 */
  {
    email: 'vit5d123@gmail.com'
  },

  /* 14 */
  {
    email: 'ducvn.mvp@gmail.com'
  },

  /* 15 */
  {
    email: 'vuthanhhuyen2102@gmail.com'
  },

  /* 16 */
  {
    email: 'kt96.thaibinh@gmail.com'
  },

  /* 17 */
  {
    email: 'xuan.htu@gmail.com'
  },

  /* 18 */
  {
    email: 'thaongan@gmail.com'
  },

  /* 19 */
  {
    email: 'leminhrtyg@gmail.com'
  },

  /* 20 */
  {
    email: 'tranglh0812@gmail.com'
  },

  /* 21 */
  {
    email: 'nguyenyenthanh11583@gmail.com'
  },

  /* 22 */
  {
    email: 'socbong1107@gmail.com'
  },

  /* 23 */
  {
    email: 'hathaotran2012@gmail.com'
  },

  /* 24 */
  {
    email: 'duchopchuyenmon@gmail.com'
  },

  /* 25 */
  {
    email: 'thanhsethang@gmail.com'
  },

  /* 26 */
  {
    email: 'snguyen00923@gmail.com'
  },

  /* 27 */
  {
    email: 'lehonghanh222@gmail.com'
  },

  /* 28 */
  {
    email: 'arch.zung@gmail.com'
  },

  /* 29 */
  {
    email: 'phamgiathanh@gmail.com'
  },

  /* 30 */
  {
    email: 'lephuc2612.n@gmail.com'
  },

  /* 31 */
  {
    email: '86nguyet@gmail.com'
  },

  /* 32 */
  {
    email: 'quoccuongmd1@gmail.com'
  },

  /* 33 */
  {
    email: 'mystognight@gmail.com'
  },

  /* 34 */
  {
    email: 'hieng4546@gmail.com'
  },

  /* 35 */
  {
    email: 'linhbone1@email.com'
  },

  /* 36 */
  {
    email: 'vuthao.edu.vn@gmail.com'
  },

  /* 37 */
  {
    email: 'ngoclongv08@gmail.com'
  },

  /* 38 */
  {
    email: 'hatm0982@gmail.com'
  },

  /* 39 */
  {
    email: 'nakc71a02@gmail.com'
  },

  /* 40 */
  {
    email: 'longduong90jsc@gmail.com'
  },

  /* 41 */
  {
    email: 'supermantoan99@gmail.com'
  },

  /* 42 */
  {
    email: 'mhgc@gmail.com'
  },

  /* 43 */
  {
    email: 'kien4cdb2@gmail.com'
  },

  /* 44 */
  {
    email: 'dunghuyenduchieu@gmail.com'
  },

  /* 45 */
  {
    email: 'ntnhung.nx@gmail.com'
  },

  /* 46 */
  {
    email: 'duytiengialai@gmail.com'
  },

  /* 47 */
  {
    email: 'lonhipcon@gmail.com'
  },

  /* 48 */
  {
    email: 'wut@email.com'
  },

  /* 49 */
  {
    email: 'doremon@gmail.com'
  },

  /* 50 */
  {
    email: 'Tuanminh@gmail.com'
  },

  /* 51 */
  {
    email: 'kieuxoa76@gmail.com'
  },

  /* 52 */
  {
    email: 'hvshan@gmail.com'
  },

  /* 53 */
  {
    email: 'luongthanhnga.dtn@gmail.com'
  },

  /* 54 */
  {
    email: 'thanh5asethang@gmail.com'
  },

  /* 55 */
  {
    email: 'nguyenlong7786@gmail.com'
  },

  /* 56 */
  {
    email: 'tvc00000@yahoo.com'
  },

  /* 57 */
  {
    email: 'kimanhdhv@gmail.com'
  },

  /* 58 */
  {
    email: 'lieuktd@gmail.com'
  },

  /* 59 */
  {
    email: 'khanhlinh241206@gmail.com'
  },

  /* 60 */
  {
    email: 'Hathoi2509@gmail.com'
  },

  /* 61 */
  {
    email: 'duongnga492006@gmail.com'
  },

  /* 62 */
  {
    email: 'troomtroomhanhtinhdochoi@gmail.com'
  },

  /* 63 */
  {
    email: 'hoanghavts2013@gmail.com'
  },

  /* 64 */
  {
    email: 'hieuminh02710@gmail.com'
  },

  /* 65 */
  {
    email: 'vuongbinh@ftu.edu.vn'
  },

  /* 66 */
  {
    email: 'honggianghnhn@gmail.com'
  },

  /* 67 */
  {
    email: 'hanhkhoagl@gmail.com'
  },

  /* 68 */
  {
    email: 'memuwuyif@mail4.online'
  },

  /* 69 */
  {
    email: 'phammanhhung3182010@gmail.com'
  },

  /* 70 */
  {
    email: 'nguyenminhhai06@gmail.com'
  },

  /* 71 */
  {
    email: 'kantambinh4@gamll.com'
  },

  /* 72 */
  {
    email: 'Hoanchu010203@gmail.com'
  },

  /* 73 */
  {
    email: 'dinhqminh24@gmail.com'
  },

  /* 74 */
  {
    email: 'vunguyethx2@gmail.com'
  },

  /* 75 */
  {
    email: 'tungtranvnpt@gmail.com'
  },

  /* 76 */
  {
    email: 'thiennhan@gmail.vn.com'
  },

  /* 77 */
  {
    email: 'tmdung94@gmail.com'
  },

  /* 78 */
  {
    email: 'tantgu@gmail.com'
  },

  /* 79 */
  {
    email: 'honganh@gmail.com'
  },

  /* 80 */
  {
    email: 'tvmaitrinh@gmail.com'
  },

  /* 81 */
  {
    email: 'lovelyrose1610@gmail.com'
  },

  /* 82 */
  {
    email: 'ngockhanhs82@gmail.com'
  },

  /* 83 */
  {
    email: 'minhmap3110@gmail.com'
  },

  /* 84 */
  {
    email: 'kaitokid1214d4@gmail.com'
  },

  /* 85 */
  {
    email: 'kienlt82@gmail.com'
  },

  /* 86 */
  {
    email: 'km122212221@gmail.com'
  },

  /* 87 */
  {
    email: 'quang03062007@gmail.com'
  },

  /* 88 */
  {
    email: 'pt.hang@jahwa.co.kr'
  },

  /* 89 */
  {
    email: 'hoanght76@gmail.com'
  },

  /* 90 */
  {
    email: 'ngoanh1603@gmail.com'
  },

  /* 91 */
  {
    email: 'truongthuan86@gmail.com'
  },

  /* 92 */
  {
    email: 'lethilan37kn@gmail.com'
  },

  /* 93 */
  {
    email: 'buibichnguyetytmt@gmail.com'
  },

  /* 94 */
  {
    email: 'toan.email@gmail.com'
  },

  /* 95 */
  {
    email: 'phamhoanglananh@gmail.com'
  },

  /* 96 */
  {
    email: 'dieuhtinh82@gmail.com'
  },

  /* 97 */
  {
    email: 'tminh9915@gmail.com'
  },

  /* 98 */
  {
    email: 'dinhbao150409@gmail.com'
  },

  /* 99 */
  {
    email: 'thanhbinh26675@gmail.com'
  },

  /* 100 */
  {
    email: 'nguyenphandkh@gmail.com'
  },

  /* 101 */
  {
    email: 'nghecon0211@gmail.com'
  },

  /* 102 */
  {
    email: 'nhanapcgl@gmail.com'
  },

  /* 103 */
  {
    email: 'quychuthi@gmail.com'
  },

  /* 104 */
  {
    email: 'namtefo@gmail.com'
  },

  /* 105 */
  {
    email: 'tranminhtrang2005131@gmail.com'
  },

  /* 106 */
  {
    email: 'tranhuypham7@gmail.com'
  },

  /* 107 */
  {
    email: 'hoanghuonggiang1262008@gmail.com'
  },

  /* 108 */
  {
    email: 'vothibinh1977@gmail.com'
  },

  /* 109 */
  {
    email: 'mytran0574@gmail.com'
  },

  /* 110 */
  {
    email: 'vananh.le84@gmail.com'
  },

  /* 111 */
  {
    email: 'ladt2811@gmail.com'
  },

  /* 112 */
  {
    email: '5amytswinner@gmail.com'
  },

  /* 113 */
  {
    email: 'linhnguyentrangia2008@gmail.com'
  },

  /* 114 */
  {
    email: 'vunguythx2@gmail.com'
  },

  /* 115 */
  {
    email: 'dinhminhbms@gmail.com'
  },

  /* 116 */
  {
    email: 'ngtrongduc1402@gmail.com'
  },

  /* 117 */
  {
    email: 'trongtuong.ktnn@gmail.com'
  },

  /* 118 */
  {
    email: 'thuyha2712@gmail.com'
  },

  /* 119 */
  {
    email: 'nguyenthihongvuong.c3dongthanh@quangninh.edu.vn'
  },

  /* 120 */
  {
    email: 'huongtra2a2@gmail.com'
  },

  /* 121 */
  {
    email: 'duongnt29122007@gmail.com'
  },

  /* 122 */
  {
    email: 'vohongthien@gmail.com'
  },

  /* 123 */
  {
    email: 'phubeohp123@gmail.com'
  },

  /* 124 */
  {
    email: 'anhtuan3a1.2007@gmail.com'
  },

  /* 125 */
  {
    email: 'nhikingnguyen@gmail.com'
  },

  /* 126 */
  {
    email: 'nguyenngoctran.62@gmail.com'
  },

  /* 127 */
  {
    email: 'nguyenbaoquyen@gmian.com'
  },

  /* 128 */
  {
    email: 'dinh@gmall.com'
  },

  /* 129 */
  {
    email: 'lanhuong23582@gmail.com'
  },

  /* 130 */
  {
    email: 'dpthanh86@gmail.com'
  },

  /* 131 */
  {
    email: 'khanhchauk12@gmail.com'
  },

  /* 132 */
  {
    email: 'ducnoids1@gmail.com'
  },

  /* 133 */
  {
    email: 'ngockhanh@gmai.com'
  },

  /* 134 */
  {
    email: 'huongdo1507@gmail.com'
  },

  /* 135 */
  {
    email: 'hongbattu@gmail.com'
  },

  /* 136 */
  {
    email: 'thanh.nduy@gmail.com'
  },

  /* 137 */
  {
    email: 'truongson@gmail.com'
  },

  /* 138 */
  {
    email: 'gatrongcon001@gmail.com'
  },

  /* 139 */
  {
    email: 'huong76thanhsen@gmail.com'
  },

  /* 140 */
  {
    email: 'ngochung157@gmail.com'
  },

  /* 141 */
  {
    email: 'thienduc@gmail.comthien'
  },

  /* 142 */
  {
    email: 'lethuy0880@gmail.com'
  },

  /* 143 */
  {
    email: 'lop3lop4lop5@gmail.com'
  },

  /* 144 */
  {
    email: 'dtngocphuong@gmail.com'
  },

  /* 145 */
  {
    email: 'dangnguyenhoangminh2912008@gmail.com'
  },

  /* 146 */
  {
    email: 'datngotqt123@gmail.com'
  },

  /* 147 */
  {
    email: 'tnquynhtrang@gmail.com.vn'
  },

  /* 148 */
  {
    email: 'nguyenttnphuong@gmail.com'
  },

  /* 149 */
  {
    email: 'phutuonghoang@gmail.com'
  },

  /* 150 */
  {
    email: 'trangvu1@gmail.com'
  },

  /* 151 */
  {
    email: 'huongduoc@gmall.com'
  },

  /* 152 */
  {
    email: 'baokhanh@gmail.vn.com'
  },

  /* 153 */
  {
    email: 'ngoquangninh.5a4@gmail.com'
  },

  /* 154 */
  {
    email: 'tthong.ns@gmail.com'
  },

  /* 155 */
  {
    email: 'dangxuan@gmail.com'
  },

  /* 156 */
  {
    email: 'duongwvanan@gmail.com'
  },

  /* 157 */
  {
    email: 'dinhduy@gmail.com'
  },

  /* 158 */
  {
    email: 'duonghang16@gmail.com'
  },

  /* 159 */
  {
    email: 'tuongdt85@gmail.com'
  },

  /* 160 */
  {
    email: 'huongtra2a3@gmail.com'
  },

  /* 161 */
  {
    email: 'thanh128@gmai.com'
  },

  /* 162 */
  {
    email: 'nguyenminhanhthpd@gmail.com'
  },

  /* 163 */
  {
    email: 'nguyenthangloi80@gmail.com'
  },

  /* 164 */
  {
    email: 'yuxc@gmail.com'
  },

  /* 165 */
  {
    email: 'hungnguyen0911@yahoo.com.vn'
  },

  /* 166 */
  {
    email: 'quangminhntn@gmail.com'
  },

  /* 167 */
  {
    email: 'baokhanh15112008@gmail.vn.com'
  },

  /* 168 */
  {
    email: 'huyen08@gmail.com'
  }
];

let a = users.map(o => o.email);
function writeJsonFile(a) {
 
  fs.writeFileSync('./users.json', JSON.stringify(a));

  console.log('Write file successfully');
}


writeJsonFile(a);